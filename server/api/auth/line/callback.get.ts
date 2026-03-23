export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()
  const query = getQuery(event)
  const code = query.code as string

  if (!code) {
    throw createError({ statusCode: 400, statusMessage: 'Missing authorization code' })
  }

  // Exchange code for access token
  const tokenRes = await $fetch<{ access_token: string; id_token: string }>('https://api.line.me/oauth2/v2.1/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      grant_type: 'authorization_code',
      code,
      redirect_uri: config.lineCallbackUrl || 'https://x.pages.dev/api/auth/line/callback',
      client_id: config.lineChannelId,
      client_secret: config.lineChannelSecret,
    }).toString(),
  })

  // Get user profile
  const profile = await $fetch<{ userId: string; displayName: string; pictureUrl?: string }>('https://api.line.me/v2/profile', {
    headers: { Authorization: `Bearer ${tokenRes.access_token}` },
  })

  // TODO: Save/update user in database via Drizzle ORM
  // const db = useDB()
  // await db.insert(users).values({ lineUserId: profile.userId, name: profile.displayName, role: 'user' })
  //   .onDuplicateKeyUpdate({ set: { name: profile.displayName } })

  // Redirect to home with success
  return sendRedirect(event, '/?login=success')
})

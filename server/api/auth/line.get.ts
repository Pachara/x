export default defineEventHandler((event) => {
  const config = useRuntimeConfig()

  if (!config.lineChannelId) {
    throw createError({
      statusCode: 500,
      statusMessage: 'LINE OAuth ยังไม่ได้ตั้งค่า',
    })
  }

  const params = new URLSearchParams({
    response_type: 'code',
    client_id: config.lineChannelId,
    redirect_uri: config.lineCallbackUrl || 'https://x.pages.dev/api/auth/line/callback',
    state: crypto.randomUUID(),
    scope: 'profile openid',
  })

  return sendRedirect(event, `https://access.line.me/oauth2/v2.1/authorize?${params}`)
})

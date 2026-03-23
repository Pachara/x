export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, phone, source } = body

  if (!name || !phone) {
    throw createError({
      statusCode: 400,
      statusMessage: 'กรุณากรอกชื่อและเบอร์โทร',
    })
  }

  // TODO: Save to database via Drizzle ORM when DB is connected
  // const db = useDB()
  // await db.insert(leads).values({ name, phone, source: source || 'website' })

  return {
    success: true,
    message: 'ขอบคุณครับ เจ้าหน้าที่จะติดต่อกลับโดยเร็ว',
  }
})

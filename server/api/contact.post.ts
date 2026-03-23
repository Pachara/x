export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { name, phone, email, message } = body

  if (!name || !phone || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'กรุณากรอกชื่อ เบอร์โทร และข้อความ',
    })
  }

  // TODO: Save to database + send notification
  // Could also send LINE notification to admin

  return {
    success: true,
    message: 'ส่งข้อความเรียบร้อยแล้ว เราจะติดต่อกลับโดยเร็วที่สุดครับ',
  }
})

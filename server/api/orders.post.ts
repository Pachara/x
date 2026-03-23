export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  const { customerName, customerPhone, items, notes } = body

  if (!customerName || !customerPhone || !items?.length) {
    throw createError({
      statusCode: 400,
      statusMessage: 'กรุณากรอกชื่อ เบอร์โทร และรายการสินค้า',
    })
  }

  // TODO: Save to database via Drizzle ORM when DB is connected
  // const db = useDB()
  // const [customer] = await db.insert(customers).values({ name: customerName, phone: customerPhone })
  // const [order] = await db.insert(salesOrders).values({ customerId: customer.id, status: 'pending', total: 0 })

  return {
    success: true,
    message: 'รับออเดอร์เรียบร้อยแล้ว เจ้าหน้าที่จะติดต่อกลับเพื่อยืนยันราคาและจัดส่ง',
    order: {
      id: Date.now(),
      customerName,
      customerPhone,
      items,
      notes,
      status: 'pending',
      createdAt: new Date().toISOString(),
    },
  }
})

import { createEventStream } from 'h3'

const prices = [
  { id: 1, name: 'น้ำตาลทรายขาว (กระสอบ 50 กก.)', price: 850, unit: 'กระสอบ' },
  { id: 2, name: 'น้ำตาลทรายแดง (กระสอบ 50 กก.)', price: 880, unit: 'กระสอบ' },
  { id: 3, name: 'น้ำตาลทรายขาว (ถุง 1 กก.)', price: 22, unit: 'ถุง' },
  { id: 4, name: 'น้ำตาลทรายแดง (ถุง 1 กก.)', price: 25, unit: 'ถุง' },
]

export default defineEventHandler(async (event) => {
  const stream = createEventStream(event)

  // Send initial prices
  await stream.push(JSON.stringify({ type: 'prices', data: prices }))

  // Simulate price updates every 30 seconds
  const interval = setInterval(async () => {
    const updated = prices.map(p => ({
      ...p,
      price: p.price + Math.round((Math.random() - 0.5) * 10),
      updatedAt: new Date().toISOString(),
    }))
    await stream.push(JSON.stringify({ type: 'update', data: updated }))
  }, 30000)

  stream.onClosed(() => {
    clearInterval(interval)
  })

  return stream.send()
})

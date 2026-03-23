<script setup lang="ts">
interface PriceItem {
  id: number
  name: string
  price: number
  unit: string
  updatedAt?: string
}

const prices = ref<PriceItem[]>([
  { id: 1, name: 'น้ำตาลทรายขาว (กระสอบ 50 กก.)', price: 850, unit: 'กระสอบ' },
  { id: 2, name: 'น้ำตาลทรายแดง (กระสอบ 50 กก.)', price: 880, unit: 'กระสอบ' },
  { id: 3, name: 'น้ำตาลทรายขาว (ถุง 1 กก.)', price: 22, unit: 'ถุง' },
  { id: 4, name: 'น้ำตาลทรายแดง (ถุง 1 กก.)', price: 25, unit: 'ถุง' },
])

const connected = ref(false)

onMounted(() => {
  try {
    const es = new EventSource('/prices/stream')
    es.onmessage = (e) => {
      const msg = JSON.parse(e.data)
      if (msg.data) {
        prices.value = msg.data
        connected.value = true
      }
    }
    es.onerror = () => {
      connected.value = false
    }
  } catch {
    // SSE not available, use static prices
  }
})
</script>

<template>
  <section class="py-16 px-4 bg-light" aria-label="ราคาน้ำตาลวันนี้">
    <div class="max-w-[1280px] mx-auto">
      <h2 class="text-3xl font-bold text-dark text-center mb-2">ราคาน้ำตาลวันนี้</h2>
      <p v-if="connected" class="text-center text-sm text-secondary mb-8">
        <span class="inline-block w-2 h-2 bg-secondary rounded-full mr-1 animate-pulse" />
        อัปเดตแบบเรียลไทม์
      </p>
      <p v-else class="text-center text-sm text-dark/40 mb-8">ราคาอ้างอิง</p>

      <div class="max-w-2xl mx-auto bg-white rounded-2xl shadow-sm overflow-hidden">
        <table class="w-full">
          <thead>
            <tr class="bg-primary text-white">
              <th class="text-left px-6 py-3 font-semibold">สินค้า</th>
              <th class="text-center px-4 py-3 font-semibold">หน่วย</th>
              <th class="text-right px-6 py-3 font-semibold">ราคา (บาท)</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item, i) in prices" :key="item.id" :class="i % 2 === 0 ? 'bg-white' : 'bg-light'">
              <td class="px-6 py-4 text-dark">{{ item.name }}</td>
              <td class="px-4 py-4 text-center text-dark/70">{{ item.unit }}</td>
              <td class="px-6 py-4 text-right font-bold text-primary text-lg">{{ item.price.toLocaleString() }}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <p class="text-center text-sm text-dark/50 mt-4">* ราคาเปลี่ยนแปลงตามตลาด กรุณาโทรสอบถามราคาล่าสุด 081-669-3077</p>
    </div>
  </section>
</template>

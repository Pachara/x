<script setup lang="ts">
interface PriceItem {
  id: number
  name: string
  price: number
  unit: string
  type: 'white' | 'brown'
  updatedAt?: string
}

const prices = ref<PriceItem[]>([
  { id: 1, name: 'น้ำตาลทรายขาว', price: 850, unit: 'กระสอบ 50 กก.', type: 'white' },
  { id: 2, name: 'น้ำตาลทรายแดง', price: 880, unit: 'กระสอบ 50 กก.', type: 'brown' },
  { id: 3, name: 'น้ำตาลทรายขาว', price: 22, unit: 'ถุง 1 กก.', type: 'white' },
  { id: 4, name: 'น้ำตาลทรายแดง', price: 25, unit: 'ถุง 1 กก.', type: 'brown' },
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
    es.onerror = () => { connected.value = false }
  } catch {}
})
</script>

<template>
  <section class="py-20 px-6 bg-gray-50" aria-label="ราคาน้ำตาลวันนี้">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-dark mb-3">ราคาน้ำตาลวันนี้</h2>
        <p class="text-dark/50">
          <span v-if="connected" class="inline-flex items-center gap-1.5">
            <span class="w-2 h-2 bg-secondary rounded-full animate-pulse" />
            อัปเดตแบบเรียลไทม์
          </span>
          <span v-else>ราคาอ้างอิง — โทรสอบถามราคาล่าสุด</span>
        </p>
      </div>

      <div class="grid grid-cols-2 lg:grid-cols-4 gap-5">
        <div
          v-for="item in prices"
          :key="item.id"
          class="bg-white rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
          :class="item.type === 'white' ? 'border-b-2 border-primary' : 'border-b-2 border-accent'"
        >
          <div class="flex items-center gap-2 mb-4">
            <span
              class="w-3 h-3 rounded-full"
              :class="item.type === 'white' ? 'bg-amber-100 border border-amber-300' : 'bg-amber-700'"
            />
            <span class="text-sm text-dark/50">{{ item.type === 'white' ? 'ทรายขาว' : 'ทรายแดง' }}</span>
          </div>
          <p class="text-dark font-medium mb-1">{{ item.name }}</p>
          <p class="text-3xl font-bold text-primary mb-1">฿{{ item.price.toLocaleString() }}</p>
          <p class="text-sm text-dark/40">{{ item.unit }}</p>
        </div>
      </div>

      <p class="text-center text-sm text-dark/40 mt-8">* ราคาเปลี่ยนแปลงตามตลาด กรุณาโทรสอบถามราคาล่าสุด 081-669-3077</p>
    </div>
  </section>
</template>

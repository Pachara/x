<script setup>
const form = reactive({ name: '', phone: '' })
const submitted = ref(false)
const loading = ref(false)

async function handleSubmit() {
  loading.value = true
  try {
    await $fetch('/api/leads', {
      method: 'POST',
      body: { ...form, source: 'website-popup' },
    })
    submitted.value = true
  } catch {
    // Silent fail — lead capture should not block UX
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div class="bg-accent/10 border border-accent/30 rounded-2xl p-6">
    <div v-if="!submitted">
      <h3 class="text-lg font-bold text-dark mb-2">รับราคาน้ำตาลทรายล่าสุด</h3>
      <p class="text-sm text-dark/60 mb-4">กรอกข้อมูลเพื่อรับใบเสนอราคาทันที</p>
      <form class="space-y-3" @submit.prevent="handleSubmit">
        <input v-model="form.name" type="text" required placeholder="ชื่อ" class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
        <input v-model="form.phone" type="tel" required placeholder="เบอร์โทร" class="w-full px-4 py-2 border border-gray-200 rounded-lg text-sm focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none" />
        <button type="submit" :disabled="loading" class="w-full bg-primary text-white py-2 rounded-lg font-semibold text-sm hover:bg-primary-dark transition-colors disabled:opacity-50" aria-label="รับใบเสนอราคา">
          {{ loading ? 'กำลังส่ง...' : 'รับใบเสนอราคา' }}
        </button>
      </form>
    </div>
    <div v-else class="text-center py-4">
      <Icon name="heroicons:check-circle" class="w-10 h-10 text-secondary mx-auto mb-2" aria-hidden="true" />
      <p class="font-semibold text-dark">ขอบคุณครับ!</p>
      <p class="text-sm text-dark/60">เจ้าหน้าที่จะติดต่อกลับโดยเร็ว</p>
    </div>
  </div>
</template>

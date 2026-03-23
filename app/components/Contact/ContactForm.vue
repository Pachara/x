<script setup>
const form = reactive({
  name: '',
  phone: '',
  email: '',
  message: '',
})

const submitted = ref(false)
const loading = ref(false)
const error = ref('')

async function handleSubmit() {
  loading.value = true
  error.value = ''

  try {
    await $fetch('/api/contact', {
      method: 'POST',
      body: { ...form },
    })
    submitted.value = true
  } catch (e: any) {
    error.value = e.data?.statusMessage || 'เกิดข้อผิดพลาด กรุณาลองใหม่'
  } finally {
    loading.value = false
  }
}
</script>

<template>
  <div>
    <form v-if="!submitted" class="space-y-5" @submit.prevent="handleSubmit">
      <div>
        <label for="name" class="block text-sm font-medium text-dark mb-1">ชื่อ-นามสกุล</label>
        <input id="name" v-model="form.name" type="text" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="กรอกชื่อของคุณ" />
      </div>
      <div>
        <label for="phone" class="block text-sm font-medium text-dark mb-1">เบอร์โทรศัพท์</label>
        <input id="phone" v-model="form.phone" type="tel" required class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="08x-xxx-xxxx" />
      </div>
      <div>
        <label for="email" class="block text-sm font-medium text-dark mb-1">อีเมล (ไม่จำเป็น)</label>
        <input id="email" v-model="form.email" type="email" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all" placeholder="email@example.com" />
      </div>
      <div>
        <label for="message" class="block text-sm font-medium text-dark mb-1">ข้อความ</label>
        <textarea id="message" v-model="form.message" required rows="4" class="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/30 focus:border-primary outline-none transition-all resize-none" placeholder="สอบถามราคา สั่งซื้อ หรือข้อความอื่นๆ" />
      </div>
      <p v-if="error" class="text-red-500 text-sm">{{ error }}</p>
      <button type="submit" :disabled="loading" class="w-full bg-primary text-white py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-50" aria-label="ส่งข้อความ">
        {{ loading ? 'กำลังส่ง...' : 'ส่งข้อความ' }}
      </button>
    </form>
    <div v-else class="text-center py-10">
      <Icon name="heroicons:check-circle" class="w-16 h-16 text-secondary mx-auto mb-4" aria-hidden="true" />
      <p class="text-xl font-semibold text-dark">ส่งข้อความเรียบร้อยแล้ว!</p>
      <p class="text-dark/60 mt-2">เราจะติดต่อกลับโดยเร็วที่สุดครับ</p>
    </div>
  </div>
</template>

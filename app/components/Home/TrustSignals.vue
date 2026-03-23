<script setup>
const signals = [
  { icon: 'heroicons:truck', title: 'จัดส่งทั่วประเทศ', text: 'ภาคใต้ 1-2 วัน กรุงเทพฯ 2-3 วัน' },
  { icon: 'heroicons:users', title: 'ลูกค้ากว่า 500+ ราย', text: 'ร้านค้า โรงงาน ร้านอาหาร' },
  { icon: 'heroicons:calendar-days', title: 'ประสบการณ์กว่า 10 ปี', text: 'ผู้จัดจำหน่ายที่ไว้ใจได้' },
  { icon: 'heroicons:shield-check', title: 'สินค้าคุณภาพ', text: 'จากโรงงานมาตรฐาน' },
]
</script>

<template>
  <section class="py-20 px-6" aria-label="ทำไมต้องเลือกเรา">
    <h2 class="sr-only">ทำไมต้องเลือก บุ่นเส่ง ไทยชูการ์</h2>
    <div class="max-w-[1280px] mx-auto">
      <div class="grid grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="s in signals" :key="s.title" class="text-center">
          <div class="bg-primary/10 text-primary w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-4">
            <Icon :name="s.icon" class="w-7 h-7" aria-hidden="true" />
          </div>
          <h3 class="font-semibold text-dark mb-1">{{ s.title }}</h3>
          <p class="text-sm text-dark/60">{{ s.text }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

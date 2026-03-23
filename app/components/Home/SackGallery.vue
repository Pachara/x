<script setup>
const sacks = Array.from({ length: 29 }, (_, i) => ({
  id: i + 1,
  src: `/images/sacks/${i + 1}.png`,
  alt: `กระสอบน้ำตาลทราย แบบที่ ${i + 1}`,
}))
</script>

<template>
  <section class="py-20 px-6 bg-gray-50" aria-label="แกลเลอรี่กระสอบน้ำตาลทราย">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-dark mb-3">รูปแบบกระสอบน้ำตาลทราย</h2>
        <p class="text-dark/50">น้ำตาลทรายจากหลายยี่ห้อ หลายโรงงาน พร้อมจัดส่ง</p>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
        <div
          v-for="sack in sacks"
          :key="sack.id"
          class="bg-white rounded-xl overflow-hidden border border-gray-100 hover:shadow-[var(--shadow-card)] transition-all"
        >
          <NuxtImg
            :src="sack.src"
            :alt="sack.alt"
            width="150"
            height="150"
            class="w-full aspect-square object-cover"
            loading="lazy"
            format="webp"
          />
        </div>
      </div>
    </div>
  </section>
</template>

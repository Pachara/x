<script setup>
const brands = [
  { id: 1, name: 'ษฎา', logo: '/images/brands/1.png' },
  { id: 2, name: 'มิตรผล', logo: '/images/brands/2.png' },
  { id: 4, name: 'วังขนาย', logo: '/images/brands/4.png' },
  { id: 13, name: 'ไทยเอกลักษณ์', logo: '/images/brands/13.png' },
  { id: 46, name: 'เกษตรไทย', logo: '/images/brands/46.png' },
  { id: 48, name: 'ไทยรุ่งเรือง', logo: '/images/brands/48.png' },
  { id: 49, name: 'น้ำตาลขอนแก่น', logo: '/images/brands/49.png' },
  { id: 52, name: 'ครบุรี', logo: '/images/brands/52.png' },
  { id: 53, name: 'บุรีรัมย์', logo: '/images/brands/53.png' },
  { id: 54, name: 'เอราวัณ', logo: '/images/brands/54.png' },
  { id: 55, name: 'ไทยอุดม', logo: '/images/brands/55.png' },
  { id: 56, name: 'รวมเกษตร', logo: '/images/brands/56.png' },
]
</script>

<template>
  <section class="py-20 px-6" aria-label="ยี่ห้อน้ำตาลทราย">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-dark mb-3">ยี่ห้อน้ำตาลทรายที่จำหน่าย</h2>
        <p class="text-dark/50">น้ำตาลทรายคุณภาพจากโรงงานชั้นนำทั่วประเทศ</p>
      </div>
      <div class="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-4">
        <div
          v-for="brand in brands"
          :key="brand.id"
          class="bg-white border border-gray-100 rounded-xl p-4 flex flex-col items-center justify-center hover:shadow-[var(--shadow-card)] transition-all"
        >
          <NuxtImg
            :src="brand.logo"
            :alt="`โลโก้ ${brand.name}`"
            width="80"
            height="80"
            class="object-contain h-16 mb-2"
            loading="lazy"
            format="webp"
          />
          <p class="text-xs text-dark/60 text-center">{{ brand.name }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

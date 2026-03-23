<script setup>
useSeoMeta({
  title: 'เกี่ยวกับเรา',
  description: 'บุ่นเส่ง ไทยชูการ์ — จำหน่ายน้ำตาลทรายขาว น้ำตาลทรายแดง ราคาส่ง จังหวัดนครศรีธรรมราช บริการจัดส่งทั่วประเทศ',
  ogTitle: 'เกี่ยวกับเรา | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/about',
})

const values = [
  { icon: 'heroicons:shield-check', title: 'สินค้าคุณภาพ', text: 'จำหน่ายน้ำตาลทรายจากโรงงานมาตรฐาน หลายยี่ห้อให้เลือก มั่นใจในคุณภาพทุกกระสอบ' },
  { icon: 'heroicons:currency-dollar', title: 'ราคาส่งยุติธรรม', text: 'ราคาส่งตรงจากผู้จัดจำหน่าย ไม่ผ่านคนกลาง สั่งยิ่งมาก ยิ่งคุ้ม เหมาะสำหรับร้านค้าและผู้ค้าส่ง' },
  { icon: 'heroicons:truck', title: 'จัดส่งรวดเร็ว', text: 'บริการจัดส่งทั่วประเทศ รวดเร็ว ปลอดภัย พร้อมให้บริการทั้งจำนวนน้อยและมาก' },
]
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-8">เกี่ยวกับเรา</h1>

    <section class="mb-16" aria-label="เรื่องราวของเรา">
      <div class="max-w-3xl">
        <h2 class="text-2xl font-bold text-dark mb-4">บุ่นเส่ง ไทยชูการ์</h2>
        <p class="text-dark/70 text-lg leading-relaxed mb-4">
          บุ่นเส่ง ไทยชูการ์ เป็นผู้จัดจำหน่ายน้ำตาลทรายรายใหญ่ในจังหวัดนครศรีธรรมราช
          ให้บริการจำหน่ายน้ำตาลทรายขาวและน้ำตาลทรายแดงจากหลายยี่ห้อชั้นนำ
          ทั้งราคาส่งและปลีก จัดส่งทั่วประเทศ
        </p>
        <p class="text-dark/70 text-lg leading-relaxed">
          ด้วยประสบการณ์ในธุรกิจค้าส่งน้ำตาลทรายมายาวนาน
          เราจึงมุ่งเน้นการให้บริการที่รวดเร็ว ราคายุติธรรม
          และสร้างความสัมพันธ์ที่ดีกับลูกค้าทุกราย
          ไม่ว่าจะเป็นร้านค้า ร้านอาหาร โรงงาน หรือผู้ค้าส่ง
        </p>
      </div>
    </section>

    <section class="mb-16" aria-label="จุดเด่นของเรา">
      <h2 class="text-2xl font-bold text-dark mb-8 text-center">ทำไมต้องเลือกเรา</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article v-for="v in values" :key="v.title" class="bg-light rounded-2xl p-8 text-center">
          <Icon :name="v.icon" class="w-12 h-12 text-primary mx-auto mb-4" aria-hidden="true" />
          <h3 class="text-lg font-bold text-dark mb-3">{{ v.title }}</h3>
          <p class="text-dark/60 leading-relaxed">{{ v.text }}</p>
        </article>
      </div>
    </section>
  </div>
</template>

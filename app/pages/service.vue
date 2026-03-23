<script setup>
useSeoMeta({
  title: 'บริการของเรา',
  description: 'บริการจัดส่งน้ำตาลทรายทั่วประเทศ ราคาส่งพิเศษ ทั้งน้ำตาลทรายขาวและน้ำตาลทรายแดง บุ่นเส่ง ไทยชูการ์',
  ogTitle: 'บริการจัดส่งน้ำตาลทราย | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/service',
})

const services = [
  {
    icon: 'heroicons:truck',
    title: 'จัดส่งทั่วประเทศ',
    text: 'บริการจัดส่งน้ำตาลทรายถึงหน้าร้าน ถึงโรงงาน ด้วยรถขนส่งที่เหมาะสม สินค้าถึงมืออย่างปลอดภัย ทั้งในภาคใต้และทั่วประเทศ',
  },
  {
    icon: 'heroicons:building-storefront',
    title: 'ขายส่ง (B2B)',
    text: 'ราคาส่งพิเศษสำหรับร้านค้า ร้านอาหาร โรงงาน โรงแรม และผู้ค้าส่ง สั่งจำนวนมากราคาดีกว่า พร้อมเงื่อนไขการชำระเงินที่ยืดหยุ่น',
  },
  {
    icon: 'heroicons:shopping-bag',
    title: 'ขายปลีก',
    text: 'จำหน่ายน้ำตาลทรายปลีกขนาดถุง 1 กก. สำหรับใช้ในครัวเรือน มีทั้งน้ำตาลทรายขาวและน้ำตาลทรายแดง หลายยี่ห้อให้เลือก',
  },
]
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-8">บริการจัดส่งน้ำตาลทราย</h1>

    <section class="mb-16" aria-label="บริการของเรา">
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article v-for="s in services" :key="s.title" class="bg-white border border-gray-100 rounded-2xl p-8 hover:shadow-md transition-shadow">
          <Icon :name="s.icon" class="w-12 h-12 text-primary mb-4" aria-hidden="true" />
          <h2 class="text-xl font-bold text-dark mb-3">{{ s.title }}</h2>
          <p class="text-dark/60 leading-relaxed">{{ s.text }}</p>
        </article>
      </div>
    </section>

    <section class="bg-light rounded-2xl p-8 md:p-12 text-center" aria-label="พื้นที่ให้บริการ">
      <h2 class="text-2xl font-bold text-dark mb-4">พื้นที่ให้บริการ</h2>
      <p class="text-dark/70 text-lg max-w-2xl mx-auto mb-8">
        เราให้บริการจัดส่งน้ำตาลทรายทั่วประเทศไทย
        สำหรับพื้นที่ภาคใต้สามารถจัดส่งได้ภายใน 1-2 วัน
        พื้นที่อื่นๆ 3-5 วันทำการ
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="tel:+66816693077" class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors" aria-label="โทรสอบถามบริการ 081-669-3077">
          โทรสอบถาม
        </a>
        <NuxtLink to="/contact" class="border-2 border-primary text-primary px-8 py-3 rounded-full font-semibold hover:bg-primary hover:text-white transition-colors" aria-label="ไปหน้าติดต่อเรา">
          ติดต่อเรา
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

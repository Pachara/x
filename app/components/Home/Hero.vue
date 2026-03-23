<template>
  <section class="relative min-h-[70vh] flex items-center justify-center bg-dark overflow-hidden" aria-label="Hero">
    <div class="absolute inset-0 bg-gradient-to-b from-dark/60 to-dark/80 z-10" />
    <div class="relative z-20 text-center px-4 max-w-3xl mx-auto">
      <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 leading-tight">
        น้ำตาลทรายราคาส่ง
      </h1>
      <p class="text-lg md:text-xl text-white/80 mb-2">
        บุ่นเส่ง ไทยชูการ์
      </p>
      <p class="text-base md:text-lg text-white/70 mb-8 leading-relaxed max-w-2xl mx-auto">
        จำหน่ายน้ำตาลทรายขาว น้ำตาลทรายแดง หลายยี่ห้อ ราคาส่ง
        จัดส่งทั่วประเทศ บริการรวดเร็ว ราคายุติธรรม
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <NuxtLink
          to="/products"
          class="bg-primary text-white px-8 py-3 rounded-full font-semibold hover:bg-primary-dark transition-colors text-lg"
          aria-label="ดูสินค้าน้ำตาลทราย"
        >
          ดูสินค้าและราคา
        </NuxtLink>
        <a
          href="tel:+66816693077"
          class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-dark transition-colors text-lg"
          aria-label="โทรสั่งซื้อ 081-669-3077"
        >
          โทร 081-669-3077
        </a>
      </div>
    </div>
  </section>
</template>

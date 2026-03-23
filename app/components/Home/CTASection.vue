<template>
  <section class="py-8 px-6" aria-label="สั่งซื้อน้ำตาลทราย">
    <div class="max-w-5xl mx-auto bg-gradient-to-br from-primary to-primary-dark rounded-3xl shadow-lg py-16 px-8 text-center my-16">
      <h2 class="text-3xl font-bold text-white mb-4">พร้อมสั่งซื้อน้ำตาลทรายราคาส่ง?</h2>
      <p class="text-white/75 text-lg mb-10 max-w-xl mx-auto">
        สั่งซื้อได้หลายช่องทาง ทั้งโทรศัพท์และ LINE
        จัดส่งทั่วประเทศ ราคาส่งพิเศษสำหรับร้านค้าและผู้ค้าส่ง
      </p>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a
          href="tel:+66816693077"
          class="bg-white text-primary px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg transition-all"
          aria-label="โทรสั่งซื้อ 081-669-3077"
        >
          <Icon name="heroicons:phone" class="w-5 h-5 inline mr-2" aria-hidden="true" />
          โทรสั่งซื้อ
        </a>
        <a
          href="https://line.me"
          target="_blank"
          rel="noopener noreferrer"
          class="bg-secondary text-white px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all"
          aria-label="สั่งซื้อผ่าน LINE"
        >
          <Icon name="simple-icons:line" class="w-5 h-5 inline mr-2" aria-hidden="true" />
          LINE สั่งซื้อ
        </a>
        <NuxtLink
          to="/products"
          class="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-primary transition-all"
          aria-label="ดูสินค้าทั้งหมด"
        >
          ดูสินค้าทั้งหมด
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

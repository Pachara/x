<template>
  <section class="bg-gradient-to-br from-primary-light via-white to-white py-20 px-6" aria-label="Hero">
    <div class="max-w-[1280px] mx-auto">
      <div class="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <!-- Text -->
        <div class="order-2 md:order-1">
          <span class="inline-block bg-primary/10 text-primary text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            ผู้จัดจำหน่ายน้ำตาลทรายรายใหญ่ภาคใต้
          </span>
          <h1 class="text-4xl md:text-5xl font-bold text-dark mb-5 leading-tight">
            น้ำตาลทรายราคาส่ง
          </h1>
          <p class="text-lg text-dark/60 mb-3 font-light">
            บุ่นเส่ง ไทยชูการ์
          </p>
          <p class="text-base text-dark/50 mb-8 leading-relaxed max-w-lg">
            จำหน่ายน้ำตาลทรายขาว น้ำตาลทรายแดง หลายยี่ห้อ ราคาส่ง
            จัดส่งทั่วประเทศ บริการรวดเร็ว ราคายุติธรรม
          </p>
          <div class="flex flex-col sm:flex-row gap-3">
            <NuxtLink
              to="/products"
              class="bg-primary text-white px-8 py-4 rounded-xl font-semibold shadow-md hover:shadow-lg hover:bg-primary-dark transition-all text-center"
              aria-label="ดูสินค้าน้ำตาลทราย"
            >
              ดูสินค้าและราคา
            </NuxtLink>
            <a
              href="tel:+66816693077"
              class="bg-white border border-gray-200 text-dark px-8 py-4 rounded-xl font-semibold shadow-sm hover:shadow-md transition-all text-center"
              aria-label="โทรสั่งซื้อ 081-669-3077"
            >
              โทร 081-669-3077
            </a>
          </div>
        </div>

        <!-- Image -->
        <div class="order-1 md:order-2 flex justify-center">
          <div class="bg-white rounded-3xl shadow-lg p-6 max-w-sm">
            <NuxtImg
              src="/images/white-sugar.png"
              alt="น้ำตาลทราย บุ่นเส่ง ไทยชูการ์"
              width="400"
              height="400"
              class="object-contain"
              format="webp"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

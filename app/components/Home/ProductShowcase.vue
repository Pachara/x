<script setup>
const products = [
  {
    slug: 'white-sugar-50kg',
    name: 'น้ำตาลทรายขาว กระสอบ 50 กก.',
    price: 'ติดต่อสอบถาม',
    image: '/images/white-sugar.png',
    alt: 'น้ำตาลทรายขาว กระสอบ 50 กิโลกรัม',
  },
  {
    slug: 'brown-sugar-50kg',
    name: 'น้ำตาลทรายแดง กระสอบ 50 กก.',
    price: 'ติดต่อสอบถาม',
    image: '/images/brown-sugar.png',
    alt: 'น้ำตาลทรายแดง กระสอบ 50 กิโลกรัม',
  },
  {
    slug: 'white-sugar-1kg',
    name: 'น้ำตาลทรายขาว ถุง 1 กก.',
    price: 'ติดต่อสอบถาม',
    image: '/images/white-sugar-1kg.png',
    alt: 'น้ำตาลทรายขาว ถุง 1 กิโลกรัม',
  },
]
</script>

<template>
  <section class="py-20 px-6" aria-label="สินค้าของเรา">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-dark mb-3">สินค้าของเรา</h2>
        <p class="text-dark/50">น้ำตาลทรายคุณภาพ หลายยี่ห้อ ราคาส่งตรงจากผู้จัดจำหน่าย</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard v-for="product in products" :key="product.slug" :product="product" />
      </div>
    </div>
  </section>
</template>

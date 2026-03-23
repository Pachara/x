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
  <section class="py-16 px-4" aria-label="สินค้าของเรา">
    <div class="max-w-[1280px] mx-auto">
      <h2 class="text-3xl font-bold text-dark text-center mb-10">สินค้าของเรา</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ProductCard v-for="product in products" :key="product.slug" :product="product" />
      </div>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'สินค้าน้ำตาลทราย — ราคาส่ง',
  description: 'จำหน่ายน้ำตาลทรายขาว น้ำตาลทรายแดง หลายยี่ห้อ ราคาส่ง กระสอบ 50 กก. และถุง 1 กก. จัดส่งทั่วประเทศ',
  ogTitle: 'สินค้าน้ำตาลทราย — ราคาส่ง | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/products',
})

const products = [
  { slug: 'white-sugar-50kg', name: 'น้ำตาลทรายขาว กระสอบ 50 กก.', price: 'ติดต่อสอบถาม', image: '/images/white-sugar.png', alt: 'น้ำตาลทรายขาว กระสอบ 50 กิโลกรัม' },
  { slug: 'brown-sugar-50kg', name: 'น้ำตาลทรายแดง กระสอบ 50 กก.', price: 'ติดต่อสอบถาม', image: '/images/brown-sugar.png', alt: 'น้ำตาลทรายแดง กระสอบ 50 กิโลกรัม' },
  { slug: 'white-sugar-1kg', name: 'น้ำตาลทรายขาว ถุง 1 กก.', price: 'ติดต่อสอบถาม', image: '/images/white-sugar-1kg.png', alt: 'น้ำตาลทรายขาว ถุง 1 กิโลกรัม' },
  { slug: 'brown-sugar-1kg', name: 'น้ำตาลทรายแดง ถุง 1 กก.', price: 'ติดต่อสอบถาม', image: '/images/brown-sugar-1kg.png', alt: 'น้ำตาลทรายแดง ถุง 1 กิโลกรัม' },
]

const selectedBrand = ref('ทั้งหมด')

const filtered = computed(() => {
  if (selectedBrand.value === 'ทั้งหมด') return products
  if (selectedBrand.value === 'น้ำตาลทรายขาว') return products.filter(p => p.name.includes('ขาว'))
  if (selectedBrand.value === 'น้ำตาลทรายแดง') return products.filter(p => p.name.includes('แดง'))
  return products
})
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-6">สินค้าน้ำตาลทราย</h1>
    <ProductFilter @filter="selectedBrand = $event" />
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <ProductCard v-for="product in filtered" :key="product.slug" :product="product" />
    </div>
  </div>
</template>

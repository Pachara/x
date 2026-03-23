<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const productsMap: Record<string, { name: string; description: string; price: number; unit: string; image: string; alt: string }> = {
  'white-sugar-50kg': {
    name: 'น้ำตาลทรายขาว กระสอบ 50 กก.',
    description: 'น้ำตาลทรายขาวบริสุทธิ์ คุณภาพมาตรฐาน เหมาะสำหรับร้านอาหาร โรงงาน ร้านเบเกอรี่ และผู้ค้าส่ง บรรจุกระสอบ 50 กิโลกรัม',
    price: 0,
    unit: 'กระสอบ 50 กก.',
    image: '/images/white-sugar.png',
    alt: 'น้ำตาลทรายขาว กระสอบ 50 กิโลกรัม',
  },
  'brown-sugar-50kg': {
    name: 'น้ำตาลทรายแดง กระสอบ 50 กก.',
    description: 'น้ำตาลทรายแดงคุณภาพ เหมาะสำหรับทำขนม เครื่องดื่ม และอาหาร ให้สีสวยและรสชาติกลมกล่อม บรรจุกระสอบ 50 กิโลกรัม',
    price: 0,
    unit: 'กระสอบ 50 กก.',
    image: '/images/brown-sugar.png',
    alt: 'น้ำตาลทรายแดง กระสอบ 50 กิโลกรัม',
  },
  'white-sugar-1kg': {
    name: 'น้ำตาลทรายขาว ถุง 1 กก.',
    description: 'น้ำตาลทรายขาวบริสุทธิ์ ขนาดถุง 1 กิโลกรัม เหมาะสำหรับใช้ในครัวเรือนและร้านค้าปลีก',
    price: 0,
    unit: 'ถุง 1 กก.',
    image: '/images/white-sugar-1kg.png',
    alt: 'น้ำตาลทรายขาว ถุง 1 กิโลกรัม',
  },
  'brown-sugar-1kg': {
    name: 'น้ำตาลทรายแดง ถุง 1 กก.',
    description: 'น้ำตาลทรายแดงคุณภาพ ขนาดถุง 1 กิโลกรัม เหมาะสำหรับใช้ในครัวเรือนและร้านค้าปลีก',
    price: 0,
    unit: 'ถุง 1 กก.',
    image: '/images/brown-sugar-1kg.png',
    alt: 'น้ำตาลทรายแดง ถุง 1 กิโลกรัม',
  },
}

const product = productsMap[slug]

if (product) {
  useSeoMeta({
    title: product.name,
    description: product.description,
    ogTitle: `${product.name} | บุ่นเส่ง ไทยชูการ์`,
    ogDescription: product.description,
    ogImage: `https://x.pages.dev${product.image}`,
    ogUrl: `https://x.pages.dev/products/${slug}`,
  })

  if (product.price > 0) {
    useProductSchema({
      name: product.name,
      description: product.description,
      image: `https://x.pages.dev${product.image}`,
      price: product.price,
    })
  }
}
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <LayoutBreadcrumb />

    <div v-if="product" class="grid grid-cols-1 md:grid-cols-2 gap-10 mt-4">
      <div class="bg-light rounded-2xl p-8 flex items-center justify-center">
        <NuxtImg :src="product.image" :alt="product.alt" width="500" height="500" class="object-contain max-h-[400px]" format="webp" />
      </div>

      <div class="flex flex-col justify-center">
        <h1 class="text-3xl font-bold text-dark mb-4">{{ product.name }}</h1>
        <p class="text-dark/70 text-lg mb-6 leading-relaxed">{{ product.description }}</p>

        <div class="bg-light rounded-xl p-6 mb-6">
          <p class="text-sm text-dark/50 mb-1">ราคา</p>
          <p class="text-2xl font-bold text-primary">โทรสอบถามราคาล่าสุด</p>
          <p class="text-sm text-dark/50 mt-1">ราคาเปลี่ยนแปลงตามตลาด</p>
        </div>

        <div class="flex flex-col sm:flex-row gap-3">
          <a href="tel:+66816693077" class="bg-primary text-white px-6 py-3 rounded-xl font-semibold text-center hover:bg-primary-dark transition-colors" aria-label="โทรสั่งซื้อ 081-669-3077">
            <Icon name="heroicons:phone" class="w-5 h-5 inline mr-2" aria-hidden="true" />
            โทรสอบถามราคา
          </a>
          <a href="https://line.me" target="_blank" rel="noopener noreferrer" class="bg-secondary text-white px-6 py-3 rounded-xl font-semibold text-center hover:opacity-90 transition-opacity" aria-label="สั่งซื้อผ่าน LINE">
            <Icon name="simple-icons:line" class="w-5 h-5 inline mr-2" aria-hidden="true" />
            LINE สั่งซื้อ
          </a>
        </div>
      </div>
    </div>

    <div v-else class="text-center py-20">
      <p class="text-xl text-dark/50">ไม่พบสินค้าที่ต้องการ</p>
      <NuxtLink to="/products" class="text-primary mt-4 inline-block" aria-label="กลับไปหน้าสินค้า">← กลับไปหน้าสินค้า</NuxtLink>
    </div>
  </div>
</template>

<script setup lang="ts">
interface Product {
  slug: string
  name: string
  price: string
  image: string
  alt: string
}

defineProps<{ product: Product }>()
</script>

<template>
  <article class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] hover:-translate-y-1 transition-all duration-300">
    <NuxtLink :to="`/products/${product.slug}`" :aria-label="`ดูรายละเอียด ${product.name}`">
      <div class="aspect-square bg-gray-50 flex items-center justify-center p-6">
        <NuxtImg
          :src="product.image"
          :alt="product.alt"
          width="300"
          height="300"
          class="object-contain max-h-full"
          loading="lazy"
          format="webp"
        />
      </div>
      <div class="p-5">
        <h3 class="text-lg font-semibold text-dark mb-2">{{ product.name }}</h3>
        <p :class="product.price === 'ติดต่อสอบถาม' ? 'text-dark/50 italic' : 'text-primary font-bold text-xl'">
          {{ product.price === 'ติดต่อสอบถาม' ? product.price : `฿${product.price}` }}
        </p>
        <p class="text-sm text-primary mt-3 font-medium">ดูรายละเอียด →</p>
      </div>
    </NuxtLink>
  </article>
</template>

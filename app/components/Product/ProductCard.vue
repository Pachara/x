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
  <article class="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md hover:-translate-y-1 transition-all">
    <NuxtLink :to="`/products/${product.slug}`" :aria-label="`ดูรายละเอียด ${product.name}`">
      <div class="aspect-square bg-light flex items-center justify-center p-4">
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
        <p class="text-primary font-bold text-xl">฿{{ product.price }}</p>
      </div>
    </NuxtLink>
  </article>
</template>

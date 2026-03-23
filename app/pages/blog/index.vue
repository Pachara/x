<script setup>
useSeoMeta({
  title: 'บล็อก — ข่าวสารน้ำตาลทราย',
  description: 'ข่าวสารอุตสาหกรรมน้ำตาลทราย ราคาตลาด นโยบายรัฐ ความรู้เรื่องน้ำตาล จาก บุ่นเส่ง ไทยชูการ์',
  ogTitle: 'บล็อก | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/blog',
})

const { data: articles } = await useAsyncData('blog', () =>
  queryCollection('content').path('/blog').order('id', 'DESC').all()
)
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-6 py-8">
    <LayoutBreadcrumb />
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-dark mb-3">บล็อก</h1>
      <p class="text-dark/50">ข่าวสารอุตสาหกรรมน้ำตาลทราย ราคาตลาด และความรู้ที่เป็นประโยชน์</p>
    </div>

    <div v-if="articles?.length" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <article
        v-for="article in articles"
        :key="article.stem"
        class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300"
      >
        <NuxtLink :to="article.path">
          <div v-if="article.featureImage?.url || article.image" class="aspect-video bg-gray-50 overflow-hidden">
            <NuxtImg
              :src="article.featureImage?.url || article.image"
              :alt="article.title"
              class="w-full h-full object-cover"
              loading="lazy"
              format="webp"
            />
          </div>
          <div class="p-6">
            <time v-if="article.publishDate || article.date" class="text-xs text-dark/40">
              {{ article.publishDate || article.date }}
            </time>
            <h2 class="text-base font-semibold text-dark mt-2 mb-2 line-clamp-2">{{ article.title }}</h2>
            <p v-if="article.description" class="text-dark/50 text-sm leading-relaxed line-clamp-3">
              {{ article.description }}
            </p>
            <p v-if="article.reference" class="text-xs text-dark/30 mt-3">ที่มา: {{ article.reference }}</p>
          </div>
        </NuxtLink>
      </article>
    </div>
    <p v-else class="text-center text-dark/50 text-lg py-12">ยังไม่มีบทความ</p>
  </div>
</template>

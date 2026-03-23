<script setup lang="ts">
const route = useRoute()
const slug = route.params.slug as string

const { data: article } = await useAsyncData(`blog-${slug}`, () =>
  queryCollection('content').path(`/blog/${slug}`).first()
)

if (article.value) {
  useSeoMeta({
    title: article.value.title,
    description: article.value.description || article.value.title,
    ogTitle: `${article.value.title} | บุ่นเส่ง ไทยชูการ์`,
    ogDescription: article.value.description || '',
    ogImage: article.value.featureImage?.url ? `https://x.pages.dev${article.value.featureImage.url}` : undefined,
    ogUrl: `https://x.pages.dev/blog/${slug}`,
  })

  useArticleSchema({
    headline: article.value.title,
    description: article.value.description || '',
    image: article.value.featureImage?.url ? `https://x.pages.dev${article.value.featureImage.url}` : 'https://x.pages.dev/images/logo.png',
    datePublished: article.value.publishDate || article.value.date || '',
  })
}
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-6 py-8">
    <LayoutBreadcrumb />

    <article v-if="article" class="max-w-3xl mx-auto">
      <header class="mb-8">
        <time v-if="article.publishDate || article.date" class="text-sm text-dark/40">
          {{ article.publishDate || article.date }}
        </time>
        <h1 class="text-3xl font-bold text-dark mt-2">{{ article.title }}</h1>
        <p v-if="article.description" class="text-lg text-dark/60 mt-3 leading-relaxed">{{ article.description }}</p>
        <p v-if="article.reference" class="text-sm text-dark/30 mt-2">ที่มา: {{ article.reference }}</p>
      </header>

      <div v-if="article.featureImage?.url" class="mb-8">
        <NuxtImg :src="article.featureImage.url" :alt="article.title" class="w-full rounded-2xl" format="webp" />
      </div>

      <div class="prose prose-lg max-w-none">
        <ContentRenderer :value="article" />
      </div>

      <footer class="mt-12 pt-8 border-t border-gray-100">
        <NuxtLink to="/blog" class="text-primary font-medium" aria-label="กลับไปหน้าบล็อก">
          ← กลับไปหน้าบล็อก
        </NuxtLink>
      </footer>
    </article>

    <div v-else class="text-center py-20">
      <p class="text-xl text-dark/50">ไม่พบบทความที่ต้องการ</p>
      <NuxtLink to="/blog" class="text-primary mt-4 inline-block" aria-label="กลับไปหน้าบล็อก">← กลับไปหน้าบล็อก</NuxtLink>
    </div>
  </div>
</template>

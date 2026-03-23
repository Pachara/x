<script setup>
useSeoMeta({
  title: 'บล็อก — ความรู้เรื่องน้ำตาลทราย',
  description: 'บทความความรู้เกี่ยวกับน้ำตาลทราย ราคาตลาด เทรนด์อุตสาหกรรม และข่าวสารจาก บุ่นเส่ง ไทยชูการ์',
  ogTitle: 'บล็อก | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/blog',
})
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-8">บล็อก</h1>

    <ContentList path="/blog" v-slot="{ list }">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article v-for="article in list" :key="article.stem" class="bg-white border border-gray-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
          <NuxtLink :to="article.path">
            <div class="p-6">
              <time class="text-sm text-dark/40">{{ article.date }}</time>
              <h2 class="text-lg font-bold text-dark mt-2 mb-3">{{ article.title }}</h2>
              <p class="text-dark/60 text-sm leading-relaxed">{{ article.description }}</p>
              <div class="flex gap-2 mt-4">
                <span v-for="tag in (article.tags || [])" :key="tag" class="text-xs bg-light text-dark/50 px-2 py-1 rounded-full">
                  {{ tag }}
                </span>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>
    </ContentList>
  </div>
</template>

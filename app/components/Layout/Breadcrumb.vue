<script setup lang="ts">
const route = useRoute()

const items = computed(() => {
  const segments = route.path.split('/').filter(Boolean)
  const crumbs = [{ name: 'หน้าแรก', url: 'https://x.pages.dev/' }]

  const labels: Record<string, string> = {
    products: 'สินค้า',
    blog: 'บล็อก',
    about: 'เกี่ยวกับเรา',
    contact: 'ติดต่อ',
    'how-to-buy': 'วิธีสั่งซื้อ',
    service: 'บริการ',
  }

  let path = ''
  for (const seg of segments) {
    path += `/${seg}`
    crumbs.push({
      name: labels[seg] || seg,
      url: `https://x.pages.dev${path}`,
    })
  }

  return crumbs
})

watch(items, (newItems) => {
  useBreadcrumbSchema(newItems)
}, { immediate: true })
</script>

<template>
  <nav v-if="route.path !== '/'" class="max-w-[1280px] mx-auto px-4 py-3 text-sm" aria-label="Breadcrumb">
    <ol class="flex items-center gap-1 text-dark/60">
      <li v-for="(item, i) in items" :key="item.url" class="flex items-center gap-1">
        <span v-if="i > 0" class="mx-1">/</span>
        <NuxtLink
          v-if="i < items.length - 1"
          :to="item.url.replace('https://x.pages.dev', '')"
          class="hover:text-primary transition-colors"
        >
          {{ item.name }}
        </NuxtLink>
        <span v-else class="text-dark font-medium">{{ item.name }}</span>
      </li>
    </ol>
  </nav>
</template>

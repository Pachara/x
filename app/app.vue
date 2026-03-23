<script setup>
useHead({
  titleTemplate: '%s | บุ่นเส่ง ไทยชูการ์ — น้ำตาลทรายราคาส่ง',
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'format-detection', content: 'telephone=no' },
  ],
  link: [
    { rel: 'canonical', href: 'https://x.pages.dev' },
    { rel: 'dns-prefetch', href: 'https://res.cloudinary.com' },
    { rel: 'preconnect', href: 'https://res.cloudinary.com', crossorigin: '' },
  ],
})

useOrganizationSchema()
</script>

<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
useSeoMeta({
  title: 'ติดต่อเรา',
  description: 'ติดต่อสอบถามหรือสั่งซื้อน้ำตาลทรายราคาส่ง บุ่นเส่ง ไทยชูการ์ โทร 081-669-3077 จัดส่งทั่วประเทศ',
  ogTitle: 'ติดต่อเรา | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/contact',
})

useLocalBusinessSchema()
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-8">ติดต่อเรา</h1>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <h2 class="text-xl font-semibold text-dark mb-4">ส่งข้อความถึงเรา</h2>
        <ContactContactForm />
      </div>

      <div>
        <h2 class="text-xl font-semibold text-dark mb-4">ข้อมูลติดต่อ</h2>
        <address class="not-italic space-y-4 mb-8">
          <div class="flex items-start gap-3">
            <Icon name="heroicons:building-office-2" class="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
            <p class="text-dark/80">บริษัท บุ่นเส่ง ไทยชูการ์</p>
          </div>
          <div class="flex items-start gap-3">
            <Icon name="heroicons:map-pin" class="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
            <p class="text-dark/80">จังหวัดนครศรีธรรมราช</p>
          </div>
          <div class="flex items-start gap-3">
            <Icon name="heroicons:phone" class="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
            <a href="tel:+66816693077" class="text-dark/80 hover:text-primary transition-colors">081-669-3077</a>
          </div>
          <div class="flex items-start gap-3">
            <Icon name="heroicons:clock" class="w-5 h-5 text-primary mt-1 shrink-0" aria-hidden="true" />
            <p class="text-dark/80">จันทร์-เสาร์ 08:00–17:00 น.</p>
          </div>
        </address>

        <ContactMapEmbed />
      </div>
    </div>
  </div>
</template>

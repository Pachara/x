<script setup>
const mobileOpen = ref(false)

const navLinks = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'สินค้า', to: '/products' },
  { label: 'บล็อก', to: '/blog' },
  { label: 'เกี่ยวกับเรา', to: '/about' },
  { label: 'ติดต่อ', to: '/contact' },
]
</script>

<template>
  <header class="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
    <nav class="max-w-[1280px] mx-auto flex items-center justify-between px-4 py-3" aria-label="Main navigation">
      <NuxtLink to="/" class="flex items-center gap-2" aria-label="หน้าแรก บุ่นเส่ง ไทยชูการ์">
        <span class="text-xl font-bold text-primary">บุ่นเส่ง ไทยชูการ์</span>
      </NuxtLink>

      <!-- Desktop nav -->
      <ul class="hidden md:flex items-center gap-6">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="text-dark hover:text-primary transition-colors font-medium"
            active-class="text-primary"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>

      <!-- Mobile hamburger -->
      <button
        class="md:hidden p-2"
        aria-label="เปิดเมนู"
        @click="mobileOpen = !mobileOpen"
      >
        <Icon :name="mobileOpen ? 'heroicons:x-mark' : 'heroicons:bars-3'" class="w-6 h-6 text-dark" />
      </button>
    </nav>

    <!-- Mobile menu -->
    <div v-if="mobileOpen" class="md:hidden border-t border-gray-100 bg-white">
      <ul class="flex flex-col px-4 py-2">
        <li v-for="link in navLinks" :key="link.to">
          <NuxtLink
            :to="link.to"
            class="block py-3 text-dark hover:text-primary transition-colors font-medium border-b border-gray-50"
            active-class="text-primary"
            @click="mobileOpen = false"
          >
            {{ link.label }}
          </NuxtLink>
        </li>
      </ul>
    </div>
  </header>
</template>

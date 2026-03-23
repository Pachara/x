<template>
  <div class="min-h-screen flex flex-col">
    <a href="#main-content" class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-white focus:px-4 focus:py-2 focus:rounded-lg">
      ข้ามไปเนื้อหาหลัก
    </a>
    <LayoutNavbar />
    <main id="main-content" class="flex-1">
      <slot />
    </main>
    <LayoutFooter />
  </div>
</template>

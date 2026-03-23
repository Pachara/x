<script setup>
const currentYear = new Date().getFullYear()

const quickLinks = [
  { label: 'หน้าแรก', to: '/' },
  { label: 'สินค้า', to: '/products' },
  { label: 'บล็อก', to: '/blog' },
  { label: 'เกี่ยวกับเรา', to: '/about' },
]

const serviceLinks = [
  'จัดส่งทั่วประเทศ',
  'ราคาส่งพิเศษ',
  'สั่งขั้นต่ำ 1 กระสอบ',
  'รับวางบิล',
]

const socials = [
  { icon: 'mdi:facebook', href: 'https://facebook.com', label: 'Facebook' },
  { icon: 'simple-icons:line', href: 'https://line.me', label: 'LINE' },
]
</script>

<template>
  <footer class="bg-dark/95 text-white/85" aria-label="Site footer">
    <div class="max-w-[1280px] mx-auto px-6 py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <!-- About -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-5">บุ่นเส่ง ไทยชูการ์</h3>
          <p class="text-sm leading-relaxed">
            จำหน่ายน้ำตาลทรายขาว น้ำตาลทรายแดง ราคาส่ง หลายยี่ห้อ
            จัดส่งทั่วประเทศ บริการรวดเร็ว ราคายุติธรรม
          </p>
        </div>

        <!-- Quick Links -->
        <nav aria-label="Quick links">
          <h3 class="text-white font-semibold text-lg mb-5">ลิงก์ด่วน</h3>
          <ul class="space-y-3">
            <li v-for="link in quickLinks" :key="link.to">
              <NuxtLink :to="link.to" class="text-sm text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all">
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Services -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-5">บริการ</h3>
          <ul class="space-y-3">
            <li v-for="s in serviceLinks" :key="s" class="text-sm text-white/70">
              {{ s }}
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div>
          <h3 class="text-white font-semibold text-lg mb-5">ติดต่อเรา</h3>
          <address class="not-italic text-sm space-y-3">
            <p>บริษัท บุ่นเส่ง ไทยชูการ์</p>
            <p>จังหวัดนครศรีธรรมราช</p>
            <p>
              <a href="tel:+66816693077" class="text-white/85 hover:text-white transition-colors">
                <Icon name="heroicons:phone" class="w-4 h-4 inline mr-1" aria-hidden="true" />
                081-669-3077
              </a>
            </p>
            <p>จันทร์-เสาร์ 08:00–17:00 น.</p>
          </address>
          <div class="flex gap-3 mt-5" role="list" aria-label="Social media">
            <a
              v-for="s in socials"
              :key="s.icon"
              :href="s.href"
              :aria-label="s.label"
              role="listitem"
              target="_blank"
              rel="noopener noreferrer"
              class="w-10 h-10 rounded-full bg-white/15 flex items-center justify-center text-white/85 hover:bg-white/30 hover:text-white transition-all"
            >
              <Icon :name="s.icon" class="w-5 h-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="border-t border-white/10 text-center py-5 px-6">
      <p class="text-sm text-white/50">&copy; {{ currentYear }} บุ่นเส่ง ไทยชูการ์ — สงวนลิขสิทธิ์ | Powered by ThaiSugars</p>
    </div>
  </footer>
</template>

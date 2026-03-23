<script setup>
useSeoMeta({
  title: 'เกี่ยวกับเรา — บริษัท บุ่นเส่ง ไทยชูการ์ จำกัด',
  description: 'บริษัท บุ่นเส่ง ไทยชูการ์ จำกัด ผู้จัดจำหน่ายน้ำตาลทรายรายใหญ่ในภาคใต้ จังหวัดนครศรีธรรมราช ประสบการณ์กว่า 10 ปี จัดส่งทั่วประเทศ',
  ogTitle: 'เกี่ยวกับเรา | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/about',
})

const values = [
  { icon: 'heroicons:shield-check', title: 'สินค้าคุณภาพ', text: 'จำหน่ายน้ำตาลทรายจากโรงงานมาตรฐาน GMP หลายยี่ห้อชั้นนำ ทั้งน้ำตาลทรายขาวบริสุทธิ์ (W1) น้ำตาลทรายขาวธรรมดา (W2) และน้ำตาลทรายแดง (W3) มั่นใจในคุณภาพทุกกระสอบ' },
  { icon: 'heroicons:currency-dollar', title: 'ราคาส่งยุติธรรม', text: 'ราคาส่งตรงจากผู้จัดจำหน่าย ไม่ผ่านคนกลาง สั่งยิ่งมาก ยิ่งคุ้ม มีเงื่อนไขเครดิตสำหรับลูกค้าประจำ พร้อมออกใบกำกับภาษีเต็มรูปแบบ' },
  { icon: 'heroicons:truck', title: 'จัดส่งรวดเร็ว', text: 'บริการจัดส่งทั่วประเทศ ด้วยรถบรรทุกของบริษัทและขนส่งเอกชน ภาคใต้ 1-2 วัน กรุงเทพฯ 2-3 วัน ต่างจังหวัด 3-5 วันทำการ' },
  { icon: 'heroicons:users', title: 'ลูกค้ากว่า 500+ ราย', text: 'ให้บริการลูกค้าหลากหลายประเภท ทั้งร้านค้าปลีก ร้านอาหาร โรงงาน โรงแรม ร้านเบเกอรี่ และผู้ค้าส่ง ทั่วประเทศ' },
]

const serviceAreas = [
  'นครศรีธรรมราช',
  'สุราษฎร์ธานี',
  'สงขลา',
  'กระบี่',
  'ภูเก็ต',
  'กรุงเทพฯ และปริมณฑล',
  'ทั่วประเทศ',
]
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-6 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-8">เกี่ยวกับเรา</h1>

    <section class="mb-16" aria-label="ประวัติบริษัท">
      <div class="max-w-3xl">
        <h2 class="text-2xl font-bold text-dark mb-4">บริษัท บุ่นเส่ง ไทยชูการ์ จำกัด</h2>
        <p class="text-dark/70 text-lg leading-relaxed mb-4">
          บริษัท บุ่นเส่ง ไทยชูการ์ จำกัด เป็นผู้จัดจำหน่ายน้ำตาลทรายรายใหญ่ในภาคใต้
          ตั้งอยู่ที่จังหวัดนครศรีธรรมราช ด้วยประสบการณ์ในธุรกิจค้าส่งน้ำตาลทรายมากกว่า 10 ปี
          เราจำหน่ายน้ำตาลทรายจากหลายโรงงานชั้นนำทั่วประเทศ
          ทั้งน้ำตาลทรายขาวบริสุทธิ์ น้ำตาลทรายขาวธรรมดา และน้ำตาลทรายแดง
        </p>
        <p class="text-dark/70 text-lg leading-relaxed mb-4">
          เรามุ่งเน้นการให้บริการที่รวดเร็ว ราคายุติธรรม และสร้างความสัมพันธ์ที่ดีกับลูกค้าทุกราย
          ไม่ว่าจะเป็นร้านค้าปลีก ร้านอาหาร โรงงาน โรงแรม หรือผู้ค้าส่ง
          ด้วยทีมงานที่มีความเชี่ยวชาญและระบบจัดส่งที่ครอบคลุมทั่วประเทศ
        </p>
        <p class="text-dark/70 text-lg leading-relaxed">
          ปัจจุบันเราให้บริการลูกค้ากว่า 500 ราย ทั่วประเทศไทย
          และเป็นที่ไว้วางใจของผู้ประกอบการในภาคใต้มาอย่างยาวนาน
        </p>
      </div>
    </section>

    <section class="mb-16" aria-label="จุดเด่นของเรา">
      <h2 class="text-2xl font-bold text-dark mb-8 text-center">ทำไมต้องเลือกเรา</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
        <article v-for="v in values" :key="v.title" class="bg-white border border-gray-100 rounded-2xl p-8 shadow-[var(--shadow-card)]">
          <Icon :name="v.icon" class="w-12 h-12 text-primary mb-4" aria-hidden="true" />
          <h3 class="text-lg font-bold text-dark mb-3">{{ v.title }}</h3>
          <p class="text-dark/60 leading-relaxed">{{ v.text }}</p>
        </article>
      </div>
    </section>

    <section class="mb-16" aria-label="พื้นที่ให้บริการ">
      <h2 class="text-2xl font-bold text-dark mb-6">พื้นที่ให้บริการหลัก</h2>
      <div class="flex flex-wrap gap-3">
        <span v-for="area in serviceAreas" :key="area" class="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium">
          {{ area }}
        </span>
      </div>
    </section>
  </div>
</template>

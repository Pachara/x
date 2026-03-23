<script setup>
const types = [
  {
    code: 'W1',
    name: 'น้ำตาลทรายขาวบริสุทธิ์',
    icumsa: 'ICUMSA ≤ 45',
    color: 'bg-white border-2 border-gray-200',
    dot: 'bg-white border border-gray-300',
    description: 'น้ำตาลทรายที่ผ่านกระบวนการทำให้บริสุทธิ์สูงสุด มีค่าสี ICUMSA ไม่เกิน 45 ผลึกใส สะอาด ละลายง่าย นิยมใช้ในอุตสาหกรรมเครื่องดื่ม เบเกอรี่ และอาหารแปรรูป',
  },
  {
    code: 'W2',
    name: 'น้ำตาลทรายขาวธรรมดา',
    icumsa: 'ICUMSA ≥ 100',
    color: 'bg-amber-50 border-2 border-amber-200',
    dot: 'bg-amber-100 border border-amber-300',
    description: 'น้ำตาลทรายขาวมาตรฐาน มีค่าสี ICUMSA ตั้งแต่ 100 ขึ้นไป ราคาถูกกว่า W1 เหมาะสำหรับร้านอาหาร ร้านค้าปลีก และการใช้งานทั่วไปในครัวเรือน',
  },
  {
    code: 'W3',
    name: 'น้ำตาลทรายแดง',
    icumsa: 'ICUMSA ≥ 1,200',
    color: 'bg-amber-100 border-2 border-amber-400',
    dot: 'bg-amber-700',
    description: 'น้ำตาลทรายที่ยังคงกากน้ำตาล (molasses) ไว้ มีค่าสี ICUMSA สูง ให้สีน้ำตาลและกลิ่นหอมเฉพาะตัว นิยมใช้ทำขนมไทย อาหาร และเครื่องดื่มที่ต้องการรสชาติเข้มข้น',
  },
]

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'DefinedTermSet',
        name: 'ประเภทน้ำตาลทราย',
        description: 'ทำความรู้จักกับน้ำตาลทรายแต่ละประเภท แบ่งแยกตามปริมาณค่าสี (ICUMSA) ค่ายิ่งน้อยยิ่งมีความขาวมาก',
        hasDefinedTerm: types.map(t => ({
          '@type': 'DefinedTerm',
          name: `${t.name} (${t.code})`,
          description: t.description,
        })),
      }),
    },
  ],
})
</script>

<template>
  <section class="py-20 px-6 bg-gray-50" aria-label="ประเภทน้ำตาลทราย">
    <div class="max-w-[1280px] mx-auto">
      <div class="text-center mb-12">
        <h2 class="text-3xl font-bold text-dark mb-3">ประเภทน้ำตาลทราย</h2>
        <p class="text-dark/50">แบ่งตามค่าสี ICUMSA — ค่ายิ่งน้อยยิ่งมีความขาวมาก</p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <article v-for="t in types" :key="t.code" :class="[t.color, 'rounded-2xl p-8 transition-all hover:shadow-[var(--shadow-hover)]']">
          <div class="flex items-center gap-3 mb-4">
            <span :class="[t.dot, 'w-5 h-5 rounded-full']" />
            <span class="text-sm font-bold text-primary bg-primary/10 px-3 py-1 rounded-full">{{ t.icumsa }}</span>
          </div>
          <h3 class="text-lg font-bold text-dark mb-1">{{ t.name }}</h3>
          <p class="text-xs text-dark/40 mb-3">รหัส: {{ t.code }}</p>
          <p class="text-sm text-dark/60 leading-relaxed">{{ t.description }}</p>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
useSeoMeta({
  title: 'วิธีสั่งซื้อน้ำตาลทราย',
  description: 'วิธีสั่งซื้อน้ำตาลทรายราคาส่ง บุ่นเส่ง ไทยชูการ์ เอกสารที่ต้องใช้ วิธีชำระเงิน ตารางจัดส่ง โทร 081-669-3077',
  ogTitle: 'วิธีสั่งซื้อน้ำตาลทราย | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/how-to-buy',
})

const steps = [
  { number: '01', title: 'สอบถามราคา', text: 'โทรสอบถามราคาน้ำตาลทรายล่าสุดที่ 081-669-3077 หรือ LINE ราคาเปลี่ยนแปลงตามตลาด เราจะแจ้งราคาพร้อมค่าจัดส่งให้ทราบ' },
  { number: '02', title: 'แจ้งรายการและเอกสาร', text: 'แจ้งประเภทน้ำตาล ยี่ห้อ จำนวน และที่อยู่จัดส่ง สำหรับลูกค้านิติบุคคลเตรียมสำเนา ภพ.20 และหนังสือรับรองบริษัท' },
  { number: '03', title: 'ชำระเงิน', text: 'โอนเงินผ่านบัญชีธนาคารหรือ PromptPay แล้วส่งสลิปยืนยันทาง LINE สำหรับลูกค้าประจำมีเงื่อนไขเครดิต 7-30 วัน' },
  { number: '04', title: 'รับสินค้า', text: 'เราจัดส่งน้ำตาลทรายตามกำหนด ด้วยรถบรรทุกของบริษัท พร้อมใบส่งของและใบกำกับภาษี' },
]

const docs = [
  { name: 'สำเนาบัตรประชาชน', required: true },
  { name: 'สำเนา ภพ.20 (นิติบุคคล)', required: true },
  { name: 'หนังสือรับรองบริษัท (นิติบุคคล)', required: false },
  { name: 'แผนที่ร้านค้า/ที่อยู่จัดส่ง', required: false },
]

const payments = [
  { method: 'โอนเงินผ่านธนาคาร', detail: 'กสิกรไทย, กรุงเทพ, ไทยพาณิชย์' },
  { method: 'PromptPay', detail: 'โอนผ่าน QR Code' },
  { method: 'เงินสด', detail: 'ชำระเมื่อรับสินค้า (เฉพาะลูกค้าในพื้นที่)' },
  { method: 'เครดิต 7-30 วัน', detail: 'สำหรับลูกค้าประจำที่เปิดบัญชีแล้ว' },
]

const delivery = [
  { zone: 'นครศรีธรรมราช', days: '1 วัน', note: 'จัดส่งเอง' },
  { zone: 'ภาคใต้ (สุราษฎร์ฯ, สงขลา, กระบี่)', days: '1-2 วัน', note: 'จัดส่งเอง / ขนส่ง' },
  { zone: 'กรุงเทพฯ และปริมณฑล', days: '2-3 วัน', note: 'ขนส่งเอกชน' },
  { zone: 'ภาคกลาง, ภาคตะวันออก', days: '2-4 วัน', note: 'ขนส่งเอกชน' },
  { zone: 'ภาคเหนือ, ภาคอีสาน', days: '3-5 วัน', note: 'ขนส่งเอกชน' },
]

const faqs = [
  { question: 'สั่งซื้อขั้นต่ำเท่าไร?', answer: 'สำหรับราคาส่ง สั่งขั้นต่ำ 10 กระสอบขึ้นไป สั่งปลีกไม่มีขั้นต่ำ สั่งได้ตั้งแต่ 1 กระสอบ' },
  { question: 'ค่าจัดส่งเท่าไร?', answer: 'คิดตามน้ำหนักและระยะทาง เริ่มต้นที่ 50-100 บาท/กระสอบ สั่งจำนวนมากมีส่วนลดค่าส่ง กรุณาสอบถามทาง LINE หรือโทรศัพท์' },
  { question: 'รับประกันสินค้าไหม?', answer: 'รับประกันคุณภาพทุกกระสอบ หากสินค้าเสียหายจากการขนส่ง เราจัดส่งทดแทนให้ทันทีโดยไม่มีค่าใช้จ่าย' },
  { question: 'มีน้ำตาลยี่ห้ออะไรบ้าง?', answer: 'เรามีน้ำตาลทรายจากหลายโรงงานชั้นนำ เช่น ษฎา มิตรผล วังขนาย น้ำตาลขอนแก่น ไทยเอกลักษณ์ และอีกหลายยี่ห้อ กรุณาโทรสอบถามสต็อก' },
  { question: 'ออกใบกำกับภาษีได้ไหม?', answer: 'ได้ครับ ออกใบกำกับภาษีเต็มรูปแบบให้ทุกออเดอร์ กรุณาแจ้งข้อมูลบริษัทและ ภพ.20 ล่วงหน้า' },
]

const openFaq = ref(0)
useFaqSchema(faqs)
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-6 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-8">วิธีสั่งซื้อ</h1>

    <!-- Steps -->
    <section class="mb-16" aria-label="ขั้นตอนการสั่งซื้อ">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article v-for="step in steps" :key="step.number" class="bg-white border border-gray-100 rounded-2xl p-6 shadow-[var(--shadow-card)] hover:shadow-[var(--shadow-hover)] transition-all duration-300">
          <span class="inline-flex items-center justify-center bg-primary text-white text-2xl font-bold w-12 h-12 rounded-xl mb-4">{{ step.number }}</span>
          <h2 class="text-lg font-bold text-dark mb-2">{{ step.title }}</h2>
          <p class="text-dark/60 leading-relaxed text-sm">{{ step.text }}</p>
        </article>
      </div>
    </section>

    <!-- Required Documents -->
    <section class="mb-16 max-w-3xl" aria-label="เอกสารที่ต้องใช้">
      <h2 class="text-2xl font-bold text-dark mb-6">เอกสารที่ต้องใช้</h2>
      <div class="bg-white border border-gray-100 rounded-2xl p-6 shadow-[var(--shadow-card)]">
        <ul class="space-y-3">
          <li v-for="doc in docs" :key="doc.name" class="flex items-center gap-3">
            <Icon :name="doc.required ? 'heroicons:check-circle' : 'heroicons:minus-circle'" :class="doc.required ? 'text-primary' : 'text-dark/30'" class="w-5 h-5 shrink-0" aria-hidden="true" />
            <span class="text-dark/80">{{ doc.name }}</span>
            <span v-if="doc.required" class="text-xs text-primary font-medium">จำเป็น</span>
            <span v-else class="text-xs text-dark/30">ถ้ามี</span>
          </li>
        </ul>
      </div>
    </section>

    <!-- Payment Methods -->
    <section class="mb-16 max-w-3xl" aria-label="วิธีชำระเงิน">
      <h2 class="text-2xl font-bold text-dark mb-6">วิธีชำระเงิน</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div v-for="p in payments" :key="p.method" class="bg-white border border-gray-100 rounded-xl p-5 shadow-[var(--shadow-card)]">
          <p class="font-semibold text-dark mb-1">{{ p.method }}</p>
          <p class="text-sm text-dark/50">{{ p.detail }}</p>
        </div>
      </div>
    </section>

    <!-- Delivery Schedule -->
    <section class="mb-16" aria-label="ตารางจัดส่ง">
      <h2 class="text-2xl font-bold text-dark mb-6">ตารางจัดส่ง</h2>
      <div class="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-[var(--shadow-card)]">
        <table class="w-full">
          <thead>
            <tr class="bg-gray-50">
              <th class="text-left px-6 py-3 text-sm font-semibold text-dark">พื้นที่</th>
              <th class="text-center px-4 py-3 text-sm font-semibold text-dark">ระยะเวลา</th>
              <th class="text-right px-6 py-3 text-sm font-semibold text-dark">หมายเหตุ</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(d, i) in delivery" :key="d.zone" :class="i % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'">
              <td class="px-6 py-3 text-dark">{{ d.zone }}</td>
              <td class="px-4 py-3 text-center font-medium text-primary">{{ d.days }}</td>
              <td class="px-6 py-3 text-right text-sm text-dark/50">{{ d.note }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>

    <!-- FAQ -->
    <section class="mb-16 max-w-3xl mx-auto" aria-label="คำถามที่พบบ่อย">
      <h2 class="text-2xl font-bold text-dark mb-6 text-center">คำถามที่พบบ่อย</h2>
      <div class="space-y-3">
        <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-100 rounded-xl overflow-hidden">
          <button class="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-dark hover:bg-gray-50/50 transition-colors" :aria-expanded="openFaq === i" :aria-controls="`faq-${i}`" @click="openFaq = openFaq === i ? -1 : i">
            {{ faq.question }}
            <Icon :name="openFaq === i ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" class="w-5 h-5 shrink-0 text-dark/40" aria-hidden="true" />
          </button>
          <div v-show="openFaq === i" :id="`faq-${i}`" class="px-6 pb-4 text-dark/60 leading-relaxed">{{ faq.answer }}</div>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="bg-primary rounded-2xl p-8 md:p-12 text-center" aria-label="สั่งซื้อเลย">
      <h2 class="text-2xl font-bold text-white mb-4">พร้อมสั่งซื้อน้ำตาลทรายแล้วหรือยัง?</h2>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="tel:+66816693077" class="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-light transition-colors" aria-label="โทรสั่งซื้อ 081-669-3077">โทรสั่งซื้อ</a>
        <NuxtLink to="/products" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors" aria-label="ดูสินค้าทั้งหมด">ดูสินค้า</NuxtLink>
      </div>
    </section>
  </div>
</template>

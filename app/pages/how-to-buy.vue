<script setup>
useSeoMeta({
  title: 'วิธีสั่งซื้อน้ำตาลทราย',
  description: 'วิธีสั่งซื้อน้ำตาลทรายราคาส่ง บุ่นเส่ง ไทยชูการ์ สั่งซื้อง่ายเพียง 4 ขั้นตอน โทร 081-669-3077 หรือ LINE',
  ogTitle: 'วิธีสั่งซื้อน้ำตาลทราย | บุ่นเส่ง ไทยชูการ์',
  ogUrl: 'https://x.pages.dev/how-to-buy',
})

const steps = [
  { number: '01', title: 'สอบถามราคา', text: 'โทรสอบถามราคาน้ำตาลทรายล่าสุดที่ 081-669-3077 หรือ LINE ราคาเปลี่ยนแปลงตามตลาด เราจะแจ้งราคาพร้อมค่าจัดส่งให้ทราบ' },
  { number: '02', title: 'แจ้งรายการสั่งซื้อ', text: 'แจ้งประเภทน้ำตาล ยี่ห้อ จำนวน และที่อยู่จัดส่ง เราจะคำนวณราคารวมค่าจัดส่งและแจ้งยอดชำระ' },
  { number: '03', title: 'ชำระเงิน', text: 'โอนเงินผ่านบัญชีธนาคารหรือ PromptPay แล้วส่งสลิปยืนยันทาง LINE สำหรับลูกค้าประจำมีเงื่อนไขเครดิต' },
  { number: '04', title: 'รับสินค้า', text: 'เราจัดส่งน้ำตาลทรายตามกำหนด ภาคใต้ 1-2 วัน กรุงเทพฯ 2-3 วัน ต่างจังหวัด 3-5 วันทำการ พร้อมเอกสารครบ' },
]

const faqs = [
  { question: 'สั่งซื้อขั้นต่ำเท่าไร?', answer: 'สำหรับราคาส่ง สั่งขั้นต่ำ 10 กระสอบขึ้นไป สั่งปลีกไม่มีขั้นต่ำ สั่งได้ตั้งแต่ 1 ถุง' },
  { question: 'จัดส่งกี่วันถึง?', answer: 'ภาคใต้ 1-2 วัน, กรุงเทพฯ และปริมณฑล 2-3 วัน, ต่างจังหวัดอื่นๆ 3-5 วันทำการ' },
  { question: 'มีน้ำตาลยี่ห้ออะไรบ้าง?', answer: 'เรามีน้ำตาลทรายหลายยี่ห้อชั้นนำ ทั้งน้ำตาลทรายขาวและน้ำตาลทรายแดง กรุณาโทรสอบถามยี่ห้อที่มีในสต็อก' },
  { question: 'รับวางบิลได้ไหม?', answer: 'สำหรับลูกค้าประจำที่มีเครดิต รับวางบิลได้ กรุณาติดต่อเพื่อเปิดบัญชีลูกค้า' },
  { question: 'มีใบเสร็จรับเงินไหม?', answer: 'มีครับ ออกใบเสร็จรับเงินให้ทุกออเดอร์ สำหรับลูกค้าที่ต้องการใบกำกับภาษีกรุณาแจ้งล่วงหน้า' },
]

const openFaq = ref(0)

useFaqSchema(faqs)
</script>

<template>
  <div class="max-w-[1280px] mx-auto px-4 py-8">
    <LayoutBreadcrumb />
    <h1 class="text-3xl font-bold text-dark mb-8">วิธีสั่งซื้อ</h1>

    <section class="mb-16" aria-label="ขั้นตอนการสั่งซื้อ">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <article v-for="step in steps" :key="step.number" class="bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow">
          <span class="inline-block bg-primary text-white text-2xl font-bold w-12 h-12 rounded-xl flex items-center justify-center mb-4">
            {{ step.number }}
          </span>
          <h2 class="text-lg font-bold text-dark mb-2">{{ step.title }}</h2>
          <p class="text-dark/60 leading-relaxed text-sm">{{ step.text }}</p>
        </article>
      </div>
    </section>

    <section class="mb-16 max-w-3xl mx-auto" aria-label="คำถามที่พบบ่อย">
      <h2 class="text-2xl font-bold text-dark mb-6 text-center">คำถามที่พบบ่อย</h2>
      <div class="space-y-3">
        <div v-for="(faq, i) in faqs" :key="i" class="border border-gray-100 rounded-xl overflow-hidden">
          <button
            class="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-dark hover:bg-light/50 transition-colors"
            :aria-expanded="openFaq === i"
            :aria-controls="`faq-${i}`"
            @click="openFaq = openFaq === i ? -1 : i"
          >
            {{ faq.question }}
            <Icon :name="openFaq === i ? 'heroicons:chevron-up' : 'heroicons:chevron-down'" class="w-5 h-5 shrink-0 text-dark/40" aria-hidden="true" />
          </button>
          <div v-show="openFaq === i" :id="`faq-${i}`" class="px-6 pb-4 text-dark/60 leading-relaxed">
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </section>

    <section class="bg-primary rounded-2xl p-8 md:p-12 text-center" aria-label="สั่งซื้อเลย">
      <h2 class="text-2xl font-bold text-white mb-4">พร้อมสั่งซื้อน้ำตาลทรายแล้วหรือยัง?</h2>
      <div class="flex flex-col sm:flex-row justify-center gap-4">
        <a href="tel:+66816693077" class="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-light transition-colors" aria-label="โทรสั่งซื้อ 081-669-3077">
          โทรสั่งซื้อ
        </a>
        <NuxtLink to="/products" class="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors" aria-label="ดูสินค้าทั้งหมด">
          ดูสินค้า
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

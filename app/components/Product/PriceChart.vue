<script setup lang="ts">
const chartLoaded = ref(false)
const chartCanvas = ref<HTMLCanvasElement | null>(null)

const priceData = {
  labels: ['17 มี.ค.', '18 มี.ค.', '19 มี.ค.', '20 มี.ค.', '21 มี.ค.', '22 มี.ค.', '23 มี.ค.', '24 มี.ค.'],
  whiteSugar: [850, 855, 848, 860, 852, 845, 850, 855],
  brownSugar: [880, 885, 878, 890, 882, 875, 880, 885],
}

onMounted(async () => {
  const { Chart, registerables } = await import('chart.js')
  Chart.register(...registerables)
  chartLoaded.value = true

  await nextTick()
  if (!chartCanvas.value) return

  new Chart(chartCanvas.value, {
    type: 'line',
    data: {
      labels: priceData.labels,
      datasets: [
        {
          label: 'น้ำตาลทรายขาว (กระสอบ 50 กก.)',
          data: priceData.whiteSugar,
          borderColor: '#CD7328',
          backgroundColor: 'rgba(205, 115, 40, 0.1)',
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#CD7328',
        },
        {
          label: 'น้ำตาลทรายแดง (กระสอบ 50 กก.)',
          data: priceData.brownSugar,
          borderColor: '#F5A623',
          backgroundColor: 'rgba(245, 166, 35, 0.1)',
          fill: true,
          tension: 0.3,
          pointRadius: 4,
          pointBackgroundColor: '#F5A623',
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: { position: 'bottom' },
      },
      scales: {
        y: {
          beginAtZero: false,
          ticks: { callback: (v: any) => `฿${v}` },
        },
      },
    },
  })
})
</script>

<template>
  <div class="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
    <h3 class="text-lg font-bold text-dark mb-4">กราฟราคาน้ำตาลย้อนหลัง 8 วัน</h3>
    <div class="relative h-[300px]">
      <canvas v-show="chartLoaded" ref="chartCanvas" />
      <div v-if="!chartLoaded" class="flex items-center justify-center h-full text-dark/30">
        กำลังโหลดกราฟ...
      </div>
    </div>
    <p class="text-xs text-dark/40 mt-3">* ข้อมูลราคาอ้างอิง อาจไม่ตรงกับราคาจริง กรุณาโทรสอบถาม</p>
  </div>
</template>

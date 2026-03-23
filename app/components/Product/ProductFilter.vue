<script setup lang="ts">
const emit = defineEmits<{ filter: [brand: string] }>()

const brands = ['ทั้งหมด', 'น้ำตาลทรายขาว', 'น้ำตาลทรายแดง']
const selected = ref('ทั้งหมด')

function select(brand: string) {
  selected.value = brand
  emit('filter', brand)
}
</script>

<template>
  <div class="flex flex-wrap gap-2 mb-8" role="group" aria-label="กรองตามประเภท">
    <button
      v-for="brand in brands"
      :key="brand"
      :class="[
        'px-4 py-2 rounded-full text-sm font-medium transition-colors',
        selected === brand
          ? 'bg-primary text-white'
          : 'bg-white text-dark/70 border border-gray-200 hover:border-primary hover:text-primary',
      ]"
      :aria-label="`กรองสินค้า: ${brand}`"
      :aria-pressed="selected === brand"
      @click="select(brand)"
    >
      {{ brand }}
    </button>
  </div>
</template>

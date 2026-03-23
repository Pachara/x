<script setup lang="ts">
withDefaults(defineProps<{
  width?: string
  height?: string
  rounded?: string
}>(), {
  width: 'w-full',
  height: 'h-4',
  rounded: 'rounded',
})
</script>

<template>
  <div
    :class="[width, height, rounded, 'bg-gray-200 animate-pulse']"
    role="status"
    aria-label="กำลังโหลด"
  />
</template>

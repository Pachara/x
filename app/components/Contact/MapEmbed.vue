<script setup>
const loaded = ref(false)

onMounted(() => {
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        loaded.value = true
        observer.disconnect()
      }
    },
    { threshold: 0.1 },
  )

  const el = document.getElementById('map-container')
  if (el) observer.observe(el)
})
</script>

<template>
  <div id="map-container" class="rounded-2xl overflow-hidden bg-light h-[300px] md:h-full min-h-[300px]">
    <iframe
      v-if="loaded"
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d252000!2d99.9!3d8.4!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z!5e0!3m2!1sth!2sth!4v1"
      class="w-full h-full border-0"
      allowfullscreen
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
      title="แผนที่ บุ่นเส่ง ไทยชูการ์"
    />
    <div v-else class="w-full h-full flex items-center justify-center text-dark/40">
      <Icon name="heroicons:map-pin" class="w-10 h-10" aria-hidden="true" />
    </div>
  </div>
</template>

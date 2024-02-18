<template>
  <div>
    <Vue3Marquee :animate-on-overflow="true" :pause-on-click="true">
      <img
        :src="img"
        v-for="img in imgArray"
        :key="img"
        class="image"
        width="100"
      />
    </Vue3Marquee>
  </div>
</template>

<script setup>
const imgArray = [
  'https://sponsors.vuejs.org/images/ionic.png',
  'https://sponsors.vuejs.org/images/laravel.png',
  'https://sponsors.vuejs.org/images/neds.png',
  'https://sponsors.vuejs.org/images/lendio.avif',
]
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>

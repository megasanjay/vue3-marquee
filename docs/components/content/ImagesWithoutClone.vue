<template>
  <Vue3Marquee :duration="5" :direction="'reverse'">
    <img
      v-for="img in imgArray"
      :key="img"
      :src="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
</template>

<script setup>
const imgArray = [
  'https://sponsors.vuejs.org/images/layer0.avif',
  'https://sponsors.vuejs.org/images/plaid__inc_.svg',
]
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>

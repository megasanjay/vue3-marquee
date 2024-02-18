<template>
  <Vue3Marquee :clone="true" :duration="5" :direction="'reverse'">
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
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

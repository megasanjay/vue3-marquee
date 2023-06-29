<template>
  <Vue3Marquee
    :gradient="true"
    :gradient-color="colorMode.value === 'light' ? [255, 255, 255] : [0, 0, 0]"
    gradient-length="30%"
  >
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
const colorMode = useColorMode()

const imgArray = [
  'https://sponsors.vuejs.org/images/vueschool.avif',
  'https://sponsors.vuejs.org/images/vehikl.avif',
  'https://sponsors.vuejs.org/images/dronahq.avif',
  'https://sponsors.vuejs.org/images/passionate_people.png',
  'https://sponsors.vuejs.org/images/storyblok.png',
  'https://sponsors.vuejs.org/images/ionic.png',
  'https://sponsors.vuejs.org/images/cypress_io.svg',
  'https://sponsors.vuejs.org/images/vuemastery.avif',
  'https://sponsors.vuejs.org/images/laravel.png',
  'https://sponsors.vuejs.org/images/html_burger.png',
  'https://sponsors.vuejs.org/images/neds.png',
  'https://sponsors.vuejs.org/images/icons_8.png',
  'https://sponsors.vuejs.org/images/tidelift.png',
  'https://sponsors.vuejs.org/images/intygrate.png',
  'https://sponsors.vuejs.org/images/myetherwallet_inc.avif',
  'https://sponsors.vuejs.org/images/flowdash.avif',
  'https://sponsors.vuejs.org/images/plaid__inc_.svg',
  'https://sponsors.vuejs.org/images/lendio.avif',
  'https://sponsors.vuejs.org/images/fastcoding_inc.svg',
]
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>

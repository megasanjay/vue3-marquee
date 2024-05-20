<template>
  <div>
    <Vue3Marquee :animate-on-overflow-only="true">
      <img
        v-for="img in imgArray"
        :key="img"
        :src="img"
        class="image"
        width="100"
      />
    </Vue3Marquee>

    <button class="btn" @click="addImages">Add images</button>
  </div>
</template>

<script setup>
const allImages = [
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

const imgArray = ref([
  'https://sponsors.vuejs.org/images/vueschool.avif',
  'https://sponsors.vuejs.org/images/vehikl.avif',
])

const addImages = () => {
  // Add 2 random images from allImages to imgArray
  imgArray.value.push(
    allImages[Math.floor(Math.random() * allImages.length)],
    allImages[Math.floor(Math.random() * allImages.length)],
  )
}
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}

.btn {
  padding: 5px;
  margin: 10px 0;
  transition: all 0.2s;
  background-color: blanchedalmond;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background: rgb(226, 226, 226);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.dark .card {
  background-color: rgb(31, 30, 28);
}

.dark .btn {
  color: rgb(31, 30, 28);
}

.dark .btn:hover {
  background: rgb(46, 45, 43);
  color: var(--docus-body-color);
}
</style>

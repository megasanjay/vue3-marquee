<template>
  <Vue3Marquee
    :key="runKey"
    :duration="5"
    :delay="2"
    :loop="3"
    :pause="paused"
    @on-loop-complete="loopsCompleted++"
    @on-complete="completed = true"
  >
    <img
      v-for="img in imgArray"
      :key="img"
      :src="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
  <p style="text-align: center">
    Loops completed: {{ loopsCompleted }} / 3
    <span v-if="completed"> — animation complete!</span>
  </p>
  <div style="display: flex; justify-content: center; gap: 10px">
    <button class="btn" :disabled="completed" @click="paused = !paused">
      {{ paused ? 'Resume' : 'Pause' }}
    </button>
    <button class="btn" @click="restart">Restart</button>
  </div>
</template>

<script setup>
const runKey = ref(0)
const paused = ref(false)
const loopsCompleted = ref(0)
const completed = ref(false)

const restart = () => {
  paused.value = false
  loopsCompleted.value = 0
  completed.value = false
  runKey.value++
}

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
]
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}

.btn {
  padding: 5px 10px;
  transition: all 0.2s;
  background-color: blanchedalmond;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background: rgb(226, 226, 226);
}

.btn:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.dark .btn {
  color: var(--docus-body-color);
}

.dark .btn:hover {
  background: rgb(46, 45, 43);
}
</style>

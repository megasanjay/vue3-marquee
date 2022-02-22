<template>
  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
  <div>
    <p>Default</p>
    <Vue3Marquee>
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>Duration : 10s</p>
    <Vue3Marquee :duration="10">
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>Direction : reverse</p>
    <Vue3Marquee direction="reverse">
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>Pause on hover</p>
    <Vue3Marquee :pause-on-hover="true">
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>Pause on click</p>
    <Vue3Marquee :pause-on-click="true">
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>Gradient</p>
    <Vue3Marquee :gradient="true">
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>Gradient color</p>
    <Vue3Marquee :gradient="true" :gradient-color="[78, 205, 196]">
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>Gradient width</p>
    <Vue3Marquee :gradient="true" gradient-width="1000px">
      <img v-for="i in img_30" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
  <div>
    <p>clone</p>
    <Vue3Marquee :clone="true" :duration="5">
      <img v-for="i in img_5" :key="i" height="80" :src="i" />
    </Vue3Marquee>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

// import 'vue3-marquee/dist/style.css'
// import { Vue3Marquee } from 'vue3-marquee'

import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'ServeDev',
  components: {
    HelloWorld,
    // Vue3Marquee,
  },
  data() {
    return {
      img_30: this.getImgURLS(30),
      img_5: this.getImgURLS(5),
    }
  },
  methods: {
    generateRandomString() {
      const randomString = Math.random().toString(36).substring(2, 15)
      return `https://avatars.dicebear.com/api/avataaars/${randomString}.svg`
    },
    getImgURLS(num: number) {
      let array = []
      for (let i = 0; i < num; i++) {
        array.push(this.generateRandomString())
      }
      return array
    },
  },
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: flex;
  flex-direction: column;
}
</style>

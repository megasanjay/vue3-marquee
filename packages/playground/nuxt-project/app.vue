<template>
  <div>
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite + Vue3 Marquee" />

    <div>
      <input type="checkbox" v-model="showAll" />
      <label>Show all</label>
    </div>

    <div v-if="showAll">
      <p>Default</p>

      <Vue3Marquee>
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Duration: 10s</p>

      <Vue3Marquee :duration="10">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Direction: reverse</p>

      <Vue3Marquee direction="reverse">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>pauseAnimation</p>

      <Vue3Marquee direction="reverse" :pause="playState">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>

      <button @click="togglePlayState">Pause</button>
    </div>

    <div v-if="showAll">
      <p>Pause on hover</p>

      <Vue3Marquee :pause-on-hover="true">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Pause on click</p>

      <Vue3Marquee :pause-on-click="true">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Gradient</p>

      <Vue3Marquee :gradient="true">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Gradient color: [78, 205, 196]</p>

      <Vue3Marquee :gradient="true" :gradient-color="[78, 205, 196]">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Gradient width: 600px</p>

      <Vue3Marquee :gradient="true" gradient-width="600px">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Gradient Length: 600px</p>

      <Vue3Marquee :gradient="true" gradient-length="600px">
        <img v-for="i in img_30" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>clone</p>

      <Vue3Marquee :clone="true" :duration="5">
        <img v-for="i in img_5" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Animate on Overflow</p>

      <Vue3Marquee :animateOnOverflowOnly="true" class="">
        <img v-for="i in img_5" :key="i" height="80" :src="i" />
      </Vue3Marquee>
    </div>

    <div v-if="showAll">
      <p>Vertical</p>

      <div style="height: 200px; width: max-content">
        <Vue3Marquee :vertical="true" :pause="playState">
          <img v-for="i in img_30" :key="i" height="50" :src="i" />
        </Vue3Marquee>
      </div>
    </div>

    <div>
      <p>
        Fix for issue:
        <a
          href="https://github.com/megasanjay/vue3-marquee/issues/350"
          target="__blank"
          >vue3-marquee#350</a
        >
      </p>

      <button @click="toggleShow = !toggleShow">Toggle</button>

      <div v-if="toggleShow" style="height: 80px">
        <Vue3Marquee :animateOnOverflowOnly="true">
          <img v-for="i in img_5" :key="i" height="80" :src="i" />
        </Vue3Marquee>
      </div>
    </div>

    <div v-if="showAll">
      <p>
        Fix for issue:
        <a
          href="https://github.com/megasanjay/vue3-marquee/issues/264"
          target="__blank"
          >vue3-marquee#264</a
        >
      </p>

      <div>
        <Vue3Marquee :clone="true">
          <div
            style="
              display: flex;
              margin-right: 2rem;
              justify-content: center;
              align-items: center;
              border-radius: 9999px;
              width: 4rem;
              height: 4rem;
              background: gainsboro;
            "
          >
            hello
          </div>

          <div
            style="
              display: flex;
              margin-right: 2rem;
              justify-content: center;
              align-items: center;
              border-radius: 9999px;
              width: 4rem;
              height: 4rem;
              background: gainsboro;
            "
          >
            bye
          </div>
        </Vue3Marquee>
      </div>
    </div>

    <div v-if="showAll">
      <p>
        Fix for issue:
        <a
          href="https://github.com/megasanjay/vue3-marquee/issues/13"
          target="__blank"
          >vue3-marquee#13</a
        >
      </p>

      <div style="display: flex">
        <Vue3Marquee :clone="true" :duration="1"> 123 </Vue3Marquee>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import HelloWorld from './components/HelloWorld.vue'

export default defineComponent({
  name: 'ServeDev',
  components: {
    HelloWorld,
  },
  data() {
    return {
      img_30: this.getImgURLS(30),
      img_5: this.getImgURLS(5),
      playState: false,
      showAll: false,
      toggleShow: true,
    }
  },
  methods: {
    generateRandomString() {
      const randomString = Math.random().toString(36).substring(2, 15)
      return `https://api.dicebear.com/7.x/adventurer/svg/seed=${randomString}`
    },
    getImgURLS(num: number) {
      let array = []
      for (let i = 0; i < num; i++) {
        array.push(this.generateRandomString())
      }
      return array
    },
    togglePlayState() {
      this.playState = !this.playState
    },
  },
})
</script>

<style>
#app,
#__nuxt {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  display: flex;
  flex-direction: column;
}
</style>

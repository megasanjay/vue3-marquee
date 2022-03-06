<template>
  <div style="display: flex">
    <Vue3Marquee :clone="true" :duration="1"> 123 </Vue3Marquee>
  </div>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'
export default {
  name: 'Issue13',
  components: {
    Vue3Marquee,
  },
  data() {
    return {}
  },
}
</script>

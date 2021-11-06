<template>
  <Vue3Marquee :duration="5" :direction="'reverse'">
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "ImagesWithoutClone",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "https://vuejs.org/images/tendermint.png",
        "https://vuejs.org/images/layer0.png",
      ],
    };
  },
};
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>

<template>
  <Vue3Marquee :duration="5" :direction="'right'">
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      height="150"
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
        "http://assets.stickpng.com/thumbs/5a4e2f8b2da5ad73df7efe6f.png",
        "http://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
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

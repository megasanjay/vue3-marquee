<template>
  <Vue3Marquee>
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
  name: "BasicExample",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "https://vuejs.org/images/vueschool.png",
        "https://vuejs.org/images/vehikl.png",
        "https://vuejs.org/images/retool.png",
        "https://vuejs.org/images/passionate_people.png",
        "https://vuejs.org/images/storyblok.png",
        "https://vuejs.org/images/ionic.png",
        "https://vuejs.org/images/das_keyboard.png",
        "https://vuejs.org/images/vuemastery.png",
        "https://vuejs.org/images/laravel.png",
        "https://vuejs.org/images/html_burger.png",
        "https://vuejs.org/images/neds.png",
        "https://vuejs.org/images/icons_8.png",
        "https://vuejs.org/images/tidelift.png",
        "https://vuejs.org/images/intygrate.png",
        "https://vuejs.org/images/tendermint.png",
        "https://vuejs.org/images/okay.png",
        "https://vuejs.org/images/plaid__inc_.svg",
        "https://vuejs.org/images/quickbooks_tool_hub.png ",
        "https://vuejs.org/images/lowdefy.png",
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

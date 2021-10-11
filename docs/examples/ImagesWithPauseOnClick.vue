<template>
  <Vue3Marquee :pauseOnClick="true">
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
  name: "ImagesWithPauseOnClick",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "http://assets.stickpng.com/thumbs/5a4e2f8b2da5ad73df7efe6f.png",
        "http://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
        "http://assets.stickpng.com/thumbs/608fffae5d1f990004970e72.png",
        "http://assets.stickpng.com/thumbs/608ff7145d1f990004970e69.png",
        "http://assets.stickpng.com/thumbs/6133729582b156000425b3af.png",
        "http://assets.stickpng.com/thumbs/584293b6a6515b1e0ad75acb.png",
        "http://assets.stickpng.com/thumbs/580b57fcd9996e24bc43c53e.png",
        "http://assets.stickpng.com/thumbs/5a4e432a2da5ad73df7efe7a.png",
        "http://assets.stickpng.com/thumbs/5847f2d1cef1014c0b5e4870.png",
        "http://assets.stickpng.com/thumbs/5848150dcef1014c0b5e4963.png",
        "http://assets.stickpng.com/thumbs/61378d3e4b96600004f676e6.png",
        "http://assets.stickpng.com/thumbs/5848092acef1014c0b5e48fa.png",
        "http://assets.stickpng.com/thumbs/58482c44cef1014c0b5e4a3c.png",
        "http://assets.stickpng.com/thumbs/58480fd7cef1014c0b5e4943.png",
        "http://assets.stickpng.com/thumbs/58820bfd00d0fb8ae435ec5b.png",
        "http://assets.stickpng.com/thumbs/6085635f8ae72d000493ca9e.png",
        "http://assets.stickpng.com/thumbs/58482af2cef1014c0b5e4a20.png",
        "http://assets.stickpng.com/thumbs/5a90312d7f96951c82922878.png",
        "http://assets.stickpng.com/thumbs/586ae70bb6fc1117b60b278d.png",
        "http://assets.stickpng.com/thumbs/58482cb3cef1014c0b5e4a47.png",
        "http://assets.stickpng.com/thumbs/5847e956cef1014c0b5e4821.png",
        "http://assets.stickpng.com/thumbs/5848191dcef1014c0b5e49b4.png",
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


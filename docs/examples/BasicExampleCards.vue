<template>
  <Vue3Marquee>
    <div class="card" v-for="index in 10" :key="index">
      <img
        :src="
          `https://avatars.dicebear.com/api/avataaars/${Math.random()
            .toString(36)
            .substr(2, 6)}.svg`
        "
        width="100"
        height="100"
      />
      <p style="margin-top: 10px; margin-bottom: 0px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "BasicExampleCards",
  components: {
    Vue3Marquee,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  border-radius: 3%;
  background-color: rgb(241, 241, 241);
  margin: 20px 40px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>

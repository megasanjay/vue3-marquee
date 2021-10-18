<template>
  <Vue3Marquee>
    <div class="card" v-for="avatar in avatarArray" :key="avatar">
      <img :src="avatar" width="100" height="100" />
      <p style="margin-top: 10px; margin-bottom: 0px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </Vue3Marquee>
</template>

<script>
import { reactive } from "vue";
import Vue3Marquee from "vue3-marquee";

export default {
  name: "BasicExampleCards",
  components: {
    Vue3Marquee,
  },
  setup() {
    const avatarArray = reactive([]);

    for (let i = 0; i < 5; i++) {
      avatarArray.push(
        `https://avatars.dicebear.com/api/avataaars/${Math.random()
          .toString(36)
          .substr(2, 6)}.svg`
      );
    }

    return {
      avatarArray,
    };
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

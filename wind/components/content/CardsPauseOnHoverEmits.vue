<template>
  <Vue3Marquee
    :pause-on-hover="true"
    @on-pause="playState = 'paused'"
    @on-resume="playState = 'playing'"
  >
    <div v-for="avatar in avatarArray" :key="avatar" class="card">
      <img :src="avatar" width="100" height="100" />
      <p style="margin-top: 10px; margin-bottom: 0px">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button class="btn">Learn More</button>
    </div>
  </Vue3Marquee>
  <p style="text-align: center">This animation is {{ playState }}.</p>
</template>

<script setup>
const avatarArray = reactive([])
const playState = ref('playing')

for (let i = 0; i < 5; i++) {
  avatarArray.push(
    `https://api.dicebear.com/7.x/adventurer/svg/seed=${Math.random()
      .toString(36)
      .substr(2, 6)}.svg`,
  )
}
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

.btn {
  padding: 5px;
  margin: 10px 0;
  transition: all 0.2s;
  background-color: blanchedalmond;
  border-radius: 8px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn:hover {
  background: rgb(226, 226, 226);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.dark .card {
  background: rgb(31, 30, 28);
}

.dark .card {
  background-color: rgb(31, 30, 28);
}

.dark .btn {
  color: var(--docus-body-color);
}

.dark .btn:hover {
  background: rgb(46, 45, 43);
  color: var(--docus-body-color);
}
</style>

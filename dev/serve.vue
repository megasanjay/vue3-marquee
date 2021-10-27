<script lang="ts">
import { defineComponent } from "vue";
import Vue3Marquee from "@/vue3-marquee.vue";

export default defineComponent({
  name: "ServeDev",
  components: {
    Vue3Marquee,
  },
});
</script>

<template>
  <div id="app">
    <Vue3Marquee :clone="true">
      <img
        height="200"
        src="https://images.unsplash.com/photo-1633614907351-22b3992b906c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
      />
      <img
        height="200"
        src="https://images.unsplash.com/photo-1633077666323-68f2e8bae631?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1740&q=80"
      />
      <img
        height="200"
        src="https://images.unsplash.com/photo-1633596683562-4a47eb4983c5?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2064&q=80"
        alt=""
      />
    </Vue3Marquee>
  </div>
</template>

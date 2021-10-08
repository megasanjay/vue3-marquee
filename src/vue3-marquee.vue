<template>
  <div class="vue3-marquee">
    <div class="marquee">
      text1
      <slot></slot>
    </div>
    <div class="marquee"> text2
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "Vue3Marquee", // vue 3 component name
  data() {
    return {
      counter: 5,
      initCounter: 5,
      message: {
        action: null,
        amount: null,
      },
    };
  },
  computed: {
    changedBy() {
      const { message } = this;
      if (!message.action) return "initialized";
      return `${message.action} ${message.amount || ""}`.trim();
    },
  },
  methods: {
    increment(arg) {
      const amount = typeof arg !== "number" ? 1 : arg;
      this.counter += amount;
      this.message.action = "incremented by";
      this.message.amount = amount;
    },
    decrement(arg) {
      const amount = typeof arg !== "number" ? 1 : arg;
      this.counter -= amount;
      this.message.action = "decremented by";
      this.message.amount = amount;
    },
    reset() {
      this.counter = this.initCounter;
      this.message.action = "reset";
      this.message.amount = null;
    },
  },
});
</script>

<style>
/* .vue3-marquee {
  display: block;
  width: 400px;
  margin: 25px auto;
  border: 1px solid #ccc;
  background: #eaeaea;
  text-align: center;
  padding: 25px;
}
.vue3-marquee p {
  margin: 0 0 1em; 
}*/

.vue3-marquee {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}
.vue3-marquee:hover div {
  animation-play-state: true;
}

.vue3-marquee:active div {
  animation-play-state: true;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}
/* @mixin gradient {
    background: linear-gradient(to right, var(--gradient-color));
  } */

.overlay::before,
.overlay::after {
  /* @include gradient; */
  content: "";
  height: 100%;
  position: absolute;
  width: 100%;
  z-index: 2;
}

.overlay::after {
  right: 0;
  top: 0;
  transform: rotateZ(180deg);
}

.overlay::before {
  left: 0;
  top: 0;
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll 10s linear 2s infinite;
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}
</style>

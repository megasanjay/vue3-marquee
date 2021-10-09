<template>
  <div>
    <div class="vue3-marquee" :style="getCurrentStyle">
      <div class="overlay"></div>
      <div class="marquee">
        <slot></slot>
      </div>
      <div class="marquee">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default /*#__PURE__*/ defineComponent({
  name: "Vue3Marquee",
  props: {
    pauseOnHover: {
      type: Boolean,
      required: false,
      default: false,
    },
    pauseOnClick: {
      type: Boolean,
      required: false,
      default: false,
    },
    direction: {
      type: String,
      required: false,
      default: "left",
      validator(value) {
        return ["left", "right"].includes(value);
      },
    },
    speed: {
      type: Number,
      required: false,
      default: 10,
    },
    delay: {
      type: Number,
      required: false,
      default: 0,
    },
    loop: {
      type: Number,
      required: false,
      default: 0,
    },
    circular: {
      type: Boolean,
      required: false,
      default: false,
    },
    circularClone: {
      type: Number,
      required: false,
      default: 0,
    },
    gradient: {
      type: Boolean,
      required: false,
      default: true,
    },
    gradientColor: {
      type: Array,
      required: false,
      default: [255, 255, 255],
      validator: (value) => {
        if (value.length != 3) {
          return false;
        }
        if (typeof value[0] !== "number" || value[0] < 0 || value[0] > 255) {
          return false;
        }
        if (typeof value[1] !== "number" || value[1] < 0 || value[1] > 255) {
          return false;
        }
        if (typeof value[2] !== "number" || value[2] < 0 || value[2] > 255) {
          return false;
        }
        return true;
      },
    },
    gradientWidth: {
      type: [String, Number],
      required: false,
      default: 200,
    },
  },
  data() {
    return {};
  },
  computed: {
    getMarqueeDirection() {
      if (this.direction === "left") {
        return "normal";
      } else if (this.direction === "right") {
        return "reverse";
      }
      return "normal";
    },
    getPauseOnHover() {
      if (this.pauseOnHover) {
        return "paused";
      }
      return "running";
    },
    getpauseOnClick() {
      if (this.pauseOnClick) {
        return "paused";
      }
      return "running";
    },
    getLoops() {
      return this.loop === 0 ? "infinite" : this.loop;
    },
    getCurrentStyle() {
      let cssVariables = {
        "--speed": `${this.speed}s`,
        "--delay": `${this.delay}s`,
        "--direction": `${this.getMarqueeDirection}`,
        "--pauseOnHover": `${this.getPauseOnHover}`,
        "--pauseOnClick": `${this.getpauseOnClick}`,
        "--loops": `${this.getLoops}`,
      };
      if (this.gradient) {
        const rgbaGradientColor = `rgba(${this.gradientColor[0]}, ${this.gradientColor[1]}, ${this.gradientColor[2]}`;
        cssVariables[
          "--gradient-color"
        ] = `${rgbaGradientColor}, 1), ${rgbaGradientColor}, 0)`;
        cssVariables["--gradient-width"] =
          typeof this.gradientWidth === "number"
            ? `${this.gradientWidth}px`
            : this.gradientWidth;
      }
      return cssVariables;
    },
  },
  mounted() {},
});
</script>

<style>
.vue3-marquee {
  overflow-x: hidden !important;
  display: flex !important;
  flex-direction: row !important;
  position: relative;
  width: 100%;
}

.vue3-marquee:hover div {
  animation-play-state: var(--pauseOnHover);
}

.vue3-marquee:active div {
  animation-play-state: var(--pauseOnClick);
}

.marquee:active {
  animation-play-state: var(--pauseOnClick);
}

.marquee {
  flex: 0 0 auto;
  min-width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--speed) linear var(--delay) var(--loops);
  animation-direction: var(--direction);
}

@keyframes scroll {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.overlay::before,
.overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  content: "";
  height: 100%;
  position: absolute;
  width: var(--gradient-width);
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
</style>

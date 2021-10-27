<template>
  <div>
    <div class="vue3-marquee" :style="getCurrentStyle">
      <div class="overlay" ref="marqueeContainer"></div>
      <div class="marquee" ref="marqueeContent">
        <slot></slot>
      </div>
      <div class="marquee">
        <slot></slot>
      </div>
      <div
        v-show="localClone"
        class="marquee"
        v-for="num in cloneAmount"
        :key="num"
      >
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

interface MarqueeOptions {
  direction: "left" | "right";
  delay: number;
  loop: boolean;
  clone: boolean;
  gradient: boolean;
  gradientColor: [number, number, number];
  gradientWidth: number | string;
  pauseOnHover: boolean;
  pauseOnClick: boolean;
}

export default defineComponent({
  name: "Vue3Marquee",
  props: {
    direction: {
      type: String,
      required: false,
      default: "left",
      validator(value: "left" | "right") {
        return ["left", "right"].includes(value);
      },
    },
    duration: {
      type: Number,
      required: false,
      default: 20,
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
    clone: {
      type: Boolean,
      required: false,
      default: false,
    },
    gradient: {
      type: Boolean,
      required: false,
      default: false,
    },
    gradientColor: {
      type: Array,
      required: false,
      default: [255, 255, 255],
      validator: (value: [number, number, number]) => {
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
    options: {
      type: Object as PropType<MarqueeOptions>,
      required: false,
      default: {},
    },
  },
  data() {
    return {
      localDirection: this.direction as PropType<"left" | "right">,
      localDuration: this.duration as PropType<number>,
      localDelay: this.delay as PropType<number>,
      localLoop: this.loop as PropType<boolean>,
      localGradient: this.gradient as PropType<boolean>,
      localGradientColor: this.gradientColor as PropType<
        [number, number, number]
      >,
      localGradientWidth: this.gradientWidth as PropType<number | string>,
      localPauseOnHover: this.pauseOnHover as PropType<boolean>,
      localPauseOnClick: this.pauseOnClick as PropType<boolean>,
      localClone: this.clone as PropType<boolean>,
      minWidth: 0,
      cloneAmount: 0,
    };
  },
  methods: {
    checkForClone(): void {
      if (this.localClone) {
        this.minWidth = 0;

        const contentWidth = this.$refs.marqueeContent.clientWidth;
        const containerWidth = this.$refs.marqueeContainer.clientWidth;

        this.cloneAmount = Math.ceil(containerWidth / (contentWidth * 2));
      } else {
        this.minWidth = "100%";
      }
    },
  },
  computed: {
    getMarqueeDirection(): "normal" | "reverse" {
      if (this.localDirection === "left") {
        return "normal";
      } else if (this.localDirection === "right") {
        return "reverse";
      }
      return "normal";
    },
    getPauseOnHover(): "paused" | "running" {
      if (this.localPauseOnHover) {
        return "paused";
      }
      return "running";
    },
    getpauseOnClick(): "paused" | "running" {
      if (this.localPauseOnClick) {
        return "paused";
      }
      return "running";
    },
    getLoops(): string {
      return this.localLoop === 0 ? "infinite" : this.localLoop.toString();
    },
    getCurrentStyle() {
      let cssVariables = {
        "--duration": `${this.localDuration}s`,
        "--delay": `${this.localDelay}s`,
        "--direction": `${this.getMarqueeDirection}`,
        "--pauseOnHover": `${this.getPauseOnHover}`,
        "--pauseOnClick": `${this.getpauseOnClick}`,
        "--loops": `${this.getLoops}`,
      };
      if (this.localGradient) {
        const rgbaGradientColor = `rgba(${this.localGradientColor[0]}, ${this.localGradientColor[1]}, ${this.localGradientColor[2]}`;
        cssVariables[
          "--gradient-color"
        ] = `${rgbaGradientColor}, 1), ${rgbaGradientColor}, 0)`;
        cssVariables["--gradient-width"] =
          typeof this.localGradientWidth === "number"
            ? `${this.localGradientWidth}px`
            : this.localGradientWidth;
      }
      cssVariables["--min-width"] = this.minWidth;

      return cssVariables;
    },
  },
  mounted() {
    if (this.options) {
      if (this.options.direction) {
        this.localDirection = this.options.direction;
      }
      if (this.options.duration) {
        this.localDuration = this.options.duration;
      }
      if (this.options.delay) {
        this.localDelay = this.options.delay;
      }
      if (this.options.loop) {
        this.localLoop = this.options.loop;
      }
      if (this.options.gradient) {
        this.localGradient = this.options.gradient;
      }
      if (this.options.gradientColor) {
        this.localGradientColor = this.options.gradientColor;
      }
      if (this.options.gradientWidth) {
        this.localGradientWidth = this.options.gradientWidth;
      }
      if (this.options.pauseOnHover) {
        this.localPauseOnHover = this.options.pauseOnHover;
      }
      if (this.options.pauseOnClick) {
        this.localPauseOnClick = this.options.pauseOnClick;
      }
      if (this.options.clone) {
        this.localClone = this.options.clone;
      }
    }
    this.checkForClone();
  },
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

.marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  z-index: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: scroll var(--duration) linear var(--delay) var(--loops);
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

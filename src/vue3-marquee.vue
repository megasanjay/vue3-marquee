<template>
  <div>
    <div class="vue3-marquee">
      <div class="overlay" ref="marqueeContainer"></div>
      <div class="marquee" ref="marqueeContent">
        <slot></slot>
      </div>
      <div class="marquee">
        <slot></slot>
      </div>
      <div class="marquee">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType, ref, onMounted } from "vue";

interface MarqueeOptions {
  direction: "normal" | "reverse";
  duration: number;
  delay: number;
  loop: number;
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
      type: String as PropType<"normal" | "reverse">,
      required: false,
      default: "normal",
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
      type: Array as unknown as PropType<[number, number, number]>,
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
      default: {
        direction: "normal",
        duration: 20,
        delay: 0,
        loop: 0,
        clone: false,
        gradient: false,
        gradientColor: [255, 255, 255],
        gradientWidth: 200,
        pauseOnHover: true,
        pauseOnClick: true,
      },
    },
  },
  setup(props) {
    let cloneAmount = ref(0);
    let minWidth = ref("100%");

    let marqueeContent = ref<HTMLDivElement | null>();
    let marqueeContainer = ref<HTMLDivElement | null>();

    const initValues = () => {
      if (props.clone) {
        props.options.clone = true;
      }
      if (props.direction) {
        props.options.direction = props.direction;
      }
      if (props.duration) {
        props.options.duration = props.duration;
      }
      if (props.delay) {
        props.options.delay = props.delay;
      }
      if (props.loop) {
        props.options.loop = props.loop;
      }
      if (props.gradient) {
        props.options.gradient = props.gradient;
      }
      if (props.gradientColor) {
        props.options.gradientColor = props.gradientColor;
      }
      if (props.gradientWidth) {
        props.options.gradientWidth = props.gradientWidth;
      }
      if (props.pauseOnHover) {
        props.options.pauseOnHover = props.pauseOnHover;
      }
      if (props.pauseOnClick) {
        props.options.pauseOnClick = props.pauseOnClick;
      }
    };

    initValues();

    const checkForClone = () => {
      if (props.options.clone || props.clone) {
        minWidth.value = "0%";

        if (marqueeContent.value && marqueeContainer.value) {
          const contentWidth = marqueeContent.value.clientWidth;
          const containerWidth = marqueeContainer.value.clientWidth;

          console.log(contentWidth, containerWidth);

          cloneAmount.value = Math.ceil(containerWidth / (contentWidth * 2));
        }
      }
    };

    onMounted(checkForClone);

    return {
      cloneAmount,
      minWidth,
      checkForClone,
      marqueeContainer,
      marqueeContent,
    };
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

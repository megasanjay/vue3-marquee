<template>
  <div v-if="ready">
    <div class="vue3-marquee" :style="getCurrentStyle" :key="componentKey">
      <div class="transparent-overlay" ref="marqueeContainer"></div>
      <div class="overlay" v-if="showGradient"></div>
      <div class="marquee" ref="marqueeContent">
        <slot></slot>
      </div>
      <div class="marquee">
        <slot></slot>
      </div>
      <div class="marquee cloned" v-for="num in cloneAmount" :key="num">
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  PropType,
  ref,
  onMounted,
  computed,
  watch,
} from "vue";

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
      type: String,
      required: false,
      default: "200px",
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
        gradientWidth: "200px",
        pauseOnHover: false,
        pauseOnClick: false,
      },
    },
  },
  setup(props) {
    let cloneAmount = ref(0);
    let showClones = ref(false);
    let minWidth = ref("100%");
    let componentKey = ref(0);
    let containerWidth = ref(0);

    let ready = ref(false);

    let marqueeContent = ref<HTMLDivElement | null>();
    let marqueeContainer = ref<HTMLDivElement | null>();

    const initValues = () => {};

    initValues();

    const checkForClone = async () => {
      setInterval(() => {
        minWidth.value = "0%";

        if (marqueeContent.value && marqueeContainer.value) {
          const contentWidth = marqueeContent.value.clientWidth;
          containerWidth.value = marqueeContainer.value.clientWidth;

          const localCloneAmount = Math.ceil(
            containerWidth.value / contentWidth
          );

          cloneAmount.value = isFinite(localCloneAmount) ? localCloneAmount : 0;

          return cloneAmount.value;
        } else {
          minWidth.value = "100%";
        }
      }, 100);
    };

    watch(containerWidth, () => {
      if (props.clone) {
        ForcesUpdate();
      }
    });

    const getCurrentStyle: any = computed(() => {
      let cssVariables = {
        "--duration": `${props.duration}s`,
        "--delay": `${props.delay}s`,
        "--direction": `${props.direction}`,
        "--pauseOnHover": `${props.pauseOnHover ? "paused" : "running"}`,
        "--pauseOnClick": `${props.pauseOnClick ? "paused" : "running"}`,
        "--loops": `${props.loop === 0 ? "infinite" : props.loop}`,
        "--gradient-color": `rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 1), rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 0)`,
        "--gradient-width": `${props.gradientWidth}`,
        "--min-width": `${minWidth.value}`,
      };

      return cssVariables;
    });

    const showGradient = computed(() => {
      if (props.gradient) {
        return true;
      }
      return false;
    });

    const ForcesUpdate = () => {
      componentKey.value++;
    };

    const setupMarquee = async () => {
      if (props.clone) {
        await checkForClone();
        ForcesUpdate();
        ready.value = true;
      } else {
        ready.value = true;
      }
    };

    onMounted(setupMarquee);

    return {
      cloneAmount,
      showClones,
      minWidth,
      checkForClone,
      marqueeContainer,
      containerWidth,
      marqueeContent,
      componentKey,
      ready,
      getCurrentStyle,
      setupMarquee,
      showGradient,
      ForcesUpdate,
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

.transparent-overlay {
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

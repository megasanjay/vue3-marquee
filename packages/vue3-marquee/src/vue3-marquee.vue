<template>
  <div
    class="vue3-marquee"
    :style="getCurrentStyle"
    :key="componentKey"
    v-if="ready"
  >
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
</template>

<script lang="ts">
import { ref, onMounted, computed, watch, defineComponent, PropType } from 'vue'

export interface MarqueeProps {
  direction: 'normal' | 'reverse'
  duration: number
  delay: number
  loop: number
  clone: boolean
  gradient: boolean
  gradientColor: any
  gradientWidth: string
  pauseOnHover: boolean
  pauseOnClick: boolean
}

export default defineComponent({
  props: {
    direction: {
      type: String as PropType<MarqueeProps['direction']>,
      default: 'normal',
    },

    duration: {
      type: Number as PropType<MarqueeProps['duration']>,
      default: 20,
    },

    delay: {
      type: Number as PropType<MarqueeProps['delay']>,
      default: 0,
    },

    loop: {
      type: Number as PropType<MarqueeProps['loop']>,
      default: 0,
    },

    clone: {
      type: Boolean as PropType<MarqueeProps['clone']>,
      default: false,
    },

    gradient: {
      type: Boolean as PropType<MarqueeProps['gradient']>,
      default: false,
    },

    gradientColor: {
      type: Array as PropType<MarqueeProps['gradientColor']>,
      default: [255, 255, 255],
    },

    gradientWidth: {
      type: String as PropType<MarqueeProps['gradientWidth']>,
      default: '200px',
    },

    pauseOnHover: {
      type: Boolean as PropType<MarqueeProps['pauseOnHover']>,
      default: false,
    },

    pauseOnClick: {
      type: Boolean as PropType<MarqueeProps['pauseOnClick']>,
      default: false,
    },
  },

  setup(props) {
    let cloneAmount = ref(0)
    let minWidth = ref('100%')
    let componentKey = ref(0)
    let containerWidth = ref(0)
    let contentWidth = ref(0)

    let ready = ref(false)

    let marqueeContent = ref<HTMLDivElement | any>(null)
    let marqueeContainer = ref<HTMLDivElement | any>(null)

    const ForcesUpdate = async () => {
      await checkForClone()

      componentKey.value++
    }

    const checkForClone = async () => {
      setInterval(() => {
        minWidth.value = '0%'

        if (marqueeContent.value !== null && marqueeContainer.value !== null) {
          if (marqueeContent.value && marqueeContainer.value) {
            if (
              'clientWidth' in marqueeContent.value &&
              'clientWidth' in marqueeContainer.value
            ) {
              contentWidth.value = marqueeContent.value.clientWidth
              containerWidth.value = marqueeContainer.value.clientWidth

              const localCloneAmount = Math.ceil(
                containerWidth.value / contentWidth.value,
              )

              cloneAmount.value = isFinite(localCloneAmount)
                ? localCloneAmount
                : 0

              return cloneAmount.value
            } else {
              minWidth.value = '100%'
              return 0
            }
          } else {
            minWidth.value = '100%'
            return 0
          }
        } else {
          minWidth.value = '100%'
          return 0
        }
      }, 100)
    }

    watch(contentWidth, async () => {
      if (props.clone) {
        ForcesUpdate()
      }
    })

    watch(containerWidth, async () => {
      if (props.clone) {
        ForcesUpdate()
      }
    })

    const getCurrentStyle: any = computed(() => {
      let cssVariables = {
        '--duration': `${props.duration}s`,
        '--delay': `${props.delay}s`,
        '--direction': `${props.direction}`,
        '--pauseOnHover': `${props.pauseOnHover ? 'paused' : 'running'}`,
        '--pauseOnClick': `${props.pauseOnClick ? 'paused' : 'running'}`,
        '--loops': `${props.loop === 0 ? 'infinite' : props.loop}`,
        '--gradient-color': `rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 1), rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 0)`,
        '--gradient-width': `${props.gradientWidth}`,
        '--min-width': `${minWidth.value}`,
      }

      return cssVariables
    })

    const showGradient = computed(() => {
      if (props.gradient) {
        return true
      }
      return false
    })

    const setupMarquee = async () => {
      if (props.clone) {
        await checkForClone()
        ForcesUpdate()
        ready.value = true
      } else {
        ready.value = true
      }
    }

    onMounted(async () => {
      setupMarquee()
    })

    return {
      ready,
      contentWidth,
      containerWidth,
      minWidth,
      marqueeContent,
      marqueeContainer,
      componentKey,
      showGradient,
      cloneAmount,
      ForcesUpdate,
      checkForClone,
      setupMarquee,
      getCurrentStyle,
    }
  },
})
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
  content: '';
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
<template>
  <div
    v-if="ready"
    class="vue3-marquee"
    :class="{ vertical: vertical, horizontal: !vertical }"
    :style="getCurrentStyle"
    :key="componentKey"
    @mouseenter="hoverStarted"
    @mouseleave="hoverEnded"
    @mousedown="mouseDown"
    @mouseup="mouseUp"
  >
    <div
      class="transparent-overlay"
      ref="marqueeOverlayContainer"
      :aria-hidden="true"
    ></div>
    <div
      v-if="showGradient"
      :aria-hidden="true"
      class="overlay"
      :class="{ vertical: vertical, horizontal: !vertical }"
    ></div>
    <div class="marquee" ref="marqueeContent">
      <slot></slot>
    </div>
    <div class="marquee" :aria-hidden="true">
      <slot></slot>
    </div>

    <div
      :aria-hidden="true"
      class="marquee cloned"
      v-for="num in cloneAmount"
      :key="num"
    >
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import {
  ref,
  onMounted,
  onBeforeUnmount,
  computed,
  watch,
  defineComponent,
  PropType,
} from 'vue'

export interface MarqueeProps {
  vertical: boolean
  direction: 'normal' | 'reverse'
  duration: number
  delay: number
  loop: number
  clone: boolean
  gradient: boolean
  gradientColor: any
  gradientWidth: string
  gradientLength: string
  pauseOnHover: boolean
  pauseOnClick: boolean
}

export default defineComponent({
  props: {
    vertical: {
      type: Boolean as PropType<MarqueeProps['vertical']>,
      default: false,
    },

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
    },

    gradientLength: {
      type: String as PropType<MarqueeProps['gradientLength']>,
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

  emits: ['onComplete', 'onLoopComplete', 'onPause', 'onResume'],

  setup(props, { emit }) {
    const cloneAmount = ref(0)

    const minWidth = ref('100%')
    const minHeight = ref('100%')

    const componentKey = ref(0)

    const pauseAnimation = ref(false)

    const containerWidth = ref(0)
    const contentWidth = ref(0)

    const containerHeight = ref(0)
    const contentHeight = ref(0)

    const loopCounter = ref(0)
    const loopInterval = ref<any>(null)

    const gradientLength = ref('200px')

    const ready = ref(false)

    const marqueeContent = ref<HTMLDivElement | any>(null)
    const marqueeOverlayContainer = ref<HTMLDivElement | any>(null)

    const ForcesUpdate = async () => {
      await checkForClone()

      componentKey.value++
    }

    const checkForClone = async () => {
      if (props.vertical) {
        // pause the animation to prevent flickering
        pauseAnimation.value = true
      }

      setInterval(() => {
        minWidth.value = '0%'
        minHeight.value = '0%'

        if (
          marqueeContent.value !== null &&
          marqueeOverlayContainer.value !== null
        ) {
          if (marqueeContent.value && marqueeOverlayContainer.value) {
            if (
              props.vertical &&
              'clientHeight' in marqueeContent.value &&
              'clientHeight' in marqueeOverlayContainer.value
            ) {
              contentHeight.value = marqueeContent.value.clientHeight
              containerHeight.value = marqueeOverlayContainer.value.clientHeight

              const localCloneAmount = Math.ceil(
                containerHeight.value / contentHeight.value,
              )

              cloneAmount.value = isFinite(localCloneAmount)
                ? localCloneAmount
                : 0

              // resume the animation
              pauseAnimation.value = false

              return cloneAmount.value
            } else if (
              !props.vertical &&
              'clientWidth' in marqueeContent.value &&
              'clientWidth' in marqueeOverlayContainer.value
            ) {
              contentWidth.value = marqueeContent.value.clientWidth
              containerWidth.value = marqueeOverlayContainer.value.clientWidth

              const localCloneAmount = Math.ceil(
                containerWidth.value / contentWidth.value,
              )

              cloneAmount.value = isFinite(localCloneAmount)
                ? localCloneAmount
                : 0

              return cloneAmount.value
            } else {
              minWidth.value = '100%'
              minHeight.value = '100%'
              return 0
            }
          } else {
            minWidth.value = '100%'
            minHeight.value = '100%'
            return 0
          }
        } else {
          minWidth.value = '100%'
          minHeight.value = '100%'
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

    const hoverStarted = () => {
      if (props.pauseOnHover) {
        emit('onPause')
      }
    }

    const hoverEnded = () => {
      if (props.pauseOnHover) {
        emit('onResume')
      }
    }

    const mouseDown = () => {
      if (props.pauseOnClick) {
        emit('onPause')
      }
    }

    const mouseUp = () => {
      if (props.pauseOnClick) {
        emit('onResume')
      }
    }

    const getCurrentStyle: any = computed(() => {
      const cssVariables = {
        '--duration': `${props.duration}s`,
        '--delay': `${props.delay}s`,
        '--direction': `${props.direction}`,
        '--pauseOnHover': `${props.pauseOnHover ? 'paused' : 'running'}`,
        '--pauseOnClick': `${props.pauseOnClick ? 'paused' : 'running'}`,
        '--pauseAnimation': `${pauseAnimation.value ? 'paused' : 'running'}`,
        '--loops': `${props.loop === 0 ? 'infinite' : props.loop}`,
        '--gradient-color': `rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 1), rgba(${props.gradientColor[0]}, ${props.gradientColor[1]}, ${props.gradientColor[2]}, 0)`,
        '--gradient-length': `${gradientLength.value}`,
        '--min-width': `${minWidth.value}`,
        '--min-height': `${minHeight.value}`,
      }

      const animationStyles = {
        '--orientation': 'scrollX',
        orientation: 'horizontal',
      }

      if (props.vertical) {
        animationStyles['--orientation'] = 'scrollY'
      }

      const styles = {
        ...cssVariables,
        ...animationStyles,
      }

      return styles
    })

    const showGradient = computed(() => {
      if (props.gradient) {
        return true
      }
      return false
    })

    const setupMarquee = async () => {
      if (props.vertical) {
        minHeight.value = '100%'
        minWidth.value = 'auto'
      } else {
        minHeight.value = 'auto'
        minWidth.value = '100%'
      }

      // Deprecate the gradientWidth prop in favor of gradientLength
      if (props.gradient) {
        if (props.gradientWidth) {
          console.warn(
            'The `gradientWidth` prop has been deprecated and will be removed in a future release. Please use `gradientLength` instead.',
          )

          gradientLength.value = props.gradientWidth
        } else if (props.gradientLength) {
          gradientLength.value = props.gradientLength
        }
      }

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

      loopInterval.value = setInterval(() => {
        loopCounter.value++

        if (props.loop !== 0 && loopCounter.value === props.loop) {
          emit('onComplete')
          clearInterval(loopInterval.value)
        }

        emit('onLoopComplete')

        // Converting the duration into milliseconds here
      }, props.duration * 1000)
    })

    onBeforeUnmount(() => {
      clearInterval(loopInterval.value)
    })

    return {
      ready,
      contentWidth,
      containerWidth,
      contentHeight,
      containerHeight,
      loopCounter,
      loopInterval,
      minWidth,
      minHeight,
      marqueeContent,
      marqueeOverlayContainer,
      componentKey,
      showGradient,
      cloneAmount,
      ForcesUpdate,
      checkForClone,
      setupMarquee,
      getCurrentStyle,
      hoverStarted,
      hoverEnded,
      mouseDown,
      mouseUp,
    }
  },
})
</script>

<style>
.vue3-marquee {
  display: flex !important;
  position: relative;
}

.vue3-marquee.horizontal {
  overflow-x: hidden !important;
  flex-direction: row !important;
  width: 100%;
  height: max-content;
}

.vue3-marquee.vertical {
  overflow-y: hidden !important;
  flex-direction: column !important;
  height: 100%;
  width: max-content;
}

.vue3-marquee:hover div {
  animation-play-state: var(--pauseOnHover);
}

.vue3-marquee:active div {
  animation-play-state: var(--pauseOnClick);
}

.vue3-marquee > .marquee {
  flex: 0 0 auto;
  min-width: var(--min-width);
  min-height: var(--min-height);
  z-index: 1;

  animation: var(--orientation) var(--duration) linear var(--delay) var(--loops);
  animation-play-state: var(--pauseAnimation);
  animation-direction: var(--direction);
}

.vue3-marquee.horizontal > .marquee {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.vue3-marquee.vertical > .marquee {
  display: flex;
  flex-direction: column;
  align-items: center;
}

@keyframes scrollX {
  0% {
    transform: translateX(0%);
  }
  100% {
    transform: translateX(-100%);
  }
}

@keyframes scrollY {
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
}

.vue3-marquee > .overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.vue3-marquee > .transparent-overlay {
  position: absolute;
  width: 100%;
  height: 100%;
}

.vue3-marquee > .overlay::before,
.vue3-marquee > .overlay::after {
  content: '';
  position: absolute;
  z-index: 2;
}

.vue3-marquee.horizontal > .overlay::before,
.vue3-marquee.horizontal > .overlay::after {
  background: linear-gradient(to right, var(--gradient-color));
  height: 100%;
  width: var(--gradient-length);
}

.vue3-marquee.vertical > .overlay::before,
.vue3-marquee.vertical > .overlay::after {
  background: linear-gradient(to bottom, var(--gradient-color));
  height: var(--gradient-length);
  width: 100%;
}

.vue3-marquee.horizontal > .overlay::after {
  transform: rotateZ(180deg);
}

.vue3-marquee.vertical > .overlay::after {
  transform: rotateZ(-180deg);
}

.vue3-marquee > .overlay::before {
  left: 0;
  top: 0;
}

.vue3-marquee.horizontal > .overlay::after {
  right: 0;
  top: 0;
}

.vue3-marquee.vertical > .overlay::after {
  left: 0;
  bottom: 0;
}
</style>

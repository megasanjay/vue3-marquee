# Vue 3 Lottie

[![npm](https://img.shields.io/npm/v/vue3-lottie)](https://www.npmjs.com/package/vue3-lottie) [![Downloads](https://img.shields.io/npm/dt/vue3-lottie)](https://www.npmjs.com/package/vue3-lottie) [![Stars](https://img.shields.io/github/stars/megasanjay/vue3-lottie.svg?style=flat-square)](https://github.com/megasanjay/vue3-lottie/stargazers) [![License](https://img.shields.io/npm/l/vue3-lottie)](https://github.com/megasanjay/vue3-lottie/blob/main/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/megasanjay/vue3-lottie)](https://github.com/megasanjay/vue3-lottie/issues)

`vue3-lottie` was created to help developers add Lottie animations to their Vue 3 applications. In my search for a simple way to add Lottie animations to my Vue application I found a suprising lack of maintained solutions. `vue3-lottie` is a vue wrapper around the `lottie-web` library with a few additional features.

# Demos

View the live demos here: [https://vue3-lottie.vercel.app](https://vue3-lottie.vercel.app)

# Upgrade to v2.x

If you are using version 1.x of `vue3-lottie` you should upgrade to version 2.x. You can do this by running the [Installation](#installation) command below. This adds TS support for the component. There are some new imports so take a look at the [new documentation](https://vue3-lottie.vercel.app/guide.html#usage). 

# Installation

If you are using npm:

```shell
npm install vue3-lottie@latest --save
```

If you are using yarn:

```shell
yarn add vue3-lottie@latest
```

# Usage

The most common use case is to register the component globally.

```js
// main.js
import { createApp } from 'vue'
import Vue3Lottie from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

createApp(App).use(Vue3Lottie).mount('#app')
```

Alternatively you can also import the component locally.

```js
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

export default {
  components: {
    Vue3Lottie,
  },
}
```

You can then use the component in your template

```vue
<template>
  <Vue3Lottie :animationData="DogJSON" :height="200" :width="200" />
</template>

<script>
import { Vue3Lottie } from 'vue3-lottie'
import 'vue3-lottie/dist/style.css'

import DogJSON from './lotties/dog.json'

export default {
  components: {
    Vue3Lottie,
  },
  data() {
    return {
      DogJSON,
    }
  },
}
</script>
```

# Props and options

More detailed explanations are provided in the [documentation](https://vue3-lottie.vercel.app/guide.html).

| Prop             | Type              | Default Value | Description                                                                              |
| ---------------- | ----------------- | ------------- | ---------------------------------------------------------------------------------------- |
| animationData    | Object            | {}            | The lottie animation data provided as a JSON object                                      |
| animationLink    | String            | ''            | A URL link to the Lottie animation data (eg: `Lottie Animation URL` on lottiefiles.com)  |
| width            | Number or String  | "100%"        | Width of the lottie animation container (Numbers correspond to pixel values)             |
| height           | Number or String  | "100%"        | Height of the lottie animation container (Numbers correspond to pixel values)            |
| speed            | Number            | "1"           | Speed of the lottie animation                                                            |
| direction        | String            | "forward"     | Animation play direction                                                                 |
| loop             | Number or Boolean | true          | The number of instances that the lottie animation should run (true is infinite)          |
| autoPlay         | Boolean           | true          | Start animation on component load                                                        |
| delay            | Number            | 0             | Delay the animation play state by some milliseconds                                      |
| pauseAnimation   | Boolean           | false         | Prop to pass reactive variables so that you can control animation pause and play         |
| pauseOnHover     | Boolean           | false         | Whether to pause the animation on hover                                                  |
| playOnHover      | Boolean           | false         | Whether to play the animation when you hover                                             |
| backgroundColor  | String            | transparent   | Background color of the container                                                        |
| rendererSettings | Object            | {}            | Options for if you want to use an existing canvas to draw (can be ignored on most cases) |

# Events

A few events are emitted from the component. Look at the [Demos](#Demos) for examples.

- onComplete
  - If your animation has a finite amount of loops you can use this event to know when the animation has completed.
- onLoopComplete
  - If your animation has a finite amount of loops you can use this event to know when the animation has completed a loop.
- onEnterFrame
  - This event is fired every frame of the animation. There will be 60 events fired per second if your lottie animation runs at 60fps.
- onSegmentStart
  - This event is fired when the animation enters a segment.

# Methods

You can control the animation with the following methods. These methods can be called by assigning a `ref` value to the `vue3-lottie` component. Look at the [Demos](#Demos) for examples.

- play
  - Plays the animation
- pause
  - Pauses the animation
- stop
  - Stops the animation. This will also reset the animation to the first frame. Look at the demo for some examples.
- destroy
  - You can call this method to destroy the animation. It will remove the animation from the DOM.
- setSpeed(speed)
  - You can call this method to change the speed of your animation.
- setDirection(direction)
  - You can call this method to change the direction of your animation.
- getDuration(inFrames)
  - You can call this method to get the duration of your animation.
- goToAndStop(frameNumber, isFrames)
  - You can call this method to go to a specific frame of your animation. The animation will be stopped at the end of this call.
- goToAndPlay(frameNumber, isFrames)
  - You can call this method to go to a specific frame of your animation. The animation will be played from this frame.
- playSegments(segments, forceFlag)
  - You can call this method to play a specific segment of your animation.
- setSubFrame(subFrame)
  - You can call this method to set the subframe value.

# Credits

A big thank you goes to [@reslear](https://github.com/reslear) for adding Typescript support to this library. Go check out his profile and give him a follow!

![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg) ![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)

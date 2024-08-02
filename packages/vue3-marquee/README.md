# vue3-marquee

[![npm](https://img.shields.io/npm/v/vue3-marquee)](https://www.npmjs.com/package/vue3-marquee) [![Downloads](https://img.shields.io/npm/dt/vue3-marquee)](https://www.npmjs.com/package/vue3-marquee) [![Stars](https://img.shields.io/github/stars/megasanjay/vue3-marquee.svg?style=flat-square)](https://github.com/megasanjay/vue3-marquee/stargazers) [![License](https://img.shields.io/npm/l/vue3-marquee)](https://github.com/megasanjay/vue3-marquee/blob/main/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/megasanjay/vue3-marquee)](https://github.com/megasanjay/vue3-marquee/issues)

A simple marquee component with ZERO dependencies for Vue 3. This component was originally developed for internal use but I figured this could be useful to someone else as well. This component is modeled after a React marquee component I found called [React Fast Marquee](https://github.com/justin-chu/react-fast-marquee). To keep a smooth animation running, clones of the content can be created for seamless transitions with no flickering or empty spaces in between content.

## Demos

View the live demos here: [https://vue3-marquee.vercel.app/examples](https://vue3-marquee.vercel.app/examples)

## Upgrade to v4.x

If you are using version 3.x of `vue3-marquee` you should upgrade to version 4.x. You can do this by running the [Installation and Usage](#installation-and-usage) command below. This add better support for Typescript. There is also a change with the `dist/style.css` import (it's been removed) so take a look at the [new documentation](https://vue3-marquee.vercel.app/introduction/v4) for instructions on how to migrate to this package.

## Installation and Usage

### Vue 3

If you are using npm:

```shell
npm install vue3-marquee@latest --save
```

If you are using yarn:

```shell
yarn add vue3-marquee@latest
```

- Register the component in your Vue 3 application.

The most common use case is to register the component globally.

```js
// main.js
import { createApp } from 'vue'
import Vue3Marquee from 'vue3-marquee'

createApp(App).use(Vue3Marquee).mount('#app')
```

If you need to use a custom component name, you can pass it as an option to the plugin:

```ts
app.use(Vue3Marquee, { name: 'MarqueeAnimation' }) // use in template <MarqueeAnimation />
```

- `name` string (default: 'Vue3Marquee') - set custom component name

Alternatively you can also import the component locally.

```js
import { Vue3Marquee } from 'vue3-marquee'

export default {
  components: {
    Vue3Marquee,
  },
}
```

You can then use the component in your template

```vue
<template>
  <Vue3Marquee>
    <img height="200" width="300" src="...img" />
    <img height="200" width="300" src="...img" />
    <img height="200" width="300" src="...img" />
  </Vue3Marquee>
</template>

<script>
import { Vue3Marquee } from 'vue3-marquee'

export default {
  components: {
    Vue3Marquee,
  },
}
</script>
```

### Nuxt 3

If you are using npm:

```shell
npm install vue3-marquee@latest --save
```

If you are using yarn:

```shell
yarn add vue3-marquee@latest
```

- Create a folder called **`plugins`** at the root of your project.
- Create a file named **`Vue3Marquee.client.ts`** inside the _plugins_ directory.
- Add the following code to the **`Vue3Marquee.client.ts`** file.

```ts
import Vue3Marquee from 'vue3-marquee'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Marquee, { name: 'Vue3Marquee' })
})
```

This should register as a global component that you can call anywhere in your app under the `<Vue3Marquee>` tag.

## Props and options

More detailed explanations are provided in the [documentation](https://vue3-marquee.vercel.app/api/props).

| Prop                  | Type                                   | Default Value   | Description                                                                            |
| --------------------- | -------------------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| direction             | String of either 'normal' or 'reverse' | "normal"        | The direction for the content to move in                                               |
| duration              | Number                                 | 20              | The time taken for the marquee content to move the width of the container (in seconds) |
| delay                 | Number                                 | 0               | A delay before the animation starts (in seconds)                                       |
| loop                  | Number                                 | 0               | The number of instances that the marquee animation should run (0 is infinite)          |
| gradient              | Boolean                                | false           | Whether to show a gradient overlay                                                     |
| gradientColor         | Array of 3 RGB values                  | [255, 255, 255] | The RGB colors for the color of the gradient                                           |
| gradientLength        | String                                 | 200px           | Length of portion of the container edges that should be taken by the gradient overlay  |
| pause                 | Boolean                                | false           | A reactive prop to pause the marquee                                                   |
| pauseOnHover          | Boolean                                | false           | Whether to pause the marquee on hover                                                  |
| pauseOnClick          | Boolean                                | false           | Whether to pause the marquee when you hold the right click button                      |
| clone                 | Boolean                                | false           | Whether to clone the content if you want no empty spaces in the animation              |
| vertical              | Boolean                                | false           | Whether to make the marquee vertical                                                   |
| animateOnOverflowOnly | Boolean                                | false           | Whether to animate the marquee if the content overflows the container                  |

## Events

A few events are emitted from the component. Look at the [Demos](#demos) for examples.

- onComplete
  - If your marquee has a finite amount of loops you can use this event to know when the animation has completed.
- onLoopComplete
  - You can use this event to know when your marquee has completed a loop.
- onPause
  - This event is emitted if you have either `pauseOnHover` or `pauseOnClick` enabled. It will notify if the animation pauses.
- onResume
  - This event is emitted if you have either `pauseOnHover` or `pauseOnClick` enabled. It will notify if the animation resumes.
- onOverflowDetected
  - This event is emitted if you have `animateOnOverflowOnly` enabled. It will notify if the content overflows the container.
- onOverflowCleared
  - This event is emitted if you have `animateOnOverflowOnly` enabled. It will notify if the content no longer overflows the container. (useful if you need to add a class to the container when the content overflows)

## Credits

- [@krishnaguragain](https://github.com/krishnaguragain) - PR [#217](https://github.com/megasanjay/vue3-marquee/pull/217) - Add the `pause` prop
- [@adampanger](https://github.com/adampanger) - PR [#345](https://github.com/megasanjay/vue3-marquee/pull/345) - Fix for `animateOnOverflowOnly` emit events

[![forthebadge](https://forthebadge.shorty.systems/images/badges/made-with-vue.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.shorty.systems/images/badges/built-with-love.svg)](https://forthebadge.com)

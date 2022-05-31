# vue3-marquee

[![npm](https://img.shields.io/npm/v/vue3-marquee)](https://www.npmjs.com/package/vue3-marquee) [![Downloads](https://img.shields.io/npm/dt/vue3-marquee)](https://www.npmjs.com/package/vue3-marquee) [![Stars](https://img.shields.io/github/stars/megasanjay/vue3-marquee.svg?style=flat-square)](https://github.com/megasanjay/vue3-marquee/stargazers) [![License](https://img.shields.io/npm/l/vue3-marquee)](https://github.com/megasanjay/vue3-marquee/blob/main/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/megasanjay/vue3-marquee)](https://github.com/megasanjay/vue3-marquee/issues)

A simple marquee component with ZERO dependencies for Vue 3. This component was originally developed for internal use but I figured this could be useful to someone else as well. This component is modeled after a React marquee component I found called [React Fast Marquee](https://github.com/justin-chu/react-fast-marquee). To keep a smooth animation running, clones of the content can be created for seamless transitions with no sudden jarring appearences or empty spaces in between content.

# Demos

View the live demos here: [https://vue3-marquee.vercel.app/examples.html](https://vue3-marquee.vercel.app/examples.html)

# Playground

If you would like to test out any functionality before downloading, you can use codesandbox.io to create a copy of an initialized playground. You can view the sandbox here: https://codesandbox.io/s/vue3-marquee-sandbox-09zm5?file=/src/App.vue

# Upgrade to v3.x

If you are using version 1.x or 2.x of `vue3-marquee` you should upgrade to version 3.x. You can do this by running the [Installation and Usage](#installation-and-usage) command below. This adds TS support for the component. There are some new imports so take a look at the [new documentation](https://vue3-marquee.vercel.app/guide.html#usage).

# Installation and Usage

## Vue 3

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
import 'vue3-marquee/dist/style.css'

createApp(App).use(Vue3Marquee).mount('#app')
```

To define global components for [Volar type-checking](https://github.com/johnsoncodehk/volar/tree/master/extensions/vscode-vue-language-features#usage) you will need to add:

```ts
// components.d.ts
declare module '@vue/runtime-core' {
  export interface GlobalComponents {
    LottieAnimation: typeof import('vue3-marquee')['Vue3Marquee']
  }
}
export {}
```

If needed rename component to use:

```ts
app.use(Vue3Marquee, { name: 'MarqueeAnimation' }) // use in template <MarqueeAnimation />
```

- `name` string (default: 'Vue3Marquee') - set custom component name

Alternatively you can also import the component locally.

```js
import { Vue3Marquee } from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

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
import 'vue3-marquee/dist/style.css'

export default {
  components: {
    Vue3Marquee,
  },
}
</script>
```

## Nuxt 3

This is still experimental. Will be updated soon.

If you are using npm:

```shell
npm install vue3-marquee@latest --save
```

If you are using yarn:

```shell
yarn add vue3-marquee@latest
```

- Create a folder called **`plugins`** at the root of your project.
- Create a file named **`vue3-marquee.client.js`** inside the _plugins_ directory.
- Add the following code to the **`vue3-marquee.client.js`** file.

```js
import { Vue3Marquee } from 'vue3-marquee'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Vue3Marquee)
})
```

- Import the css file required by the component into your **`app.vue`** file.

```js
import 'vue3-marquee/dist/style.css'
```

# Props and options

More detailed explanations are provided in the [documentation](https://vue3-marquee.vercel.app/guide.html).

| Prop          | Type                                   | Default Value   | Description                                                                            |
| ------------- | -------------------------------------- | --------------- | -------------------------------------------------------------------------------------- |
| direction     | String of either 'normal' or 'reverse' | "normal"        | The direction for the content to move in                                               |
| duration      | Number                                 | 20              | The time taken for the marquee content to move the width of the container (in seconds) |
| delay         | Number                                 | 0               | A delay before the animation starts (in seconds)                                       |
| loop          | Number                                 | 0               | The number of instances that the marquee animation should run (0 is infinite)          |
| gradient      | Boolean                                | false           | Whether to show a gradient overlay                                                     |
| gradientColor | Array of 3 RGB values                  | [255, 255, 255] | The RGB colors for the color of the gradient                                           |
| gradientWidth | String                                 | 200px           | Length of portion of the container edges that should be taken by the gradient overlay  |
| pauseOnHover  | Boolean                                | false           | Whether to pause the marquee on hover                                                  |
| pauseOnClick  | Boolean                                | false           | Whether to pause the marquee when you hold the right click button                      |
| clone         | Boolean                                | false           | Whether to clone the content if you want no empty spaces in the animation              |

[![forthebadge](https://forthebadge.com/images/badges/made-with-vue.svg)](https://forthebadge.com) [![forthebadge](https://forthebadge.com/images/badges/built-with-love.svg)](https://forthebadge.com)

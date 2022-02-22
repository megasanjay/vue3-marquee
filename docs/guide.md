# Getting Started

**vue3-marquee** is a simple marquee component for Vue 3 that creates customizable marquees. This component uses slots for your content and props for any config options.

## Introduction

`vue3-marquee` was born from an internal need for a quick and easy marquee component that I wanted to use in our website homepage. Many of the component libraries that I found were either unmaintained, complex or not compatible with Vue 3. This component should also work for you if you would like to use a marquee component that just works out of the box and is customizable to fit your use case.

In my search for a good marquee component, I found a React library that seemed to do what I wanted so I decided to emulate the component in Vue 3 for anyone to use. The original React library can be found [here](https://www.react-fast-marquee.com/).

In `vue3-marquee` you have the option of cloning content to remove any empty spaces for marquee elements that don't fit the width of the container. This will allow you to have seamless content that just works.

## Changes from v2

With version 3, native TypeScript support has been added.

## Playground

You can use the already setup code sandbox to play around with the library and test out the funcionality. [Use this link to go to the playground](https://codesandbox.io/s/vue3-marquee-sandbox-09zm5?file=/src/App.vue).

## Installation

### NPM

You can install `vue3-marquee` over `yarn` or `npm`. The only dependency required is Vue 3 which should automatically be supplied by your Vue 3 page.

```bash
yarn add vue3-marquee@latest
```

```bash
npm install vue3-marquee@latest --save
```

<!-- ### Browser CDN

You can also use `vue3-marquee` directly in the browser via CDN.

```html
<script src="https://unpkg.com/vue3-marquee@0.0.4/dist/vue3-marquee.min.js"></script>
``` -->

## Usage

The most common use case is to register the component globally.

```js
// main.js
import { createApp } from 'vue'
import Vue3Marquee from 'vue3-marquee'
import 'vue3-marquee/dist/style.css'

createApp(App).use(Vue3Marquee).mount('#app')
```

Alternatively you can import the marquee component locally.

```vue
<template>
  <vue3-marquee>
    <img height="200" src="...img" />
    <img height="200" src="...img" />
    <img height="200" src="...img" />
  </vue3-marquee>
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

## Available props

All the possible props for `vue3-marquee` are shown below.

### direction

The direction for the content to move in. `normal` corresponds to elements moving left and `reverse` corresponds to elements moving right.

| Type   | Default value | Required | Accepted values       |
| ------ | ------------- | -------- | --------------------- |
| String | "normal"      | no       | "normal" or "reverse" |

### duration

The time taken for the marquee content to move the width of its own container (in seconds).

| Type   | Default value | Required | Accepted values |
| ------ | ------------- | -------- | --------------- |
| Number | 20            | no       | Number > 0      |

### delay

A delay before the animation starts (in seconds).

| Type   | Default value | Required | Accepted values |
| ------ | ------------- | -------- | --------------- |
| Number | 0             | no       | Number >= 0     |

### loop

The number of instances that the marquee animation should run (0 is infinite).

| Type   | Default value | Required | Accepted values |
| ------ | ------------- | -------- | --------------- |
| Number | 0             | no       | Number >= 0     |

### gradient

Whether to show a gradient overlay.

| Type    | Default value | Required | Accepted values |
| ------- | ------------- | -------- | --------------- |
| Boolean | false         | no       | true or false   |

### gradientColor

The RGB colors for the color of the gradient.

| Type                  | Default value   | Required | Accepted values                                              |
| --------------------- | --------------- | -------- | ------------------------------------------------------------ |
| Array of 3 RGB values | [255, 255, 255] | no       | [0 <= Number <= 255, 0 <= Number <= 255, 0 <= Number <= 255] |

### gradientWidth

What portion of the container edges should be taken by the gradient overlay.

| Type   | Default value | Required | Accepted values    |
| ------ | ------------- | -------- | ------------------ |
| String | 200px         | no       | Any valid css unit |

::: tip
Any accepted css size unit (eg: 10%, 2em) can be used here. You might need to play around with this unit to get the gradient overlay that you want.
:::

### pauseOnHover

Whether to pause the marquee on hover

| Type    | Default value | Required | Accepted values |
| ------- | ------------- | -------- | --------------- |
| Boolean | false         | no       | true or false   |

### pauseOnClick

Whether to pause the marquee when you hold the right click button.

| Type    | Default value | Required | Accepted values |
| ------- | ------------- | -------- | --------------- |
| Boolean | false         | no       | true or false   |

### clone - experimental

::: warning
This option is still in the experimental stage.
:::

Whether to clone the content if you want no empty spaces in the animation. Use this option if you find empty spaces between your marquee animations.

| Type    | Default value | Required | Accepted values |
| ------- | ------------- | -------- | --------------- |
| Boolean | false         | no       | true or false   |

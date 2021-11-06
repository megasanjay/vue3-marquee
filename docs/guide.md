# Getting Started

**vue3-marquee** is a simple marquee component for Vue 3 that creates customizable marquees. This component uses slots for your content and props for any config options.

::: warning
You are viewing the documentation for latest version of vue3-maquee. If you are running a version that is 1.0.x, click [here](/v1/guide) to access the documentation.

The latest version is still slightly experimental in terms of typescript support.
:::

## Introduction

`vue3-marquee` was born from an internal need for a quick and easy marquee component that I wanted to use in our website homepage. Many of the component libraries that I found were either unmaintained, complex or not compatible with Vue 3. This component should also work for you if you would like to use a marquee component that just works out of the box and is customizable to fit your use case.

In my search for a good marquee component, I found a React library that seemed to do what I wanted so I decided to emulate the component in Vue 3 for anyone to use. The original React library can be found [here](https://www.react-fast-marquee.com/).

In `vue3-marquee` you have the option of cloning content to remove any empty spaces for marquee elements that don't fit the width of the container. This will allow you to have seamless content that just works.

## Changes from v1

With version 2, typescript support has been added. It's currently in the beta phase but when I get some results from other devs using this library with typescript projects, I will push a full release to npm.

The options object has been removed since it was adding additional code on the backend to handle. All options for the component should now be passed via template props.

The clone attribute has been marked as experimental for the moment. If the options gives you strange artifacts or isn't what you are looking for, please just create a copy of your content to fit the width of your container.

The `direction` prop has now changed to use the css value of `normal` or `reverse` natively. Use these as your passed props.

The `gradientWidth` prop has been modified to only accept string attributes. Pass a valid css unit to adjust the width of the gradient.

## Installation

### NPM

You can install `vue3-marquee` over `yarn` or `npm`. The only dependency required is Vue 3 which should automatically be supplied by your Vue 3 page.

```bash
yarn add vue3-marquee
```

```bash
npm install vue3-marquee --save
```

### Browser CDN

You can also use `vue3-marquee` directly in the browser via CDN.

```html
<script src="https://unpkg.com/vue3-marquee@0.0.4/dist/vue3-marquee.min.js"></script>
```

## Usage

The most common use case is to register the component globally.

```js
// main.js
import { createApp } from "vue";
import Vue3Marquee from "vue3-marquee";

createApp(App).use(Vue3Marquee).mount("#app");
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
import Vue3Marquee from "vue3-marquee";

export default {
  components: {
    Vue3Marquee,
  },
};
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

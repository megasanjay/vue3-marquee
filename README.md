# vue3-marquee

[![npm](https://img.shields.io/npm/v/vue3-marquee)](https://www.npmjs.com/package/vue3-marquee) [![Downloads](https://img.shields.io/npm/dt/vue3-marquee)](https://www.npmjs.com/package/vue3-marquee) [![Stars](https://img.shields.io/github/stars/megasanjay/vue3-marquee.svg?style=flat-square)](https://github.com/megasanjay/vue3-marquee/stargazers) [![License](https://img.shields.io/npm/l/vue3-marquee)](https://github.com/megasanjay/vue3-marquee/blob/main/LICENSE) [![GitHub issues](https://img.shields.io/github/issues/megasanjay/vue3-marquee)](https://github.com/megasanjay/vue3-marquee/issues)

A simple marquee component with ZERO dependencies for Vue 3. This component was originally developed for internal use but I figured this could be useful to someone else as well. This component is modeled after a React marquee component I found called [React Fast Marquee](https://github.com/justin-chu/react-fast-marquee). To keep a smooth animation running, clones of the content can be created for seamless transitions with no sudden jarring appearences or empty spaces in between content.

# Warning

The latest version of vue3-marquee is in the experimental stage. I'm looking for users with typescript applications to verify the use of this library before I update the version numbers.

# Demos

View the live demos here: [https://vue3-marquee.vercel.app/examples.html](https://vue3-marquee.vercel.app/examples.html)

# Installation

If you are using npm:

```shell
npm install vue3-marquee
```

If you are using yarn:

```shell
yarn add vue3-marquee
```

# Usage

The most common use case is to register the component globally.

```js
// main.js
import { createApp } from "vue";
import Vue3Marquee from "vue3-marquee";

createApp(App).use(Vue3Marquee).mount("#app");
```

Alternatively you can import the marquee component locally.

```js
import Vue3Marquee from "vue3-marquee";

export default {
  components: {
    Vue3Marquee,
  },
};
```

You can then use the component in your template. A common use case is an image marquee for logos but you can also use it for scrolling text.

```html
<vue3-marquee>
  <img height="200" width="300" src="...img" />
  <img height="200" width="300" src="...img" />
  <img height="200" width="300" src="...img" />
</vue3-marquee>
```

# Props and options

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

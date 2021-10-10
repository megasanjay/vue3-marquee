# vue3-marquee

A simple marquee component with ZERO dependencies for Vue 3. This component was originally developed for internal use but I figured this could be useful to someone else as well. This component is modeled after a React marquee component I found called [React Fast Marquee](https://github.com/justin-chu/react-fast-marquee). To keep a smooth animation running, clones of the content can be created for seamless transitions with no sudden jarring appearences or empty spaces in between content.

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

createApp(App)
  .use(Vue3Marquee)
  .mount("#app");
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

| Prop | Type | Default Value | Description |
| ------------- | ------------- | ------------- | ------------- |
| direction  | String of either 'left' or 'right'  | left  | The direction for the content to move in |
| duration  | Number  | 20  | The time taken for the marquee content to move the width of the container (in seconds) |
| delay  | Number  | 0  | A delay before the animation starts (in seconds) |
| loop  | Number  | 0  | The number of instances that the marquee animation should run (0 is infinite) |
| gradient  | Boolean  | false  | Whether to show a gradient overlay |
| gradientColor  | Array of 3 RGB values  | [255, 255, 255]  | The RGB colors for the color of the gradient |
| gradientWidth  | String or Number  | 200  | What portion of the container edges should be taken by the gradient overlay |
| pauseOnHover  | Boolean  | false  | Whether to pause the marquee on hover |
| pauseOnClick  | Boolean  | false  | Whether to pause the marquee when you hold the right click button |
| clone  | Boolean  | false  | Whether to clone the content if you want no empty spaces in the animation |
| options | Object | { } | An object that you can also pass all of the above props in for a cleaner template |

Examples: Add demo site here

# Examples

## Basic example with text

<script setup>
import BasicExampleText from './examples/BasicExampleText.vue'
import BasicExampleImages from './examples/BasicExampleImages.vue'
import BasicExampleCards from './examples/BasicExampleCards.vue'
import ImagesWithGradient from './examples/ImagesWithGradient.vue'
import CardsPauseOnHover from './examples/CardsPauseOnHover.vue'
import ImagesWithPauseOnClick from './examples/ImagesWithPauseOnClick.vue'
import ImagesWithoutClone from './examples/ImagesWithoutClone.vue'
import ImagesWithClone from './examples/ImagesWithClone.vue'
</script>

<BasicExampleText />

```vue
<template>
  <Vue3Marquee>
    <span
      v-for="(word, index) in helloArray"
      :key="index"
      class="word-style"
      :class="{ word: true, odd: index % 2 === 0, even: index % 2 === 1 }"
    >
      {{ word }}
    </span>
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "BasicExample",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      helloArray: [
        "hello",
        "こんにちは",
        "bonjour",
        "안녕하세요",
        ...
      ],
    };
  },
};
</script>

<style scoped>
.word {
  font-size: 30px;
  margin: 0 10px;
}
.odd {
  color: rgb(68, 77, 84);
}
.even {
  color: rgb(137, 147, 156);
}
</style>
```

## Basic example with images

<BasicExampleImages />

```vue
<template>
  <Vue3Marquee>
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "BasicExample",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "https://vuejs.org/images/vueschool.png",
        "https://vuejs.org/images/vehikl.png",
        "https://vuejs.org/images/retool.png",
        ...
      ],
    };
  },
};
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>
```

## Basic example with cards

<BasicExampleCards />

```vue
<template>
  <Vue3Marquee>
    <div class="card" v-for="avatar in avatarArray" :key="avatar">
      <img :src="avatar" width="100" height="100" />
      <p style="margin-top: 10px; margin-bottom: 0px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </Vue3Marquee>
</template>

<script>
import { reactive } from "vue";
import Vue3Marquee from "vue3-marquee";

export default {
  name: "BasicExampleCards",
  components: {
    Vue3Marquee,
  },
  setup() {
    const avatarArray = reactive([]);

    for (let i = 0; i < 5; i++) {
      avatarArray.push(
        `https://avatars.dicebear.com/api/avataaars/${Math.random()
          .toString(36)
          .substr(2, 6)}.svg`
      );
    }

    return {
      avatarArray,
    };
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  border-radius: 3%;
  background-color: rgb(241, 241, 241);
  margin: 20px 40px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
```

## Image marquee with a gradient

You can add a gradient to the marquee so that the sides of the marquee are more pleasant to look at.
In this example the following props are used:

- gradient: true
- gradientColor: [255, 255, 255]
- gradientWidth: 30%

<ImagesWithGradient />

```vue
<template>
  <Vue3Marquee
    :gradient="true"
    :gradientColor="[255, 255, 255]"
    :gradientWidth="`30%`"
  >
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "ImagesWithGradient",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "https://vuejs.org/images/vueschool.png",
        "https://vuejs.org/images/vehikl.png",
        "https://vuejs.org/images/retool.png",
        ...
      ],
    };
  },
};
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>
```

## Card marquee with pauseOnHover

The marquee can pause when you hover over the content. This is useful if you want the ability to run additional actions inside the content. For this example the [`pauseOnHover`](/guide#pauseonhover) prop is used.

<CardsPauseOnHover/>

```vue
<template>
  <Vue3Marquee :pauseOnHover="true">
    <div class="card" v-for="avatar in avatarArray" :key="avatar">
      <img :src="avatar" width="100" height="100" />
      <p style="margin-top: 10px; margin-bottom: 0px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <button class="btn">Learn More</button>
    </div>
  </Vue3Marquee>
</template>

<script>
import { reactive } from "vue";
import Vue3Marquee from "vue3-marquee";

export default {
  name: "CardsPauseOnHover",
  components: {
    Vue3Marquee,
  },
  setup() {
    const avatarArray = reactive([]);

    for (let i = 0; i < 5; i++) {
      avatarArray.push(
        `https://avatars.dicebear.com/api/avataaars/${Math.random()
          .toString(36)
          .substr(2, 6)}.svg`
      );
    }

    return {
      avatarArray,
    };
  },
};
</script>

<style scoped>
.card {
  width: 300px;
  border-radius: 3%;
  background-color: rgb(241, 241, 241);
  margin: 20px 40px;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

.btn {
  padding: 5px;
  margin: 10px 0;
  transition: all 0.2s;
}

.btn:hover {
  background: rgb(226, 226, 226);
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}
</style>
```

## Image marquee with pauseOnClick

You can also use the right click button to momentarily pause the animation. Hold the right click button to pause the animation. Releasing the mouse button will resume the animation. In this example the [`pauseOnClick`](/guide#pauseonclick) prop is used.

::: warning
If you need more functionality than this, using a carousel component might be better for your use case. Two that I would suggest are the [vue3-carousel](https://ismail9k.github.io/vue3-carousel/) or [egjs/vue-flicking](https://naver.github.io/egjs-flicking/).
:::

<ImagesWithPauseOnClick/>

```vue
<template>
  <Vue3Marquee :pauseOnClick="true">
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "ImagesWithPauseOnClick",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "https://vuejs.org/images/vueschool.png",
        "https://vuejs.org/images/vehikl.png",
        "https://vuejs.org/images/retool.png",
        ...
      ],
    };
  },
};
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>
```

## Image marquee with cloning

If your marquee content is too small to take the width of the full container it will leave an empty space since the content will always take the full width of the container.

::: warning
This feature is still experimental. If you have any issues with this option I would suggest you to have content that is wider than your container or make a duplicate of the content if possible.
:::

<ImagesWithoutClone />

You can use the [`clone`](/guide#clone) prop to workaround this issue. With this option, `vue3-marquee` will automatically calculate the content and container widths and clone your content to fill the container completely.

<ImagesWithClone/>

::: warning
On certain screen sizes, I have observed the image flashing in between animation resets. Please submit an issue if this happens to you.
:::

```vue
<template>
  <Vue3Marquee :clone="true" :duration="5" :direction="'reverse'">
    <img
      :src="img"
      v-for="img in imgArray"
      :key="img"
      class="image"
      width="100"
    />
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "ImagesWithClone",
  components: {
    Vue3Marquee,
  },
  data() {
    return {
      imgArray: [
        "https://vuejs.org/images/tendermint.png",
        "https://vuejs.org/images/layer0.png",
      ],
    };
  },
};
</script>

<style scoped>
.image {
  font-size: 30px;
  margin: 0 10px;
}
</style>
```

::: warning Disclaimer
The logos used in these examples are only used for demo purposes. The entities represented by their logos are not endorsing this component.
:::

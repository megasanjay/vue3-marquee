# Demos

## Basic example with text

<script setup>
import BasicExampleText from './examples/BasicExampleText.vue'
import BasicExampleImages from './examples/BasicExampleImages.vue'
import BasicExampleCards from './examples/BasicExampleCards.vue'
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
      height="150"
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
        "http://assets.stickpng.com/thumbs/5a4e2f8b2da5ad73df7efe6f.png",
        "http://assets.stickpng.com/thumbs/6160562276000b00045a7d97.png",
        "http://assets.stickpng.com/thumbs/608fffae5d1f990004970e72.png",
        "http://assets.stickpng.com/thumbs/608ff7145d1f990004970e69.png",
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
    <div class="card" v-for="index in 10" :key="index">
      <img
        :src="
          `https://avatars.dicebear.com/api/avataaars/${Math.random()
            .toString(36)
            .substr(2, 6)}.svg`
        "
        width="100"
        height="100"
      />
      <p style="margin-top: 10px; margin-bottom: 0px;">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  </Vue3Marquee>
</template>

<script>
import Vue3Marquee from "vue3-marquee";
export default {
  name: "BasicExampleCards",
  components: {
    Vue3Marquee,
  },
  data() {
    return {};
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

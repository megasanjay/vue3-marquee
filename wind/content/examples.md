---
navigation:
  title: Examples
layout: full-width
head:
  description: This is a custom description for Content Wind about page.
  image: https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA
---

# Examples

Some examples of how to use the library are shown below.

## Text marquee

::text-example
::

```vue
<template>
  <Vue3Marquee>
    <span v-for="(word, index) in helloArray" :key="index">
      {{ word }}
    </span>
  </Vue3Marquee>
</template>

<script setup>
const helloArray = ['hello', 'こんにちは', 'bonjour', ...]
</script>
```

## Image marquee

::images-example
::

```vue
<template>
  <Vue3Marquee>
    <img v-for="img in imgArray" :key="img" :src="img" />
  </Vue3Marquee>
</template>

<script setup>
const imgArray = [
    'https://sponsors.vuejs.org/images/vueschool.avif',
    'https://sponsors.vuejs.org/images/vehikl.avif',
    'https://sponsors.vuejs.org/images/dronahq.avif',
    ...
]
</script>
```

## Cards marquee

::cards-example
::

```vue
<template>
  <Vue3Marquee>
    <div class="card" v-for="avatar in avatarArray" :key="avatar">
      <img :src="avatar" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
    </div>
  </Vue3Marquee>
</template>

<script setup>
const avatarArray = [
    'https://avatars.dicebear.com/api/avataaars/1.svg',
    'https://avatars.dicebear.com/api/avataaars/2.svg',
    'https://avatars.dicebear.com/api/avataaars/3.svg',
    ...
]
</script>
```

## Image marquee with a gradient

You can add a gradient to the marquee so that the sides of the marquee are more pleasant to look at.

In this example the following props are used:

- `gradient`: `true`
- `gradientColor`: `[255, 255, 255]` (light)
- `gradientColor`: `[0, 0, 0]` (dark)
- `gradientLength`: `30%`

::images-with-gradient

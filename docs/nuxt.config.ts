export default defineNuxtConfig({
  // https://github.com/nuxt-themes/docus
  extends: '@nuxt-themes/docus',

  app: {
    head: {
      script: [
        {
          src: 'https://umami.sanjaysoundarajan.dev/mushroom',
          async: true,
          'data-website-id': '076e376b-e7ba-457e-85e3-c3e7fc55ec61',
        },
      ],
    },
  },

  modules: [
    // https://github.com/nuxt-modules/plausible
    '@nuxtjs/plausible',
    // https://github.com/nuxt/devtools
    '@nuxt/devtools',
  ],

  components: {
    global: true,
    dirs: ['~/components'],
  },
})

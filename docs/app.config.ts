export default defineAppConfig({
  docus: {
    title: 'Vue 3 Marquee',
    description:
      'A simple dynamic marquee component made for your Vue 3 applications.',
    socials: {
      twitter: 'megasanjay',
      github: 'megasanjay/vue3-marquee',
    },
    github: {
      dir: 'blob/main/docs',
      branch: 'main',
      repo: 'vue3-marquee',
      owner: 'megasanjay',
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      title: 'Vue 3 Marquee',
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
    footer: {
      credits: {
        icon: 'IconDocus',
        text: 'Powered by Docus',
        href: 'https://docus.dev',
      },
      textLinks: [
        {
          text: 'Made with ❤️ by Sanjay Soundarajan',
          href: 'https://sanjaysoundarajan.dev',
        },
      ],
      iconLinks: [
        {
          href: 'https://nuxt.com',
          icon: 'simple-icons:nuxtdotjs',
        },
        {
          href: 'https://www.npmjs.com/package/vue3-marquee',
          icon: 'mdi:npm-variant',
        },
      ],
    },
  },
})

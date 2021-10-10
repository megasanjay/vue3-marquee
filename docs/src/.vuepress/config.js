// const { description } = require("../../package");

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: "Vue 3 Marquee",
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description:
    "A simple dynamic marquee component with ZERO dependencies for Vue 3.",
  dest: "dist",
  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ["meta", { name: "theme-color", content: "#3eaf7c" }],
    ["meta", { name: "apple-mobile-web-app-capable", content: "yes" }],
    ["meta", { name: "msapplication-TileColor", content: "#da532c" }],
    ["meta", { name: "theme-color", content: "#ffffff" }],
    [
      "meta",
      { name: "apple-mobile-web-app-status-bar-style", content: "black" },
    ],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "apple-touch-icon.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: "favicon-16x16.png",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: "favicon-32x32.png",
      },
    ],

    ["link", { rel: "manifest", href: "site.webmanifest" }],
    [
      "link",
      {
        rel: "mask-icon",
        color: "#5bbad5",
        href: "safari-pinned-tab.svg",
      },
    ],
    ["link", { rel: "icon", href: "favicon.ico" }],
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    repo: "",
    editLinks: false,
    docsDir: "",
    editLinkText: "",
    lastUpdated: false,
    nav: [
      {
        text: "Guide",
        link: "/guide/",
      },
      {
        text: "Examples",
        link: "/examples/",
      },
      {
        text: "Github",
        link: "https://github.com/megasanjay/vue3-marquee",
      },
    ],
    sidebar: "auto",
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
  plugins: [
    "@vuepress/plugin-back-to-top",
    "@vuepress/plugin-medium-zoom",
    "@vuepress/register-components",
    ["vuepress-plugin-code-copy", true],
  ],
};

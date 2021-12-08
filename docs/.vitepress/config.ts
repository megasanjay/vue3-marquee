module.exports = {
  lang: "en-US",
  title: "Vue 3 Marquee",
  description:
    "A simple dynamic marquee component with zero dependencies for Vue 3.",
  editLinks: true,
  head: [
    [
      "meta",
      {
        name: "google-site-verification",
        content: "f6nafnBQBr6-gL3nT__pnzZ1iFx2J12jkwwDoOZpl6s",
      },
    ],
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
  themeConfig: {
    nav: [
      {
        text: "Guide",
        link: "/guide",
      },
      { text: "v1.0.x", link: "/v1/guide.html" },
      {
        text: "Examples",
        link: "/examples",
      },
      {
        text: "Submit an issue",
        link: "https://github.com/megasanjay/vue3-marquee/issues/new",
      },
      {
        text: "View on npm",
        link: "https://www.npmjs.com/package/vue3-marquee",
      },
      {
        text: "Github",
        link: "https://github.com/megasanjay/vue3-marquee",
      },
    ],
    sidebar: {
      "/": [
        { text: "Getting Started", link: "/guide" },
        { text: "Examples", link: "/examples" },
      ],
    },
  },
};

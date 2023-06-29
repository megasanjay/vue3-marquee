---
title: Home
navigation: false
layout: page
main:
  fluid: false
---

:ellipsis{right=0px width=75% blur=150px}

::block-hero
---
cta:
  - Get started
  - /introduction/installation
secondary:
  - Open on GitHub →
  - https://github.com/megasanjay/vue3-marquee
---

#title
Vue 3 Marquee

#description
A simple dynamic marquee component made for your Vue 3/Nuxt 3 applications.

#support
  ::terminal
  ---
  content:
  - npm install vue3-marquee@latest --save
  ---
  ::
::

::card-grid
#title
What's included

#root
:ellipsis{left=0px width=40rem top=10rem blur=140px}

#default
  ::card{icon=simple-icons:zeromq}
  #title
  Zero Dependencies
  #description
  This is a simple Vue 3 component with no external dependencies. All the styling is done with pure CSS.
  ::

  ::card{icon=vscode-icons:file-type-typescript-official}
  #title
  Typescript Support
  #description
  Native TS support has been provided with this library.
  ::

  ::card{icon=icon-park-outline:easy}
  #title
  Easy to use
  #description
  Only a single component with all the props you need.
  ::

  ::card{icon=mdi:compare-vertical}
  #title
  Vertical Marquee
  #description
  You can also create a vertical marquee with this component.
  ::

  ::card{icon=fa6-solid:clone}
  #title
  Cloning
  #description
  You can clone the children if there is not enough content to fill the marquee.
  ::

  ::card{icon=carbon:interactive-segmentation-cursor}
  #title
  Events
  #description
  Use mouse events for use as a carousel or slider alternative.
  ::
::

import { App } from 'vue'
import Vue3Marquee from './vue3-marquee.vue'

export { Vue3Marquee }

export function install(app: App, options: { name: string }) {
  const finalOptions = Object.assign(
    {},
    {
      name: 'Vue3Marquee',
    },
    options,
  )

  app.component(`${finalOptions.name}`, Vue3Marquee)
}

const plugin = {
  // eslint-disable-next-line no-undef
  version: VERSION,
  install,
}

export default plugin

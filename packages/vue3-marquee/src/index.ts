import type { App, Plugin } from 'vue'
import Vue3Marquee from './vue3-marquee.vue'
export * from './types'

export interface PluginOptions {
  name?: string
}

export default {
  install(app: App, options?: PluginOptions) {
    const name = options?.name ?? 'Vue3Marquee'
    app.component(name, Vue3Marquee)
  },
} as Plugin

export { Vue3Marquee }

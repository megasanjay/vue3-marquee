import { readdirSync, readFileSync, writeFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import Vue from '@vitejs/plugin-vue'
import VueTypeImports from 'vite-plugin-vue-type-imports'
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    Vue(),
    VueTypeImports(),
    cssInjectedByJsPlugin(),
    dts({
      insertTypesEntry: true,
      copyDtsFiles: false,
      cleanVueFileName: true,
      // ESM declarations need explicit extensions on relative imports
      beforeWriteFile: (filePath, content) => ({
        filePath,
        content: content.replace(
          /(from\s+['"])(\.{1,2}\/[^'"]+?)(?<!\.js)(['"])/g,
          '$1$2.js$3',
        ),
      }),
      // CJS consumers need .d.cts files since the package is "type": "module"
      afterBuild: () => {
        const dist = resolve(__dirname, 'dist')
        for (const file of readdirSync(dist)) {
          if (!file.endsWith('.d.ts')) continue
          const content = readFileSync(resolve(dist, file), 'utf-8').replace(
            /(from\s+['"]\.{1,2}\/[^'"]+?)\.js(['"])/g,
            '$1.cjs$2',
          )
          writeFileSync(resolve(dist, file.replace(/\.d\.ts$/, '.d.cts')), content)
        }
      },
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, './src/index.ts'),
      name: 'vue3marquee',
      formats: ['es', 'cjs'],
      // .cjs extension is required for CommonJS output in a "type": "module" package
      fileName: (format) =>
        format === 'es' ? 'vue3-marquee.es.js' : 'vue3-marquee.cjs',
    },
    outDir: 'dist',
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})

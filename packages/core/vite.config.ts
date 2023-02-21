/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/vite'
import { alias } from '../../config'

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // ...
  },
  plugins: [VueMacros({
    setupComponent: false,
    setupSFC: false,
    plugins: {
      vue: vue(),
      vueJsx: VueJsx(),
    },
  })],
  build: {
    outDir: 'dist',
    lib: {
      entry: resolve(__dirname, 'index.ts'),
      name: 'myComponent',
      fileName: 'my-component',
      formats: ['es'],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
  resolve: {
    alias,
  },
})

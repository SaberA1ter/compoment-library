import { resolve } from 'path'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueMacros from 'unplugin-vue-macros/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [VueMacros({
    setupComponent: false,
    setupSFC: false,
    plugins: {
      vue: vue(),
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
    alias: {
      '@my-component/core': __dirname,
    },
  },
})

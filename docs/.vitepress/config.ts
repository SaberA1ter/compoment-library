import { defineConfig } from 'vitepress'
import nav from './config/nav'
import sidebar from './config/sidebar'

export default defineConfig({
  title: 'MyComponent',
  description: 'MyComponent!',
  themeConfig: {
    nav,
    sidebar,
  },
})

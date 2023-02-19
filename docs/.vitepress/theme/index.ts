import theme from 'vitepress/theme'
import Demo from './components/Demo.vue'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
  },
}

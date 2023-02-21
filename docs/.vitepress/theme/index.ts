import theme from 'vitepress/theme'
import MC from '@my-component/core'
import Demo from './components/Demo.vue'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.use(MC)
  },
}

import theme from 'vitepress/theme'
import MC from '@my-component/core'
import Demo from './components/Demo.vue'
import '@my-component/core/style/index.less'

export default {
  ...theme,
  enhanceApp({ app }) {
    app.component('Demo', Demo)
    app.use(MC)
  },
}

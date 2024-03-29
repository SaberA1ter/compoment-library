import type { App } from 'vue'
import components from './components'

export default (app: App) => {
  app.use(components)
}

export * from './components'

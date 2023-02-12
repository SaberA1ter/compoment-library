import type { App } from 'vue'
import Button from './button'

export default (app: App) => {
  app.use(Button)
}

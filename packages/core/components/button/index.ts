import type { App } from 'vue'
import Button from './button.vue'
export * from './types'

Button.install = (app: App) => {
  app.component(Button.name, Button)
}

export default Button

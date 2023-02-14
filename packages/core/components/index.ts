import type { App } from 'vue'
import Button from './button'

export default (app: App) => {
  Button.install(app)
}

export * from './button'
export {
  Button,
}

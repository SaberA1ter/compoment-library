export interface ButtonProps {
  type?: 'primary' | 'default'
}

export interface ButtonEmits {
  click?: (event: Event) => void
}

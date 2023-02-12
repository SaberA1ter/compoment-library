<script setup lang="ts">
import { useDefaultPrefix } from '@my-component/core/hooks/usePrefix'
import { defaultComponentPrefix } from '@my-component/core/utils/config'
import type { ButtonProps } from './types'

const props = defineProps<ButtonProps>()
const emits = defineEmits<{
  (e: 'click', event: Event): void
}>()
defineOptions({
  name: `${defaultComponentPrefix}-button`,
})
const classnames = useDefaultPrefix('button')
const handleClick = (event: Event) => {
  emits('click', event)
}
</script>

<template>
  <button
    :class="[classnames.defaultName, {
      [classnames.types.isPrimary]: props.type === 'primary',
      [classnames.types.isDefault]: props.type !== 'primary',
    }]"
    @click="handleClick"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
import { useDefaultPrefix } from '@my-component/core/hooks/usePrefix'
import { defaultComponentPrefix } from '@my-component/core/utils/config'
import type { ButtonProps } from './types'

const emits = defineEmits<{
  (e: 'click', event: Event): void
}>()
// https://github.com/vuejs/core/issues/4294
// 目前 vue 文件不允许外部 import type
// const props = defineProps<ButtonProps>()
const props = $defineProps<ButtonProps>()
defineOptions({
  name: `${defaultComponentPrefix}Button`,
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

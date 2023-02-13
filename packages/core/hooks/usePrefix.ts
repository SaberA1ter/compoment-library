import { computed } from 'vue'
import { defaultPrefix } from '@my-component/core/utils/config'

export const useDefaultPrefix = (name: string) => {
  return computed(() => {
    const defaultName = `${defaultPrefix}-${name}`
    return {
      defaultName,
      types: {
        isPrimary: `${defaultName}-primary`,
        isDefault: `${defaultName}-default`,
      },
    }
  })
}

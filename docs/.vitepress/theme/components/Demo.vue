<script setup lang="ts">
interface DemoProps {
  demos: Record<string, any>
  code: string
  componentAddress: string
}
const props = defineProps<DemoProps>()
</script>

<template>
  <div>
    <component :is="props.demos[props.componentAddress]" />
  </div>
</template>

<style scoped>

</style>

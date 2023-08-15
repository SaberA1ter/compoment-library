<script setup lang="ts">
const handleClick = (event: MouseEvent) => {
  console.log(event)
}
</script>

<template>
  <h1>组件调试</h1>
  <mc-button type="primary" @click="handleClick">1234</mc-button>
</template>

<style scoped>

</style>

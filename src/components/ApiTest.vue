<template>
  <div>
    <p>APIキー: {{ apiKey }}</p>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const apiKey = computed(() =>
{
  return process.env.VUE_APP_API_KEY;
})

</script>

<style scoped>

</style>

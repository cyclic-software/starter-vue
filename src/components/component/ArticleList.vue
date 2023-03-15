<template>
  <div style="padding: 0 20px 20px 0;">
    <v-card>
      <v-list :items="items"></v-list>
    </v-card>
  </div>
</template>

<script setup>
const items = [
  { title: 'content1' },
  { title: 'content2' },
  { title: 'content3' },
]
</script>

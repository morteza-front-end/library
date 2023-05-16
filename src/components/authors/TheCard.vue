<template>
  <v-card>
    {{ props.bookData }}
  </v-card>
</template>
<script setup>

const props = defineProps({
  authorData: {
    name: '',
    profilePicture: ''
  }
})
</script>

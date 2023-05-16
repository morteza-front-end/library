<template>
  <v-card>
    {{ props.bookData }}
  </v-card>
</template>
<script setup>
import {defineProps} from "vue"

const props = defineProps({
  authorData: {
    name: '',
    profilePicture: ''
  }
})
</script>

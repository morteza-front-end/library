<template>
  <v-form @submit.prevent class="border-0">
    <v-text-field
      v-for="(key,index) in Object.keys(bookData)"
      :key="index"
      v-model="bookData[key]"
      rules="required"
      hideDetails
      :label="key"
    ></v-text-field>
    <v-btn type="submit" block class="mt-2">Submit</v-btn>
  </v-form>
</template>
<script setup>

import {reactive} from "vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false
  }
})
let bookData = reactive({
  id: 0,
  name: "",
  author: "",
  coverImage: "",
  isbn: ""
})
</script>

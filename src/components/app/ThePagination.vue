<template>
  <v-pagination :length="props.length" v-model="currentPage"></v-pagination>
</template>
<script setup>
import {ref, watch, defineEmits, defineProps} from "vue";

const props = defineProps({
  length: {
    type: [String, Number],
    required: true,
    default: 1
  },
})

const emit = defineEmits(["change"])

const currentPage = ref(1)
watch(() => currentPage.value, (newValue, oldValue) => {
  if (newValue !== oldValue) {
    emit("change", newValue)
  }
})
</script>

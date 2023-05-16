<template>
  <div class="text-center">
    <v-dialog
      v-model="isOpenDialog"
      @change="update"
      width="35rem"
      content-class="bg-white py-4 px-2 rounded "
    >
      <div class="w-100 bg-light-subtle">
        <form-book v-model="isOpenDialog"/>
      </div>

    </v-dialog>
  </div>
</template>
<script setup>
import {ref, watch} from "vue";
import FormBook from "@/components/books/helper/FormBook.vue";

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false
  }
})
const emit = defineEmits(["update:modelValue"])

const isOpenDialog = ref(false)
watch(() => props.modelValue, (value, oldValue) => {
  if (value !== oldValue) {
    isOpenDialog.value = value
  }
})

function update(value) {
  emit("update:modelValue", value)
}
</script>

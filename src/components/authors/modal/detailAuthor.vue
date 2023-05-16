<template>
  <div class="text-center">
    <v-dialog
      v-model="isOpenDialog"
      @change="update"
      width="35rem"
      persistent
      content-class="bg-white py-4 px-2 rounded "
    >
      <v-card-title> Add book</v-card-title>
      <div class="w-100 bg-light-subtle">
        <form-author v-model="isOpenDialog" :id="props.id"/>
      </div>

    </v-dialog>
  </div>
</template>
<script setup>
import { ref, watch} from "vue";
import FormAuthor from "@/components/authors/helper/FormAuthor.vue";
const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false
  },
  id:{
    type: Number,
    required: false,
    default: 0
  }
})
const emit = defineEmits(["update:modelValue"])

const isOpenDialog = ref(false)
watch(()=>isOpenDialog.value,(value,oldValue)=>{
  if (value !== oldValue) {
    emit("update:modelValue", value)
  }
})

watch(() => props.modelValue, (value, oldValue) => {
  if (value !== oldValue) {
    isOpenDialog.value = value
    emit("update:modelValue", value)
  }
})

function update(value) {
  emit("update:modelValue", value)
}
</script>

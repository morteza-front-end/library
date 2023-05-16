<template>
  <v-form @submit.prevent="onSubmit" class="border-0">
    <template v-for="(field,index) in fields"
              :key="index">
      <v-file-input
        v-if="field === 'coverImage'"
        label="cover image"
        accept="image/png, image/jpeg, image/bmp"
        @change="uploadFile"
        show-size
      ></v-file-input>
      <v-text-field
        v-else
        :name="field"
        v-model="bookData[field]"
        :rules="fieldRules"
        hideDetails
        :label="field"
      ></v-text-field>
    </template>

    <v-btn type="submit" block class="mt-2">Submit</v-btn>
  </v-form>
</template>
<script setup>
import {computed, reactive} from "vue";
import {useBookStore} from "@/store/books"

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false
  }
})
const emit = defineEmits(["update:modelValue",])
let bookData = reactive({
  id: 0,
  name: "",
  author: "",
  coverImage: "",
  genre: '',
  pageNumber: "",
  isbn: ""
})
let fieldRules = [
  value => {
    if (value) return true

    return 'This field is required.'
  },
]
let fields = computed(() => Object.keys(bookData).filter((key) => key !== 'id'))

const {addBooks} = useBookStore()

// upload file
// conver to base 64
const toBase64 = file => new Promise((resolve, reject) => {
  const reader = new FileReader();
  reader.readAsDataURL(file);
  reader.onload = () => resolve(reader.result);
  reader.onerror = reject;
});

async function uploadFile(event) {
  const file = event.target.files[0];
  bookData.coverImage = await toBase64(file)
}

function generateRandomId() {
  return Math.floor(Math.random() * 1000)
}

async function onSubmit(payload) {
  let response = await payload
  if (response.valid) {
    bookData.id = generateRandomId()
    let isAdded = await addBooks(bookData)
    if (isAdded) {
      emit("update:modelValue", false)
    } else {
      emit("update:modelValue", true)
    }
  }

}
</script>

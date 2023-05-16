<template>
  <v-form @submit.prevent="onSubmit" class="border-0">
    <template v-for="(field,index) in fields"
              :key="index">
      <v-file-input
        v-if="field === 'profilePicture'"
        label="cover image"
        accept="image/png, image/jpeg, image/bmp"
        @change="uploadFile"
        show-size
      ></v-file-input>
      <v-text-field
        v-else
        :name="field"
        v-model="authorData[field]"
        :rules="fieldRules"
        hideDetails
        :label="field"
      ></v-text-field>
    </template>

    <section class="d-flex align-center justify-center">
      <v-btn type="submit" class="mt-2">Submit</v-btn>
      <v-btn @click="closeDialog" type="button" class="mt-2 ml-4 bg-red-accent-2">cancel</v-btn>
    </section>
  </v-form>
</template>
<script setup>
import {computed, onMounted, reactive} from "vue";
import {useAuthorsStore} from "@/store/authors"

const props = defineProps({
  modelValue: {
    type: Boolean,
    required: true,
    default: false
  },
  id: {
    type: Number,
    required: false,
    default: 0
  }
})
const emit = defineEmits(["update:modelValue",])
let authorData = reactive({
  id: 0,
  fullName: "",
  profilePicture: ""
})
let fieldRules = [
  value => {
    if (value) return true

    return 'This field is required.'
  },
]
let fields = computed(() => Object.keys(authorData).filter((key) => key !== 'id'))

const {getListAuthors, addAuthor, editAuthor} = useAuthorsStore()

function closeDialog() {
  emit("update:modelValue", false)
}

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
  authorData.profilePicture = await toBase64(file)
}

function generateRandomId() {
  return Math.floor(Math.random() * 1000)
}

async function onSubmit(payload) {
  let response = await payload
  if (response.valid) {
    let isSuccess
    if (props.id) {
      isSuccess = await editAuthor(payload)
    } else {
      authorData.id = generateRandomId()
      isSuccess = await addAuthor(authorData)
    }

    if (isSuccess) {
      emit("update:modelValue", false)
    } else {
      emit("update:modelValue", true)
    }
  }
}

function findBook() {
  return getListAuthors.find((book) => book.id === props.id)
}

onMounted(() => {
  if (props.id) {
    authorData = findBook()
  }
})
</script>

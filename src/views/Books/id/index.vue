<template>
  <div class="v-container mt-16">
    <section class="d-flex justify-end my-4">
      <v-btn @click="remove">
        <v-icon class="text-red-accent-2" icon="mdi-delete"></v-icon>
      </v-btn>
      <v-btn @click="edit" class="mx-2">
        <v-icon class="text-blue-accent-2" icon="mdi-pencil"></v-icon>
      </v-btn>
    </section>
    <v-row justify="center">
      <div class="text-h5">
        <p>name: {{ targetBook.name }}</p>

        <p>author: {{ targetBook.author }}</p>

        <p>genre: {{ targetBook.genre }}</p>

        <p>isbn: {{ targetBook.isbn }}</p>

        <p>page number: {{ targetBook.pageNumber }}</p>
      </div>
      <div>
        <v-img :src="targetBook.coverImage" width="300px" class="max-h-200" :alt="targetBook.name"></v-img>
      </div>
    </v-row>
    <DialogAddBook v-model="isShowDialog" :id="id" />
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useBookStore} from "@/store/books";
import DialogAddBook from "@/components/books/modal/detailBook.vue"

const route = useRoute()
const router = useRouter()
const id = +(route.params.id)
const {getListBooks, removeBook} = useBookStore()
let targetBook = ref({})
const isShowDialog = ref(false)

function getBook() {
  targetBook.value = getListBooks.find((book) => book.id === id)
}

async function remove() {
  let response = await removeBook(id)
  if (response) {
    await router.push('/')
  }
}

async function edit(){
  isShowDialog.value = true
}

onMounted(() => getBook())
</script>

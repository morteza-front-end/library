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
      <div class="text-h5 mr-2">
        <p>name: {{ targetBook.fullName }}</p>
      </div>
      <div>
        <v-img :src="targetBook.profilePicture" width="300px" class="max-h-200" :alt="targetBook.fullName"></v-img>
      </div>
    </v-row>
    <!-- show author written books    -->
    <h1>author written books:</h1>
    <v-row justify="center">
      <v-col cols="12" md="6" lg="4" v-for="(book,index) in listBooks" :key="book.id">
        <book-card v-if="book" :book-data="book"/>
      </v-col>
    </v-row>
    <dialog-detail-author v-model="isShowDialog" :id="id"/>
  </div>
</template>
<script setup>
import {onMounted, ref} from "vue";
import {useRoute, useRouter} from "vue-router";
import {useAuthorsStore} from "@/store/authors";
import {useBookStore} from "@/store/books";
import DialogDetailAuthor from "@/components/authors/modal/detailAuthor.vue"
import BookCard from "@/components/books/TheCard.vue"

const route = useRoute()
const router = useRouter()
const id = +(route.params.id)
const {getListAuthors, removeAuthor} = useAuthorsStore()
const {getWrittenBooks} = useBookStore()
let targetBook = ref({})
const isShowDialog = ref(false)

const listBooks = ref([])

function getAuthor() {
  targetBook.value = getListAuthors.find((book) => book.id === id)
}

async function remove() {
  let response = await removeAuthor(id)
  if (response) {
    await router.push('/')
  }
}

async function edit() {
  isShowDialog.value = true
}

onMounted(async () => {
  getAuthor()
  let book = JSON.parse(JSON.stringify(targetBook.value))
  if (book.fullName) {
    console.log(await getWrittenBooks(book.fullName))
    listBooks.value = await getWrittenBooks(book.fullName)
  }
})
</script>


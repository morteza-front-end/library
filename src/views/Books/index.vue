<template>
  <v-container>
    <h1> list Book</h1>
    <!-- search section for book   -->
    <section class="d-flex align-center justify-end my-4">
      <v-text-field v-model="search" label="Search" outlined dense></v-text-field>
      <!-- a select box for choose     -->
      <v-select
        :items="['name', 'author', 'ISBN']"
        v-model="searchBy"
        label="Search By"
        outlined
        dense
      ></v-select>
    </section>
    <!--  Add new book   -->
    <section class="d-flex align-center justify-end my-4">
      <v-btn @click="openAddBookModal" color="primary">Add Book</v-btn>
    </section>
    <!--   handle show books   -->
    <section class="min-vh-75 ">
      <v-row justify="space-between" align-content="center">
        <v-col class="d-flex justify-center justify-md-space-between" v-for="book in list" :key="book.id">
          <books-card :book-data="book" class="w-md-100 d-inline-block mx-2 my-2"></books-card>
        </v-col>
      </v-row>
    </section>
    <!-- handle pagination   -->
    <app-pagination v-if="allPage!==0" :length="allPage" @change="handlePage"/>
    <!-- handle modal add new book -->
    <modal-detail-book v-model="dialog"/>
  </v-container>
</template>

<script setup>
import {computed, ref, watch} from "vue";
import BooksCard from "@/components/books/TheCard.vue"
import AppPagination from "@/components/app/ThePagination.vue"
import ModalDetailBook from "@/components/books/modal/detailBook.vue"
import {useBookStore} from "@/store/books"


const {getListBooks, allBook} = useBookStore()
const endIndex = ref(2)
const startIndex = ref(0)

let list = getListBooks(startIndex.value, startIndex.value + endIndex.value)

const dialog = ref(false)
const page = ref(1)
const allPage = computed(() => Math.ceil(allBook.length / endIndex.value))

watch(() => page.value, (value, oldValue) => {
  //  pagination for show books
  console.log("new value", value)
  console.log("old value", oldValue)
  if (oldValue > value) {
    console.log(" startIndex.value Before=>", startIndex.value)
    startIndex.value = startIndex.value - (oldValue) * endIndex.value
    console.log(" startIndex.value=>", startIndex.value)
  }
  if (value - oldValue > 1) {
    startIndex.value = startIndex.value + (value - oldValue)
  }
  if (oldValue - value > 1) {
    startIndex.value = startIndex.value + (oldValue - value)
  }
})

function handlePage(value) {
  page.value = value
  startIndex.value = startIndex.value + endIndex.value
}

function openAddBookModal() {
  dialog.value = true
}

// search in list book
let search = ref("")
let searchBy = ref("name")
watch(() => search.value, () => {
  searchBook()
})

function searchBook() {
  list = allBook.filter((book) => {
    if (searchBy.value === "name") {
      return book.name.toLowerCase().includes(search.value.toLowerCase())
    }
    if (searchBy.value === "author") {
      return book.author.toLowerCase().includes(search.value.toLowerCase())
    } else {
      return book.isbn.toLowerCase().includes(search.value.toLowerCase())
    }
  })
}
</script>
<style>
.min-vh-75 {
  min-height: 75vh;
}
</style>

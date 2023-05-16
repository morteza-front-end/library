<template>
  <v-container>
    <h1> list Book</h1>
    <!--  Add new book   -->
    <section class="d-flex align-center justify-end my-4">
      <v-btn @click="openAddBookModal" color="primary">Add Book</v-btn>
    </section>
    <!--   handle show books   -->
    <section class="min-vh-75">
      <books-card v-for="book in getListBooks" :key="book.id" :book-data="book"></books-card>
    </section>
    <!-- handle pagination   -->
    <app-pagination :length="getListBooks.length" @change="handlePage"/>
    <!-- handle modal add new book -->
    <modal-add-book v-model="dialog"/>
  </v-container>
</template>

<script setup>
import {ref} from "vue";
import BooksCard from "@/components/books/TheCard.vue"
import AppPagination from "@/components/app/ThePagination.vue"
import ModalAddBook from "@/components/books/modal/addBook.vue"
import {useAppStore} from "@/store/app"


const {getListBooks} = useAppStore()

const dialog = ref(false)

function handlePage(value) {
  console.log("list book", value)
}

function openAddBookModal() {
  dialog.value = true
}

//
</script>
<style>
.min-vh-75{
  min-height: 75vh;
}
</style>

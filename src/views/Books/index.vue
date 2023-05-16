<template>
  <v-container>
    <h1> list Book</h1>
    <!--  Add new book   -->
    <section class="d-flex align-center justify-end my-4">
      <v-btn @click="openAddBookModal" color="primary">Add Book</v-btn>
    </section>
    <!--   handle show books   -->
    <section class="min-vh-75 ">
      <v-row justify="space-between" align-content="center">
        <v-col class="d-flex justify-center justify-md-space-between" v-for="book in getListBooks" :key="book.id">
          <books-card :book-data="book" class="w-md-100 d-inline-block mx-2 my-2"></books-card>
        </v-col>
      </v-row>
    </section>
    <!-- handle pagination   -->
    <app-pagination v-if="allPage!==0" :length="allPage" @change="handlePage"/>
    <!-- handle modal add new book -->
    <modal-add-book v-model="dialog"/>
  </v-container>
</template>

<script setup>
import {computed, ref} from "vue";
import BooksCard from "@/components/books/TheCard.vue"
import AppPagination from "@/components/app/ThePagination.vue"
import ModalAddBook from "@/components/books/modal/addBook.vue"
import {useBookStore} from "@/store/books"


const {getListBooks} = useBookStore()

const dialog = ref(false)

const countShowItemInPage = ref(5)
const allPage = computed(() => Math.floor(getListBooks.length / countShowItemInPage.value))

function handlePage(value) {
  console.log("list book", value)
}

function openAddBookModal() {
  dialog.value = true
}

</script>
<style>
.min-vh-75 {
  min-height: 75vh;
}
</style>

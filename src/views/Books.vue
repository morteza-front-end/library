<template>
  <v-container>
    <h1> list Book</h1>
    <!--   handle show books   -->
    <section class="d-flex align-center justify-end">
      <v-btn @click="openAddBookModal" color="primary">Add Book</v-btn>
    </section>
    <div>
      <books-card v-for="book in getListBooks" :key="book.id" :book-data="book"></books-card>
    </div>
    <app-pagination :length="getListBooks.length" @change="handlePage"/>
    <div class="text-center">
      <v-dialog
        v-model="dialog"
        width="auto"
      >
        <v-card>
          <v-card-text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua.
          </v-card-text>
          <v-card-actions>
            <v-btn color="primary" block @click="dialog = false">Close Dialog</v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </div>
  </v-container>
</template>

<script setup>
import {ref} from "vue";
import BooksCard from "@/components/books/TheCard.vue"
import AppPagination from "@/components/app/ThePagination.vue"
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

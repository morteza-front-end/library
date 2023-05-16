<template>
  <v-container>
    <h1> list Authors</h1>
    <!--  Add new book   -->
    <section class="d-flex align-center justify-end my-4">
      <v-btn @click="openAddAuthorModal" color="primary">Add author</v-btn>
    </section>
    <!--   handle show books   -->
    <section class="min-vh-75 ">
      <v-row justify="space-between" align-content="center">
        <v-col class="d-flex justify-center justify-md-space-between" v-for="author in getListAuthors" :key="author.id">
          <author-card :author-data="author" class="w-md-100 d-inline-block mx-2 my-2"></author-card>
        </v-col>
      </v-row>
    </section>
    <!-- handle pagination   -->
    <app-pagination v-if="allPage!==0" :length="allPage" @change="handlePage"/>
    <!-- handle modal add new book -->
    <modal-detail-author v-model="dialog"/>
  </v-container>
</template>

<script setup>
import {computed, ref} from "vue";
import AuthorCard from "@/components/authors/TheCard.vue"
import AppPagination from "@/components/app/ThePagination.vue"
import ModalDetailAuthor from "@/components/authors/modal/detailAuthor.vue"
import {useAuthorsStore} from "@/store/authors"


const {getListAuthors} = useAuthorsStore()

const dialog = ref(false)

const countShowItemInPage = ref(5)
const allPage = computed(() => Math.floor(getListAuthors.length / countShowItemInPage.value))

function handlePage(value) {
  console.log("list book", value)
}

function openAddAuthorModal() {
  dialog.value = true
}

</script>
<style>
.min-vh-75 {
  min-height: 75vh;
}
</style>

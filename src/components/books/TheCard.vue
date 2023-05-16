<template>
  <v-card width="300px" @click="navigateTo">
    <v-img :src="props.bookData.coverImage" width="300px" class="max-h-200" :alt="props.bookData.name"></v-img>
    <div class="d-flex align-center ">
      <v-card-title class="pe-0">{{ props.bookData.name }}</v-card-title>
    </div>
    <v-card-text>
      <v-list>
        <v-list-item>
          <span>author:</span>
          <span>{{ props.bookData.author }}</span>
        </v-list-item>
        <v-list-item>
          <span>genre:</span>
          <span>{{ props.bookData.genre }}</span>
        </v-list-item>
        <v-list-item>
          <span>pageNumber:</span>
          <span>{{ props.bookData.pageNumber }}</span>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script setup>
import {useRouter} from "vue-router";

const props = defineProps({
  bookData: {
    id: 1,
    name: '',
    author: '',
    coverImage: '',
    genre: '',
    pageNumber: ''
  }
})
const router = useRouter()

function navigateTo() {
  if (!props.bookData.id) return
  let path = `/books/${props.bookData.id}`
  router.push(path)
}
</script>
<style>
.max-h-200{
  max-height: 200px;
}
</style>

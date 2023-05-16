<template>
  <v-card width="300px">
    <v-img :src="props.bookData.coverImage" :alt="props.bookData.name"></v-img>
    <v-card-title>{{ props.bookData.name }}</v-card-title>
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


const props = defineProps({
  bookData: {
    name: '',
    author: '',
    coverImage: '',
    genre: '',
    pageNumber: ''
  }
})
</script>

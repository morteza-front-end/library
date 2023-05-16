
<template>
  <v-card width="300px" @click="navigateTo">
    <v-img :src="props.authorData.profilePicture" width="150px" class="max-h-150 mx-auto rounded-circle" :alt="props.authorData.fullName"></v-img>
    <v-card-text>
      <v-list>
        <v-list-item>
          <p class="text-h6">fullName: {{ props.authorData.fullName }} </p>
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>
<script setup>

import {useRouter} from "vue-router";

const props = defineProps({
  authorData: {
    id:10,
    fullName: '',
    profilePicture: ''
  }
})
const router = useRouter()

function navigateTo() {
  if (!props.authorData.id) return
  let path = `/authors/${props.authorData.id}`
  router.push(path)
}
</script>
<style>
.max-h-150{
  max-height: 150px;
}
</style>

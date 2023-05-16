<template>
  <v-app class="bg-gray">
    <app-bar></app-bar>
    <router-view/>
  </v-app>
</template>

<script setup>
import AppBar from './AppBar.vue'
</script>
<style>
.bg-gray{
  background-color: #ccc;
}
</style>

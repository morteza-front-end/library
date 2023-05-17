<template>
  <v-app class="bg-gray">
    <app-bar></app-bar>
    <router-view/>
    <app-footer/>
  </v-app>
</template>

<script setup>
import AppBar from './AppBar.vue'
import AppFooter from "@/components/app/TheFooter.vue"
</script>
<style>
.bg-gray {
  background-color: #ccc;
}
</style>

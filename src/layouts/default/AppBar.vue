<template>
  <v-app-bar class="bg-amber" flat>
    <v-app-bar-title class="flex-0-0">
      <v-icon icon="mdi-circle-slice-6"/>
      Online library
    </v-app-bar-title>
    <v-list class="d-flex bg-amber h-100 py-0">
      <v-list-item v-for="item in listNavItem" :key="item.id">
        <router-link class="nav-list-item" exact-active-class="bg-primary" :to="{name:`${item.label}`}">
          {{ item.label }}
        </router-link>
      </v-list-item>
    </v-list>
  </v-app-bar>
</template>

<script setup>
const listNavItem = [
  {
    id: 58,
    label: "Books"
  },
  {
    id: 59,
    label: "Authors"
  },
]
</script>
<style scoped>
.nav-list-item {
  text-decoration: none;
  background-color: #ccc;
  padding: 5px 10px;
  border-radius: 15px;
  color: black;
}

.nav-list-item:hover {
  padding: 15px 10px;
}
</style>

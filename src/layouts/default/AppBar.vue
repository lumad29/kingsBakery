<script setup>
import { ref } from 'vue'

const drawer = ref(false)


const links = [
  { to: '/', text: 'Home' },
  { to: '/stores', text: 'Stores' },
  { to: '/products', text: 'Products' },
  { to: '/about', text: 'About' },
  { to: '/work', text: 'Work with us' }
];

const items = [
  {
    title: 'uno',
    value: 'uno',
  },
  {
    title: 'dos',
    value: 'dos',
  },
]

</script>

<template>
  <v-app-bar :elevation="0" color="blue-grey-darken-3">

    <v-app-bar-title class=" hidden-sm-and-downx my-font font-weight-bold">

      <router-link to="/" class="nav-link">King's Bakery</router-link>
    </v-app-bar-title>

    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up ma-12" />

    <nav class="nav-links nav-links hidden-sm-and-down">
      <router-link v-for="link in links" :key="link.to" :to="link.to" class="nav-link">{{ link.text }}</router-link>
    </nav>

  </v-app-bar>

  <v-navigation-drawer v-model="drawer" color="blue-grey-darken-3" temporary>
    <v-list :items="items">
      <v-list-item v-for="link in links" :key="link.to" :to="link.to" class="nav-link">{{ link.text }}</v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<style>
.nav-link {
  text-decoration: none;
  color: white;
  margin: 0 1rem 0 1rem;
}

.nav-links {
  display: flex;
  gap: 2rem;
  justify-content: center;
  align-items: center;
  width: 65vw;
}

.my-font {
  font-family: 'Abril Fatface', cursive;
}
</style>

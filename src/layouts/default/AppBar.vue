<script setup>
import { ref } from 'vue'

const drawer = ref(false)

const links = [
  { to: '/', text: 'Home' },
  { to: '/about', text: 'About' },
  { to: '/products', text: 'Our Products' },
  { to: '/work', text: 'Work With Us' }
];
</script>

<template>
  <v-app-bar :elevation="0" color="blue-grey-darken-3">
    <!-- <router-link to="/" class="nav-link">
      <img src="/src/assets/crown.png" alt="crown-logo" class="img-crown">
    </router-link> -->


    <v-app-bar-title class=" hidden-sm-and-downx my-font font-weight-bold">

      <router-link to="/" class="nav-link">King's Bakery</router-link>
    </v-app-bar-title>

    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up" />

    <nav class="nav-links nav-links hidden-sm-and-down">
      <router-link v-for="link in links" :key="link.to" :to="link.to" class="nav-link">{{ link.text }}</router-link>
      <!--<router-link to="/" class="nav-link">Home</router-link>-->
    </nav>

  </v-app-bar>
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
  width: 60vw;
}

.img-crown {
  height: 3rem;
  width: 3rem;
  margin-left: 5rem;
}

.my-font {
  font-family: 'Abril Fatface', cursive;
}
</style>
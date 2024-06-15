<script setup>
import { ref } from 'vue'
import { useGoTo } from 'vuetify/lib/framework.mjs';

const drawer = ref(false)


const links = [
  { to: '#target-home', text: 'Home' },
  { to: '#target-stores', text: 'Stores' },
  { to: '#target-products', text: 'Products' },
  { to: '#target-about', text: 'About' },
  { to: '#target-work', text: 'Work with us' }
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

const goTo = useGoTo()

const onClick = (targetId) => {
  goTo(targetId)
}

</script>

<template>
  <v-app-bar :elevation="0" color="blue-grey-darken-3">

    <v-app-bar-title class=" hidden-sm-and-downx my-font font-weight-bold">

      <router-link to="/" class="nav-link">King's Bakery</router-link>
    </v-app-bar-title>

    <v-app-bar-nav-icon @click="drawer = !drawer" class="hidden-md-and-up ma-12" />

    <!-- <v-btn @click="onClick('#target-about')">GoTo Stores</v-btn> -->

    <nav class="nav-links nav-links hidden-sm-and-down">
      <div v-for="link in links" :key="link.to" @click="goTo(link.to)" class="nav-link">{{ link.text }}</div>
    </nav>

  </v-app-bar>

  <!--navigation drawer-->
  <v-navigation-drawer v-model="drawer" color="blue-grey-darken-3" location="top" :mobile-breakpoint="0" permanent>
    <v-list :items="items">
      <v-list-item v-for="link in links" :key="link.to" @click="goTo(link.to)" class="nav-link">{{ link.text
        }}</v-list-item>
    </v-list>
  </v-navigation-drawer>

</template>

<style>
.nav-link {
  text-decoration: none;
  color: white;
  margin: 0 1rem 0 1rem;
  cursor: pointer;
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

<template>
  <v-app>
    <AppBar />
    <v-main>
      <RouterView /> <!--esto renderiza lo del router-->
    </v-main>
  </v-app>
</template>

<script setup>
import AppBar from './layouts/default/AppBar.vue';
</script>

<style></style>
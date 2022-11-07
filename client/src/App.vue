<template>
    <v-app>
      <v-main>
        <Home />
        <router-view></router-view>
      </v-main>
    </v-app>
  </template>
  
  <script setup>
    import Home from '../src/FE/Home.vue'
  </script>
  
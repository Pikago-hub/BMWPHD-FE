<template>
  <v-app>
    <NavBar />

    <router-view></router-view>

    <Footer/>
  </v-app>
</template>
  
  <script>
  import NavBar from './FE/Views/components/NavBar.vue';
  import Footer from './FE/Views/components/Footer.vue';
  

  export default {
  name: 'App',
  components: {
      NavBar,
      Footer,
  },
}
  </script>
  
  
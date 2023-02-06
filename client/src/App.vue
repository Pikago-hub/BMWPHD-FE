<template>
  <v-app>
    <NavBar location="top"/>

    <router-view></router-view>

    <Footer location="bottom"/>
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
  
  
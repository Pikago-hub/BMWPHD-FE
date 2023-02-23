<template>
  <v-app>
    <NavBar :key="componentKey" />
    <router-view @isLoggedIn="test($event)"> </router-view>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./FE/Views/components/NavBar.vue";
import Footer from "./FE/Views/components/Footer.vue";

export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      componentKey: 0,
    };
  },
  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    test() {
      this.forceRerender();
    },
  },
};
</script>

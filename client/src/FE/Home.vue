<template>
  <v-app>
    <!-- <div> -->
    <v-app-bar image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
      <v-app-bar-nav-icon variant="icon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn size="large" variant="text" @click="onHome">BMWPHD</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip text="Login" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn size="large" variant="icon" @click="onLogin" v-bind="props">
            <v-icon>mdi-login-variant</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-menu leftbottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn variant="icon" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>

    <v-navigation-drawer v-model="drawer" image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" permanent
      theme="dark">
      <v-list nav>
        <v-list-item prepend-icon="mdi-home" title="Home" link @click="onHome"></v-list-item>
        <v-list-item prepend-icon="mdi-magnify" title="Search" link @click="goToResult"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Manage" link @click="onManage"></v-list-item>
        <v-list-item prepend-icon="mdi-file-document" title="History" link @click="onHistory"></v-list-item>
        <v-list-item prepend-icon="mdi-horseshoe" title="About Us" link @click="onAbout"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main>

      <v-banner lines="one" color="warning" icon="mdi-horse">

        <v-banner-text>
          Looking for horse status, recent matches, performance, data, etc? Check out our search engine
          <!-- <v-btn @click="goToResult" variant="tonal">Start Your Search Here</v-btn> -->
        </v-banner-text>
        <template v-slot:actions>
          <v-btn @click="goToResult"> Start Search </v-btn>
        </template>

      </v-banner>

      <div id="app">

      </div>

      <v-sheet class="py-16">
        <section id="filter">
          <v-card class="mx-auto"
    width="75%" color="#c9e0ec" elevation="3" style="border-radius: 10px;">
           
              <h2 class="text-h3" style="text-align:center">
                Welcome to BMW Performance Horse Database
              </h2>
              <p class="mt-8" style="text-align:center">
                BMW Quarter Horses breeds and raises prospects for the reining and reined cowhorse disciplines with a
                focus on pedigree, conformation, a good mind, and soundness.
                Click <a href="about" style="color:blue">here</a>
                for more information.
              </p>
              <br/>
            
              <v-img width="600" src="../client/src/assets/BMWPHD.png" class="center" style="border-radius: 20px;"/>
              <br/>
          </v-card>
        </section>
      </v-sheet>
    </v-main>

    <v-footer absolute inset app height="60" width="auto" color="#c9e0ec">
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            <strong>{{ new Date().getFullYear() }} — BMWPHD</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
import { useRouter } from 'vue-router'
const router = useRouter()

export default {
  name: 'App',
  data: () => ({
    drawer: false,
    group: null,
    categoriesCopy: [],
    selectedCategories: []
  }),

  computed: {},

  methods: {
    goToResult() {
      this.$router.push('/result');
    },
    onHome() {
      this.$router.push('/home');
    },
    onManage() {
      this.$router.push('/home');
    },
    onHistory() {
      this.$router.push('/history');
    },
    onLogin() {
      this.$router.push('/login');
    },
    onAbout() {
      this.$router.push('/about');
    },
  }
}
</script>

<style setup>
.v-tooltip__content {
  pointer-events: initial;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>
<template>
  <v-app>

    <v-app-bar image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
      <v-app-bar-nav-icon variant="outlined" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn size="large" variant="text" @click="onHome">BMWPHD</v-btn>
      </v-toolbar-title>

      <v-tooltip text="Login" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn size="large"  @click="onLogin" v-bind="props">
            <v-icon>mdi-login-variant</v-icon>
          </v-btn>
        </template>
      </v-tooltip> 

      <v-menu leffbottom>
        <template v-slot:activator="{ props }">
          <v-btn variant="outlined" v-bind="props" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        <v-list bg-color="#1976D2">
        <v-list-item
          v-for="(dotItem, index) in dotItems"
          :key="index"
          :value="index"
        >
          <v-list-item-title>{{ dotItem.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
      </v-menu>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" location="left" image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" permanent
      theme="dark">
      <v-list nav>
        <v-list-item prepend-icon="mdi-home" title="Home" link @click="onHome"></v-list-item>
        <v-list-item prepend-icon="mdi-magnify" title="Search" link @click="goToResult"></v-list-item>
        <v-list-item prepend-icon="mdi-horseshoe" title="About Us" link @click="onAbout"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Manage" link @click="onManage"></v-list-item>
      </v-list>
    </v-navigation-drawer>
    <router-view></router-view>
  </v-app>
</template>

<script>
import { useRouter } from 'vue-router'
const router = useRouter()

export default {
  name: 'NavBar',
  data: () => ({
    drawer: false,
    group: null,
    dotItems: [
        { title: 'Implementing 1' },
        { title: 'Implementing 2' },
        { title: 'Implementing 3' },
        { title: 'Implementing 4' },
      ],
  }),

  watch: {
    $route() {
      this.drawer = false
    },
  },

  methods: {
    onReturnHome() {
      this.$router.push('/home');
    },
    goToResult() {
      this.$router.push('/result');
    },
    onHome() {
      this.$router.push('/home');
    },
    onManage() {
      this.$router.push('/manageusers');
    },
    onLogin() {
      this.$router.push('/login');
    },
    onAbout() {
      this.$router.push('/about');
    },
  }, 

}
</script>

<style>
.v-tooltip__content {
  pointer-events: initial;
}

.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}

.header {
    position: sticky;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    box-shadow: 0 1rem 1rem rgba(0, 0, 0, 0.05);
    display: flex;
    align-items: center;
}
</style>
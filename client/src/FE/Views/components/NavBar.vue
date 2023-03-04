<template>
    <v-app-bar image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" :key="navBarKey">
      <v-app-bar-nav-icon
        color="#FFFFFFDE"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn size="large" color="#FFFFFFDE" variant="text" @click="onHome">BMWPHD</v-btn>
      </v-toolbar-title>
      <v-tooltip text="Login" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn v-if="!token" size="large" @click="onLogin" v-bind="props">
            <v-icon style="color:#FFFFFFDE">mdi-login</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-tooltip text="Logout" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn v-if="token" size="large" @click="onLogout" v-bind="props">
            <v-icon style="color:#FFFFFFDE">mdi-logout</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

    </v-app-bar>
    <v-navigation-drawer
      v-model="drawer"
      image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg"
      temporary
      theme="dark"
      v-click-outside="onClickOutside"
    >
      <v-list nav>
        <v-list-item
          prepend-icon="mdi-home"
          title="Home"
          link
          @click="onHome"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-magnify"
          title="Search"
          link
          @click="goToResult"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-horseshoe"
          title="About Us"
          link
          @click="onAbout"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-clipboard-check"
          title="Manage Requests"
          link
          @click="onManageRequests"
        ></v-list-item>
        <v-list-item
          prepend-icon="mdi-account"
          title="Manage Users"
          link
          @click="onManageUsers"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>
</template>

<script>
import auth from "../../../services/auth.service"
import state from "../../../store/index"

export default {
  name: "NavBar",
  data: () => ({
    LoggedIn: false,
    drawer: false,
    group: null,
    token: localStorage.getItem("user"),
    state,
    navBarKey: 0,
  }),

  methods: {
    forceRerender() {
      this.navBarKey += 1;  
    },
    onReturnHome() {
      this.$router.push("/");
    },
    goToResult() {
      this.$router.push("/result");
    },
    onHome() {
      this.$router.push("/");
    },
    onManageRequests() {
      this.$router.push("/managerequests");
    },
    onManageUsers () {
      this.$router.push("/manageusers");
    },
    onLogin() {
      this.$router.push("/login");
    },
    onLogout() {
      auth.logout();
      this.$router.push("/login");
      this.token = null; 
      this.forceRerender();
    },
    onAbout() {
      this.$router.push("/about");
    },
    onClickOutside() {
      this.drawer = false;
    },
  },
};
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

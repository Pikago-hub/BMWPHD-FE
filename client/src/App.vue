<template>
  <v-app>
    <NavBar :key="componentKey" />
    <v-alert
      v-model="notvalidLogin"
      outlined
      text
      color="#FFCCCB"
      closable
      close-text="Close Alert"
    >
      <v-icon icon="mdi-close-thick"></v-icon>
      Login token <strong> Expired.</strong> Please logout and log back in to restore token.
    </v-alert>
    <router-view @isLoggedIn="test($event)"> </router-view>
    <Footer />
  </v-app>
</template>

<script>
import NavBar from "./FE/Views/components/NavBar.vue";
import Footer from "./FE/Views/components/Footer.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    NavBar,
    Footer,
  },
  data() {
    return {
      componentKey: 0,
      notvalidLogin: false,
    };
  },

  created: function () {
    this.checkToken();
  },

  methods: {
    forceRerender() {
      this.componentKey += 1;
    },
    test() {
      this.forceRerender();
    },

    checkToken() {
      let user = JSON.parse(localStorage.getItem("user"));
      let token = "";
      if (user != null) {
        token = user.token;
        axios({
          url: "https://bmwphd-be.herokuapp.com/token/" + token,
          method: "get",
        }).then(
          (res) => {
            console.log(res);
            if (res.data.data == false) {
              this.notvalidLogin = true;
              this.$router.push("/login");
              localStorage.removeItem("user");
            }
          },
          (error) => {
            console.log(error);
          }
        );
      }
      console.log(token);
    },
  },
};
</script>

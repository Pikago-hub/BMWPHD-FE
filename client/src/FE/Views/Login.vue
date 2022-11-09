<template>
   <v-app >
      <v-main>
         <v-container fluid fill-height>
               <v-flex xs12 sm8 md4>
                  <v-card class="elevation-12">
                     <v-toolbar color="blue accent-4">
                        <v-toolbar-title>Login To BMHPHD</v-toolbar-title>
                     </v-toolbar>
                     <v-card-text>
                     <form ref="form" @submit.prevent="login()">
                            <v-text-field
                              v-model="username"
                              name="username"
                              label="Username"
                              type="text"
                              placeholder="username"
                              required
                           ></v-text-field>
                           
                            <v-text-field
                              v-model="password"
                              name="password"
                              label="Password"
                              type="password"
                              placeholder="password"
                              required
                           ></v-text-field>
                           <v-btn type="submit" class="mt-4" color="blue accent-4" value="log in" @click="onSubmit">Login</v-btn>
                      </form>
                     </v-card-text>
                  </v-card>            
               </v-flex>
         </v-container>
      </v-main>
   </v-app>
</template>

<script>
import {useRouter} from 'vue-router'
const router = useRouter()

export default {
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + "logged in")
    },
    onSubmit() {
      this.$router.push('/home');
    }
  },
};
</script>
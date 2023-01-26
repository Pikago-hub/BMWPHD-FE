<template>
   <div class="py-10 mt-16">
  
      <v-card
        class="mx-auto pa-12 pb-8"
        elevation="8"
        max-width="500"
        rounded="lg"
      >

      <v-tabs
        v-model="tab"
        bg-color="blue"
        align-tabs="center"
        fixed-tabs
      >
        <v-tab value="Login">Login</v-tab>
        <v-tab value="Sign up">Sign up</v-tab>
      </v-tabs>
  
      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="Login">
              <div class="text-subtitle-1 text-medium-emphasis">Username</div>
              <v-text-field
                density="compact"
                placeholder="Email address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
              ></v-text-field>
        
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
                <a
                  class="text-caption text-decoration-none text-blue"
                  href="/PageNotFound"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Forgot login password?</a>
              </div>
        
              <v-text-field
                :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
                :type="visible ? 'text' : 'password'"
                density="compact"
                placeholder="Enter your password"
                prepend-inner-icon="mdi-lock-outline"
                variant="outlined"
                @click:append-inner="visible = !visible"
              ></v-text-field>
        
              <v-btn
                block
                class="mb-8"
                color="blue"
                size="large"
                variant="tonal"
                @click="onSubmit"
              >
                Log In
              </v-btn>


          </v-window-item>
  
          <v-window-item value="Sign up">
              <v-row>
                <v-col cols="12" sm="6" md="6">
                    <div class="text-subtitle-1 text-medium-emphasis">First Name</div>
                    <v-text-field
                      density="compact"
                      placeholder="First Name"
                      prepend-inner-icon="mdi-account-box"
                      variant="outlined"
                    ></v-text-field>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <div class="text-subtitle-1 text-medium-emphasis">Last Name</div>
                  <v-text-field
                    density="compact"
                    placeholder="Last Name"
                    prepend-inner-icon="mdi-account-box"
                    variant="outlined"
                  ></v-text-field>
                </v-col>
              </v-row>
              <div class="text-subtitle-1 text-medium-emphasis">Email Address</div>
              <v-text-field
                density="compact"
                placeholder="Email Address"
                prepend-inner-icon="mdi-email-outline"
                variant="outlined"
              ></v-text-field>
        
              <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
                Password
              </div>
              <v-text-field
         :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
         :type="visible ? 'text' : 'password'"
         density="compact"
         placeholder="Enter your password"
         prepend-inner-icon="mdi-lock-outline"
         variant="outlined"
         @click:append-inner="visible = !visible"
       ></v-text-field>
       <div class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between">
        Confirm Password
       </div>
       <v-text-field
         :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
         :type="visible ? 'text' : 'password'"
         density="compact"
         placeholder="Enter your password again"
         prepend-inner-icon="mdi-lock-outline"
         variant="outlined"
         @click:append-inner="visible = !visible"
       ></v-text-field>
       <v-btn
         block
         class="mb-8"
         color="blue"
         size="large"
         variant="tonal"
         @click="onSubmit"
       >
         Sign Up
       </v-btn>
          </v-window-item>
        
  
        </v-window>
      </v-card-text>
      </v-card>
    </div>
        
      
    

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
      tab: null,
    };
  },
  methods: {
    login() {
      const { username } = this;
      console.log(username + "logged in")
    },
    onSubmit() {
      this.$router.push('/');
    }
  },
};
</script>
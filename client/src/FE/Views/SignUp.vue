<template>
  <div class="py-10 mt-16">
 
     <v-card
       class="mx-auto pa-12 pb-8"
       elevation="8"
       max-width="448"
       rounded="lg"
     >
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
         SignUp
       </v-btn>
 
       <v-card-text class="text-center">
         <a
           class="text-blue text-decoration-none"
           href="/login"
         >
          Back to SignIn <v-icon icon="mdi-chevron-right"></v-icon>
         </a>
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
   };
 },
 methods: {
   login() {
     const { username } = this;
     console.log(username + "logged in")
   },
   onSubmit() {
     this.$router.push('/login');
   }
 },
};
</script>
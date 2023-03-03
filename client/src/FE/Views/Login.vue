<template>
  <v-main>
    <v-alert
      v-model="registerAlert"
      outlined
      text
      color="#E6FFE6"
      closable
      close-text="Close Alert"
    >
      <v-icon icon="mdi-check-bold"></v-icon>
      Registration <strong> Successful</strong>
    </v-alert>

    <v-alert
      v-model="notLoggedInAlert"
      outlined
      text
      color="#FFCCCB"
      closable
      close-text="Close Alert"
    >
      <v-icon icon="mdi-close-thick"></v-icon>
      Login information <strong> Invalid.</strong> Please make sure your email
      and password are correct.
    </v-alert>

    <v-card
      class="mx-auto mt-14 pa-12 pb-8"
      elevation="8"
      max-width="500"
      rounded="lg"
    >
      <v-tabs v-model="tab" bg-color="blue" align-tabs="center" fixed-tabs>
        <v-tab value="Login">Login</v-tab>
        <v-tab value="Sign up">Sign up</v-tab>
      </v-tabs>

      <v-card-text>
        <v-window v-model="tab">
          <v-window-item value="Login">
            <v-card class="px-4">
              <v-card-text>
                <v-form ref="loginForm" v-model="valid" lazy-validation>
                  <div class="text-subtitle-1 text-medium-emphasis">Email</div>
                  <v-text-field
                    density="compact"
                    placeholder="Email address"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    v-model="loginEmail"
                    :rules="loginEmailRules"
                    required
                    @:keyup.enter="Login"
                  >
                  </v-text-field>

                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Password
                  </div>
                  <v-text-field
                    density="compact"
                    placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined"
                    v-model="loginPassword"
                    @:keyup.enter="Login"
                    @click:append="show1 = !show1"
                  >
                  </v-text-field>

                  <v-btn
                    x-large
                    block
                    :disabled="!valid"
                    color="blue"
                    class="mb-8 mt-3"
                    variant="tonal"
                    @click="Login"
                  >
                    Login
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-window-item>

          <v-window-item value="Sign up"
            ><v-card class="px-4">
              <v-card-text>
                <v-form ref="registerForm" v-model="valid" lazy-validation>
                  <v-row>
                    <v-col cols="12" sm="6" md="6">
                      <div class="text-subtitle-1 text-medium-emphasis">
                        First Name
                      </div>
                      <v-text-field
                        density="compact"
                        placeholder="First Name"
                        prepend-inner-icon="mdi-account-box"
                        variant="outlined"
                        v-model="firstName"
                        :rules="[rules.required]"
                        maxlength="20"
                        required
                      >
                      </v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <div class="text-subtitle-1 text-medium-emphasis">
                        Last Name
                      </div>
                      <v-text-field
                        density="compact"
                        placeholder="Last Name"
                        prepend-inner-icon="mdi-account-box"
                        variant="outlined"
                        v-model="lastName"
                        :rules="[rules.required]"
                        maxlength="20"
                        required
                      >
                      </v-text-field>
                    </v-col>
                  </v-row>
                  <div class="text-subtitle-1 text-medium-emphasis">
                    Email Address
                  </div>
                  <v-text-field
                    density="compact"
                    placeholder="Email Address"
                    prepend-inner-icon="mdi-email-outline"
                    variant="outlined"
                    v-model="email"
                    :rules="emailRules"
                    required
                  >
                  </v-text-field>
                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Password
                  </div>
                  <v-text-field
                    density="compact"
                    placeholder="Enter your password"
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined"
                    v-model="password"
                    :rules="[rules.required, rules.min]"
                    name="input-10-1"
                    hint="At least 8 characters"
                    counter
                    @click:append="show1 = !show1"
                  >
                  </v-text-field>

                  <div
                    class="text-subtitle-1 text-medium-emphasis d-flex align-center justify-space-between"
                  >
                    Confirm Password
                  </div>
                  <v-text-field
                    block
                    density="compact"
                    placeholder="Enter your password again"
                    prepend-inner-icon="mdi-lock-outline"
                    variant="outlined"
                    v-model="verify"
                    :rules="[rules.required, passwordMatch]"
                    name="input-10-1"
                    counter
                    @click:append="show1 = !show1"
                  >
                  </v-text-field>

                  <v-btn
                    x-large
                    block
                    :disabled="!good"
                    color="blue"
                    variant="tonal"
                    class="mb-8"
                    @click="Register"
                    >Register
                  </v-btn>
                </v-form>
              </v-card-text>
            </v-card>
          </v-window-item>
        </v-window>
      </v-card-text>
    </v-card>
  </v-main>
</template>

<script>
import authService from "../../services/auth.service.js";
export default {
  data: () => ({
    userData: null,
    isLoggedIn: false,
    registerAlert: false,
    notLoggedInAlert: false,
    dialog: true,
    tab: 0,
    tabs: [
      { name: "Login", icon: "mdi-account" },
      { name: "Register", icon: "mdi-account-outline" },
    ],
    valid: true,
    good: true,
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    verify: "",
    loginPassword: "",
    loginEmail: "",
    loginEmailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    emailRules: [
      (v) => !!v || "Required",
      (v) => /.+@.+\..+/.test(v) || "E-mail must be valid",
    ],
    show1: false,
    rules: {
      required: (value) => !!value || "Required.",
      min: (v) => (v && v.length >= 8) || "Min 8 characters",
    },
  }),

  computed: {
    loggedIn() {
      return this.$store.getters.loggedIn;
    },
    passwordMatch() {
      return () => this.password === this.verify || "Password must match";
    },
  },

  mounted() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },

  created() {
    if (this.loggedIn) {
      this.$router.push("/");
    }
  },

  methods: {
    async Register() {
      const user = {
        email: this.email,
        password: this.password,
        name: this.firstName + " " + this.lastName,
      };
      const response = await authService
        .register(user)
        .then((data) => {
          this.registerAlert = true;
          this.firstName = "";
          this.lastName = "";
          this.email = "";
          this.password = "";
          this.verify = "";
          this.tab = "Login";
          console.log(data);
        })
        .then(() => {
          this.$router.push("/login");
        })
        .catch((error) => {
          console.log(error);
        });
    },
    async Login() {
      const user = {
        username: this.loginEmail,
        password: this.loginPassword,
      };
      const response = await authService
        .login(user)
        .then((data) => {
          console.log(data);
          localStorage.setItem("user", JSON.stringify(data.data));
          this.$emit("isLoggedIn", "true");
        })
        .then(() => {
          this.$router.push("/");
        })
        .catch((error) => {
          this.notLoggedInAlert = true;
          console.log(error);
        });
    },
    reset() {
      this.$refs.form.reset();
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
  },
};
</script>

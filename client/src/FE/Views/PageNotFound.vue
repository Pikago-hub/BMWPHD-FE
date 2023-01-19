<template>
  <v-main>

    <v-sheet class="py-16">
      <section id="filter">
        <v-card class="mx-auto my-16"
          width="60%" color="#c9e0ec" elevation="3" style="border-radius: 10px;">
            <h2 class="text-h3 mt-5" style="text-align:center">
              OOPS!
            </h2>
          <v-container>
          <v-row justify="space-between">
            <v-col cols="auto">
              <v-responsive width="400">
                <p class="mt-8" style="text-align:center">
                  Error Code: 404 
                </p>
                <p class="mt-3" style="text-align:center">
                  We cannot seem to find the page you're looking for.
                </p>
                <p class="mt-3" style="text-align:center">
                  Please make sure that you entered the correct URL or select the button 
                  below to return to our home page. 
                </p>
                <p class="mt-3" style="text-align:center">
                <v-btn class="mt-3" @click="onHome">
                    Return Home
                </v-btn>
                </p>
              </v-responsive>
            </v-col>

          <v-img class="mr-5 mb-5 mt-5"  src="../client/src/assets/404.png" />
          </v-row>
          </v-container>
          
        </v-card>
      </section>
    </v-sheet>
  </v-main>
</template>
  
  <script>
  export default {
    name: "PageNotFound",
    computed: {
    },
    methods: {
    onHome() {
      this.$router.push('/home');
    },
  }, 
  }
  </script>
  
  <style scoped>
  
  </style>
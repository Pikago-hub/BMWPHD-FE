<template>
  <v-main>

    <v-sheet class="py-16">
      <section id="filter">
        <v-card class="mx-auto"
          width="60%" color="#c9e0ec" elevation="3" style="border-radius: 10px;">
         
            <h2 class="text-h3" style="text-align:center">
              OOPS!
            </h2>
            <p class="mt-10" style="text-align:center">
              We cannot seem to find the page you're looking for.
            </p>
            <p class="mt-3" style="text-align:center">
              Please make sure that you entered the correct URL or select the button 
              below to return to our home page. 
            </p>
            <v-btn class="mt-10" location="center" @click="onHome">
                    Return Home
            </v-btn>

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
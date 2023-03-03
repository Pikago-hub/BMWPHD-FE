<template>
  <v-main>
    <v-banner lines="one" color="warning" icon="mdi-horse">
      <v-banner-text>
        Looking for horse status, recent matches, performance, data, etc? Check
        out our search engine
      </v-banner-text>
      <template v-slot:actions>
        <v-btn variant="tonal" @click="goToResult"> Start Search </v-btn>
      </template>
    </v-banner>

    <v-sheet class="py-16">
      <section id="filter">
        <v-card
          class="mx-auto"
          width="75%"
          color="#c9e0ec"
          elevation="3"
          style="border-radius: 10px"
        >
          <h2 class="text-h3" style="text-align: center">
            Welcome to BMW Performance Horse Database
          </h2>
          <p class="mt-8" style="text-align: center">
            BMW Quarter Horses breeds and raises prospects for the reining and
            reined cowhorse disciplines with a focus on pedigree, conformation,
            a good mind, and soundness. Click
            <a href="about" style="color: blue">here</a>
            for more information.
          </p>
          <br />

          <v-img
            width="600"
            src="../client/src/assets/BMWPHD.png"
            class="center"
            style="border-radius: 20px"
          />
          <br />
        </v-card>
      </section>
    </v-sheet>
  </v-main>
</template>

<script>
import { compileScript } from "@vue/compiler-sfc";
import axios from "axios";
export default {
  name: "Home",
  data: () => ({}),

  computed: {},

  methods: {
    goToResult() {
      this.$router.push("/result");
    },
  },
};
</script>

<style setup>
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 50%;
}
</style>

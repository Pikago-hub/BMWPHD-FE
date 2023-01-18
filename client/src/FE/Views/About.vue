<template>

    <v-main>

      <v-sheet class="py-16">
        <section id="filter">
          <v-container>
            <v-row justify="space-between">
              <v-col cols="auto">
                <v-responsive width="700">
                  <h2 class="text-h4">
                    BMW Performance Horse Database is sponsored by BMW Quarter Horses
                  </h2>

                  <p class="mt-8">
                    BMW Quarter Horses breeds and raises prospects for the reining and reined cowhorse
                    disciplines with a
                    focus on pedigree, conformation, a good mind, and soundness. They believe in mare power and
                    always have a range of prospects available.
                    BMW Quarter Horses has tailored their breeding program to the western performance
                    disciplines of reining (NRHA) and reined cowhorse (NRCHA).
                    The team is made up of Trainers, Reproduction and Foal Care, Vets, Sale Fitting, and
                    Photographers.
                  </p>

                  <p class="mt-8">
                    BMWPHD can be contacted through the following:
                  </p>
                
                  <p>
                    Phone: 
                    <v-tooltip text="Copy to Clipboard" >
                      <template v-slot:activator="{ props }">
                      <a v-bind="props" id="phone" @click="copyText()" href="#">(940) 357-1998</a>
                    </template>
                    </v-tooltip>
                  </p>
                 
            
                  <p>
                    Email:
                    <a :href="`mailto:bmw@cedartopcapital.com`">
                      bmw@cedartopcapital.com
                    </a>
                  </p>


                  <p class="mt-8">
                    More information can be found on their facebook page through the link below:
                  </p>

                  <v-btn class="mt-6" href="https://www.facebook.com/BMWqh/" target="_blank" rel="noopener noreferrer"
                    color="#c9e0ec">
                    Facebook Homepage
                  </v-btn>
                </v-responsive>
              </v-col>

              <v-img max-width="600" src="../client/src/assets/BMWPHD.png" />
            </v-row>
          </v-container>
        </section>
      </v-sheet>
    </v-main>

</template>
  
<script>

export default {
  name: 'About',
  data: () => ({
  }),

  mounted() {},

  computed: {},

  methods: {
    copyText() {
      var copyText = document.getElementById("phone").textContent;
      navigator.clipboard.writeText(copyText);
    }
  }
}
</script>

<style>

.v-tooltip__content {
  pointer-events: initial;
} 

a:link, a:visited {
    color: black;
}

</style>
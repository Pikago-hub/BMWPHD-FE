<template>
  <v-app>

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
                      <a v-bind="props" id="phone" @click="copyText()" :href="`tel:9403571998`">
                        (940) 357-1998
                      </a>
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

    <v-footer absolute inset app height="60" width="auto" color="#c9e0ec">
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            <strong>{{ new Date().getFullYear() }} — BMWPHD</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>
  
<script>
import { useRouter } from 'vue-router'
const router = useRouter()

export default {
  name: 'About',
  data: () => ({
    drawer: false,
    group: null,
    searchTerm: "",
    categories: [
      "Name",
      "sire",
      "dam",
      "dam sire",
      "2nd dam",
      "lte",
      "pe",
      "show",
      "class",
      "level",
      "open vs non pro",
      "age",
      "place",
      "money",
      "breeder",
      "owner",
      "rider",
      "draw",
      "back number",
      "on dirt",
      "finalist",
      "maneuver scores",
      "notes",
      "nrha",
      "date of show/class",
      "schooling"
    ],
    categoriesCopy: [],
    selectedCategories: []
  }),

  mounted() {
    this.categoriesCopy = [...this.categories];
  },

  computed: {},

  methods: {

    copyText() {
      var copyText = document.getElementById("phone").textContent;
      navigator.clipboard.writeText(copyText);
      console.log(copyText);
    },

    searchCategories(e) {
      if (!this.searchTerm) {
        this.categories = this.categoriesCopy;
      }

      this.categories = this.categoriesCopy.filter((category) => {
        return category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    },
    goToResult() {
      this.$router.push('/result');
    },
    onHome() {
      this.$router.push('/home');
    },
    onManage() {
      this.$router.push('/home');
    },
    onHistory() {
      this.$router.push('/history');
    },
    onLogin() {
      this.$router.push('/login');
    },
    onAbout() {
      this.$router.push('/about');
    },
  }
}
</script>

<style>
.v-tooltip__content {
  pointer-events: initial;
} 
</style>
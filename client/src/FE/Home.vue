<template>
  <v-app>
    <!-- <div> -->
      <v-app-bar
        color="blue accent-4"
        dense
        dark
      >
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>BMWPHD</v-toolbar-title>
      
      <v-spacer></v-spacer>


      <v-tooltip text="Go Home" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon @click="onHome" v-bind="props">
            <v-icon>mdi-home-outline</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
      
      <v-tooltip text="Login" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn icon @click="onLogin" v-bind="props">
            <v-icon>mdi-login-variant</v-icon>
          </v-btn>
        </template>
      </v-tooltip>
      
        <v-menu leftbottom>
          <template v-slot:activator="{ on, attrs }">
            <v-btn icon v-bind="attrs" v-on="on">
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>
        </v-menu>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer" absolute temporary>

          <v-list nav>
          <v-list-item prepend-icon="mdi-home" title="Home" link @click="onHome"></v-list-item>
          <v-list-item prepend-icon="mdi-account" title="Manage" link @click="onManage"></v-list-item>
          <v-list-item prepend-icon="mdi-file-document" title="History" link @click="onHistory"></v-list-item>
          <v-list-item prepend-icon="mdi-horseshoe" title="About Us" link @click="onAbout"></v-list-item>
          </v-list>
      
      </v-navigation-drawer>

    <!-- </div> -->

    <v-main>
      <v-card
        class="mx-auto my-16"
        flat
        width="800px"
        height="80px"
      >
    <v-toolbar
      dense
    >
      <v-text-field
        hide-details
        single-line
      ></v-text-field>

      <v-btn icon @click="onSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>

  <div id="app">
      <v-container>
        <v-select v-model="selectedCategories" :items="categories" attach label="Search by Categories" multiple>
          <template v-slot:prepend-item>
            <v-list-item>
              <v-list-item-content>
                <v-text-field v-model="searchTerm" placeholder="Search" @input="searchCategories"></v-text-field>
              </v-list-item-content>
            </v-list-item>
            <v-divider class="mt-2"></v-divider>
          </template>
        </v-select>
      </v-container>
  </div>

        <v-sheet class="py-16">
          <section id="filter">
            <v-container>
              <v-row justify="space-between">
                <v-col cols="auto">
                  <v-responsive width="350">
                    <h2 class="text-h4">
                      BMW Performance Horse Database
                    </h2>

                    <p class="text-success mt-3">
                      (940) 357-1998
                    </p>

                    <p class="mt-8">
                      BMW Quarter Horses breeds and raises prospects for the reining and reined cowhorse disciplines with a focus on pedigree, conformation, a good mind, and soundness. 
                    </p>

                    <p class="mt-8">
                      We believe in mare power and always have a range of prospects available
                    </p>

                    <v-btn
                      class="mt-6"
                      href="https://www.facebook.com/BMWqh/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Facebook Homepage
                    </v-btn>
                  </v-responsive>
                </v-col>

                <v-img
                  max-width="600"
                  src="../client/src/assets/BMWPHD.png"
                />
              </v-row>
            </v-container>
          </section>
        </v-sheet>
      </v-main> 

    <v-footer absolute inset app height="100" width="auto" class="bg-grey-lighten-1" >
      <v-container>
        <v-row justify="center" no-gutters >
          <v-col class="text-center mt-4" cols="12">
            <strong>{{ new Date().getFullYear() }} — BMWPHD</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
  </v-app>
</template>

<script>
  import {useRouter} from 'vue-router'
  const router = useRouter()


  export default { 
    name: 'App',
    data: () => ({
      drawer: false,
      group: null,
      searchTerm: "",
      categories: [
        "Name",
        "Sire",
        "Dam",
        "Dam Sire",
        "2nd Dam",
        "LTE",
        "PE",
        "Show",
        "Class",
        "Level",
        "Open vs Non Pro",
        "Age",
        "Place",
        "Money",
        "Breeder",
        "Owner",
        "Rider",
        "Draw",
        "Back Number",
        "On Dirt",
        "Finalist",
        "Maneuver Scores",
        "Notes",
        "NRHA",
        "Date of Show/Class",
        "Schooling"
      ],
      categoriesCopy: [],
      selectedCategories: []
    }),

  mounted() {
    this.categoriesCopy = [...this.categories];
  },

  computed: {},

  methods: {
    searchCategories(e) {
      if (!this.searchTerm) {
        this.categories = this.categoriesCopy;
      }

      this.categories = this.categoriesCopy.filter((category) => {
        return category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
    },
    onSearch(){
        this.$router.push('/result');
    }, 
    onHome(){
        this.$router.push('/home');
    }, 
    onManage(){
        this.$router.push('/home');
    }, 
    onHistory(){
        this.$router.push('/history');
    }, 
    onLogin(){
        this.$router.push('/login');
    }, 
    onAbout(){
        this.$router.push('/about');
    }, 
  }
}
</script>

<style setup>
.v-tooltip__content {
  pointer-events: initial;
}
</style>
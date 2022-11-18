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
       placeholder="Enter Horse Name"
       class="search-bar"
       v-model="searchQuery"
     ></v-text-field>

      <v-btn icon @click="onSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-toolbar>
  </v-card>

  <div id="app">
    <v-navigation-drawer app clipped >
    <v-list >
      <v-subheader>Additional Search Categories</v-subheader>
        <v-list-item-group multiple active-class="">
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-content v-for="item in listItems">
                <v-text-field v-if="item.hasInput" :label="`Enter ${item.category}`"></v-text-field>
              </v-list-item-content>
              <v-list-item-action v-for="item in listItems">
                <v-checkbox v-model="item.hasInput" :input-value="active" :label="item.category"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>



      <!-- <v-container>
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
      </v-container> -->
  </div>

        <v-sheet class="py-16">
          <section id="filter">
            <v-container>
              <v-row justify="space-between">
                <!-- <v-col cols="auto"> -->
                  <v-responsive width="350">
                    <h2 class="text-h4">
                      Welcome to BMW Performance Horse Database
                    </h2>

                    <p class="mt-8">
                      BMW Quarter Horses breeds and raises prospects for the reining and reined cowhorse disciplines with a focus on pedigree, conformation, a good mind, and soundness. 
                      For more information click on the button below and you will be directed to our About page. 
                    </p>

                    <!-- <p class="mt-8">
                      For more information click on the button below and you will be directed to our About page. 
                    </p> -->

                    <v-btn
                      @click="onAbout"
                    >
                      About
                    </v-btn>
                  </v-responsive>
                <!-- </v-col> -->

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
      listItems: [
        {
          category: "Sire",
          checked: false,
          hasInput: false
        },
        {
          category: "Dam",
          checked: false,
          hasInput: false
        },
        {
          category: "Dam Sire",
          checked: false,
          hasInput: false
        },
        {
          category: "2nd Dam",
          checked: false,
          hasInput: false
        },
        {
          category: "Maneuver Scores",
          checked: false,
          hasInput: false
        },
        {
          category: "LTE",
          checked: false,
          hasInput: false
        },
        {
          category: "PE",
          checked: false,
          hasInput: false
        },
        {
          category: "Show",
          checked: false,
          hasInput: false
        },
        {
          category: "Class",
          checked: false,
          hasInput: false
        },
        {
          category: "Level",
          checked: false,
          hasInput: false
        },
        {
          category: "Open vs Non Pro",
          checked: false,
          hasInput: false
        },
        {
          category: "Age",
          checked: false,
          hasInput: false
        },
        {
          category: "Place",
          checked: false,
          hasInput: false
        },
        {
          category: "Money",
          checked: false,
          hasInput: false
        },
        {
          category: "Breeder",
          checked: false,
          hasInput: false
        },
        {
          category: "Owner",
          checked: false,
          hasInput: false
        },
        {
          category: "Rider",
          checked: false,
          hasInput: false
        },
        {
          category: "Draw",
          checked: false,
          hasInput: false
        },
        {
          category: "Back Number",
          checked: false,
          hasInput: false
        },
        {
          category: "On Dirt",
          checked: false,
          hasInput: false
        },
        {
          category: "Finalist",
          checked: false,
          hasInput: false
        },
        {
          category: "Notes",
          checked: false,
          hasInput: false
        },
        {
          category: "NRHA",
          checked: false,
          hasInput: false
        },
        {
          category: "Date of Show/Class",
          checked: false,
          hasInput: false
        },
        {
          category: "Schooling",
          checked: false,
          hasInput: false
        }
      ],
      // categories: [
      //   "Sire",
      //   "Dam",
      //   "Dam Sire",
      //   "2nd Dam",
      //   "LTE",
      //   "PE",
      //   "Show",
      //   "Class",
      //   "Level",
      //   "Open vs Non Pro",
      //   "Age",
      //   "Place",
      //   "Money",
      //   "Breeder",
      //   "Owner",
      //   "Rider",
      //   "Draw",
      //   "Back Number",
      //   "On Dirt",
      //   "Finalist",
      //   "Maneuver Scores",
      //   "Notes",
      //   "NRHA",
      //   "Date of Show/Class",
      //   "Schooling"
      // ],
      categoriesCopy: [],
      selectedCategories: []
    }),

  // mounted() {
  //   this.categoriesCopy = [...this.categories];
  // },

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
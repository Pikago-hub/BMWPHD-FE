<template>
  <v-app>
    <!-- <div> -->
      <v-app-bar color="blue accent-4" dense dark>
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
    searchCategories(e) {
      if (!this.searchTerm) {
        this.categories = this.categoriesCopy;
      }

      this.categories = this.categoriesCopy.filter((category) => {
        return category.toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1;
      });
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
    onLogin() {
      this.$router.push('/login');
    }, 
    onAbout() {
          this.$router.push('/about');
      },
  }
}
</script>
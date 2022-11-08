<template>
<!-- App.vue -->

<v-app>

 <v-app-bar color="blue accent-4" dense dark clipped-left>
   <v-btn icon @click="onHome">
     <v-icon>mdi-arrow-left</v-icon>
   </v-btn>
   <v-toolbar-title>Homepage</v-toolbar-title>
   <v-spacer></v-spacer>
 
   <v-btn icon @click="onHome">
     <v-icon>mdi-home-outline</v-icon>
   </v-btn>
 
   <v-menu leftbottom>
     <template v-slot:activator="{ on, attrs }">
       <v-btn icon v-bind="attrs" v-on="on">
         <v-icon>mdi-dots-vertical</v-icon>
       </v-btn>
     </template>
   </v-menu>
 </v-app-bar>

 <v-navigation-drawer 
   app
   clipped
   >
 </v-navigation-drawer>

 <!-- Sizes your content based upon application components -->
 <v-main>

   <v-card
       class="mx-auto my-10"
       flat
       width="400px"
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
   <v-container fluid>

     <!-- If using vue-router -->
     <router-view></router-view>
   </v-container>
 </v-main>

 <v-footer absolute inset app height="100" width="auto" class="bg-grey-lighten-1">
   <v-container>
     <v-row justify="center" no-gutters >
       <v-btn
         v-for="link in links"
         :key="link"
         color="white"
         variant="text"
         class="mx-2"
         rounded="xl"
       >
         {{ link }}
       </v-btn>
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

  const onSearch = () =>{
      router.push({path: "result"})
    }

  export default { name: 'App',
  data: () => ({

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
    }
  }
}
</script>
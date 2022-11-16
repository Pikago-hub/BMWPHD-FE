<template>
  <!-- App.vue -->
  
  <v-app>

 <v-app-bar
       color="blue accent-4"
       dense
       dark
       clipped-left
     >
     <v-btn icon @click="onReturnHome">
       <v-icon>mdi-arrow-left</v-icon>
     </v-btn>
     <v-toolbar-title>Homepage</v-toolbar-title>
     <v-spacer></v-spacer>
  
     <v-menu leftbottom>
       <template v-slot:activator="{ on, attrs }">
         <v-btn
           icon
           v-bind="attrs"
           v-on="on"
         >
         <v-icon>mdi-dots-vertical</v-icon>
         </v-btn>
       </template>
     </v-menu>
     </v-app-bar>

 <v-navigation-drawer app clipped >
   <!-- -->
     <v-list
        flat
        subheader
        three-line
      >
      <v-subheader>Search Categories</v-subheader>
      
        <v-list-item-group
          multiple
          active-class=""
        >

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
  
 <v-main>
  
   <v-card
       class="mx-auto my-10"
       flat
       width="700px"
       height="80px"
     >
   <v-toolbar dense>
     <v-text-field
       hide-details
       single-line
       placeholder="Enter Search Term"
       class="search-bar"
       type="text"
       @input="handleInput"
     ></v-text-field>
     <v-btn icon @click="onSearch">
       <v-icon>mdi-magnify</v-icon>
     </v-btn>
   </v-toolbar>
 </v-card>
  
 <v-container fluid style="height: 100vh;">
  <v-table
    fixed-header
    height="800px"
  >
    <thead>
      <tr>
        <th class="text-left" scope>
         ID
       </th>
        <th class="text-left" scope>
         Name
       </th>
       <th class="text-left" scope>
         Sire 1
       </th>
       <th class="text-left" scope>
         Dam 1
       </th>
       <th class="text-left" scope>
         Sire 2
       </th>
       <th class="text-left" scope>
         Dam 2
       </th>
       <th class="text-left" scope>
         Maneuver Scores
       </th>
      </tr>
    </thead>
    <tbody>
     <tr
       class="table-row"
       v-for="item in horseSearch"
       :key="item.Name"
     >       
       <td>{{ item.id}}</td>
       <td>{{ item.Name}}</td>
       <td>{{ item.Sire}}</td>
       <td>{{ item.Dam}}</td>
       <td>{{ item.Sire2}}</td>
       <td>{{ item.Dam2}}</td>
       <td>{{ item.Maneuver}}</td>
     </tr>
   </tbody>
  </v-table>
 </v-container>
  
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
  import axios from "axios";

  export default { name: 'App',
  props: ["itemDetails"],
  data(){
    return {
      newItem: [],
      selected: ['Name'],
      listItems: [
        {
          category: "Name",
          checked: true,
          hasInput: true
        },
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
      horseSearch:[],
      searchTerm: "",
    categoriesCopy: [],
    selectedCategories: [],
    }
},

/*   async created(){
    try{
      const res = await axios.get('http://localhost:3000/horses')
      this.horseSearch = res.data;
    } catch (error){
      console.log(error);
    }
  }, */

  computed: {

  },

  mounted() {
  },

  methods: {
    async handleInput(e){
      const Name = e.target.value;
      const res = await this.searchForTimeout(Name);
      this.horseSearch = res.data;
    },

    async searchForTimeout(Name){
      return new Promise((resolve, reject) => {
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          try{
            const res = axios.get('http://localhost:3000/horses', {
              params: {Name : Name},
            });
            resolve(res);
          } catch(e){
            reject(e);
          }
        })
      })
    },

    onReturnHome(){
        this.$router.push('/home');
    },

    onSire() {
      let checkBox = document.getElementById("Sire");
      console.log(checkBox);
      let text = document.getElementById("SireInput");
      if (checkBox.selected == true) {
        text.style.display = "block";
      }
      else {
        text.style.display = "none";
      }
    },

    onSearch(){

    }

/*     onSearch: function () {
      let searchTerm = (this.search || "").toLowerCase();
      return this.horses.filter(function (item) {
        let name = (item.Name || "").toLowerCase();
        let sire = (item.Sire || "").toLowerCase();
        return (
          name.indexOf(searchTerm) > -1 || sire.indexOf(searchTerm) > -1
        );
      });
    }, */
  },
}
</script>
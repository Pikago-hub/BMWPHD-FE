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
          v-model="settings"
          multiple
          active-class=""
        >

        <!-- <v-list-item prepend-icon="mdi-home" title="Home" link @click="onHome"></v-list-item> -->

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action v-for="item in listItems">
                <v-checkbox @click="bySire()" v-model="item.checked" :input-value="active" v-bind:id="item.id" :label="(( item.category )) "></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
  
          <!-- <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Sire`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Dam`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Dam Sire`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`2nd Dam`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`LTE`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`PE`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Show`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Class`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Level`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Open VS Non Pro`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Age`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Place`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Money`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Breeder`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Owner`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>
          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Rider`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item>

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action>
                <v-checkbox :input-value="active" :label="`Dam`"></v-checkbox>
              </v-list-item-action>
            </template>
          </v-list-item> -->

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
   <v-toolbar
     dense
   >
     <v-text-field
       hide-details
       single-line
       label="Enter Horse Name"
     ></v-text-field>

     <v-text-field
       hide-details
       single-line
       id="Sire"
       label="Enter Sire Name"
       style="display:none"
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
       v-for="item of horses"
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
  data(){
    return {
      horses:[],
      searchTerm: "",
      listItems: [
        {
          id: 1,
          category: "Name",
          checked: true
        },
        {
          id: 2,
          category: "Sire",
          checked: false
        },
        {
          id: 3,
          category: "Dam",
          checked: false
        },
        {
          id: 4,
          category: "Dam Sire",
          checked: false
        },
        {
          id: 5,
          category: "2nd Dam",
          checked: false
        },
        {
          id: 6,
          category: "Maneuver Scores",
          checked: false
        },
        // {
        //   category: "LTE",
        //   checked: false
        // },
        // {
        //   category: "PE",
        //   checked: false
        // },
        // {
        //   category: "Show",
        //   checked: false
        // },
        // {
        //   category: "Class",
        //   checked: false
        // },
        // {
        //   category: "Level",
        //   checked: false
        // },
        // {
        //   category: "Open vs Non Pro",
        //   checked: false
        // },
        // {
        //   category: "Age",
        //   checked: false
        // },
        // {
        //   category: "Place",
        //   checked: false
        // },
        // {
        //   category: "Money",
        //   checked: false
        // },
        // {
        //   category: "Breeder",
        //   checked: false
        // },
        // {
        //   category: "Owner",
        //   checked: false
        // },
        // {
        //   category: "Rider",
        //   checked: false
        // },
        // {
        //   category: "Draw",
        //   checked: false
        // },
        // {
        //   category: "Back Number",
        //   checked: false
        // },
        // {
        //   category: "On Dirt",
        //   checked: false
        // },
        // {
        //   category: "Finalist",
        //   checked: false
        // },
        // {
        //   category: "Notes",
        //   checked: false
        // },
        // {
        //   category: "NRHA",
        //   checked: false
        // },
        // {
        //   category: "Date of Show/Class",
        //   checked: false
        // },
        // {
        //   category: "Schooling",
        //   checked: false
        // }
      ],
    categoriesCopy: [],
    selectedCategories: [],
    }
},

  async created(){
    try{
      const res = await axios.get('http://localhost:3000/horses')
      this.horses = res.data;
    } catch (error){
      console.log(error);
    }
  },

  computed: {},

  methods: {
    onReturnHome(){
        this.$router.push('/home');
    },

    bySire() {
      var checkBox = document.getElementById("2");
      var text = document.getElementById("Sire");
      if (checkBox.checked == true) {
        text.style.display = "block";
      } else {
        text.style.display = "none";
      }
}



  },


}
</script>
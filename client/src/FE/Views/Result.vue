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
  
        <v-list-item-group
          v-model="settings"
          multiple
          active-class=""
        >

        <!-- <v-list-item prepend-icon="mdi-home" title="Home" link @click="onHome"></v-list-item> -->

          <v-list-item>
            <template v-slot:default="{ active }">
              <v-list-item-action v-for="item in items">
                <v-checkbox :input-value="active" :label="(( item.category ))"></v-checkbox>
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
  
 <v-container fluid style="height: 100vh;">
   <v-table>
   <thead>
     <tr>
       <th class="text-left">
         Name
       </th>
       <th class="text-left">
         Calories
       </th>
     </tr>
   </thead>
   <tbody>
     <tr
       v-for="item in desserts"
       :key="item.name"
     >
       <td>{{ item.name }}</td>
       <td>{{ item.calories }}</td>
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
  import dataTablejerry from './components/datatable.vue'
  const onSearch = () =>{
      router.push({path: "result"})
    }
  export default { name: 'App',
  data: () => ({
  
    group: null,
    searchTerm: "",
    items: [
      {category: "Name"},
      {category: "sire"},
      {category: "dam"},
      {category: "dam sire"},
      {category: "2nd dam"},
      {category: "lte"},
      {category: "pe"},
      {category: "show"},
      {category: "class"},
      {category: "level"},
      {category: "open vs non pro"},
      {category: "age"},
      {category: "place"},
      {category: "money"},
      {category: "breeder"},
      {category: "owner"},
      {category: "rider"},
      {category: "draw"},
      {category: "back number"},
      {category: "on dirt"},
      {category: "finalist"},
      {category: "maneuver scores"},
      {category: "notes"},
      {category: "nrha"},
      {category: "date of show/class"},
      {category: "schooling"}
    ],
    categoriesCopy: [],
    selectedCategories: [],
    desserts: [
          {
            name: 'Frozen Yogurt',
            calories: 159,
          },
          {
            name: 'Ice cream sandwich',
            calories: 237,
          },
          {
            name: 'Eclair',
            calories: 262,
          },
          {
            name: 'Cupcake',
            calories: 305,
          },
          {
            name: 'Gingerbread',
            calories: 356,
          },
          {
            name: 'Jelly bean',
            calories: 375,
          },
          {
            name: 'Lollipop',
            calories: 392,
          },
          {
            name: 'Honeycomb',
            calories: 408,
          },
          {
            name: 'Donut',
            calories: 452,
          },
          {
            name: 'KitKat',
            calories: 518,
          },
        ],
  }),
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
    onReturnHome(){
        this.$router.push('/home');
    }
  }
}
</script>
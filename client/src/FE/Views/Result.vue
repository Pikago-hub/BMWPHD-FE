 <template>
<!-- App.vue -->

<v-app>
  <v-navigation-drawer app>
    <!-- -->
  </v-navigation-drawer>

  <v-app-bar
        color="blue accent-4"
        dense
        dark
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
  import dataTablejerry from './components/datatable.vue'

  const onSearch = () =>{
      router.push({path: "result"})
    }

  export default { name: 'App',
  data: () => ({
    group: null,
      links: [
        'Home',
        'About Us',
        'Team',
        'Services',
        'Blog',
        'Contact Us',
      ],
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

    onReturnHome(){
        this.$router.push('/home');
    }
  }
}
</script>
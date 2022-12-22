<template>
  <v-app>
    <v-app-bar app image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg">
      <v-app-bar-nav-icon variant="icon" @click="drawer = !drawer"></v-app-bar-nav-icon>
      <v-toolbar-title>
        <v-btn variant="text" @click="onHome">BMWPHD</v-btn>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-tooltip text="Login" location="bottom">
        <template v-slot:activator="{ props }">
          <v-btn variant="icon" @click="onLogin" v-bind="props">
            <v-icon>mdi-login-variant</v-icon>
          </v-btn>
        </template>
      </v-tooltip>

      <v-menu leftbottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn variant="icon" v-bind="attrs" v-on="on">
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
      </v-menu>
    </v-app-bar>


    <v-navigation-drawer v-model="drawer" image="https://cdn.vuetifyjs.com/images/backgrounds/bg-2.jpg" permanent
      theme="dark">
      <v-list nav>
        <v-list-item prepend-icon="mdi-home" title="Home" link @click="onHome"></v-list-item>
        <v-list-item prepend-icon="mdi-magnify" title="Search" link @click="goToResult"></v-list-item>
        <v-list-item prepend-icon="mdi-account" title="Manage" link @click="onManage"></v-list-item>
        <v-list-item prepend-icon="mdi-file-document" title="History" link @click="onHistory"></v-list-item>
        <v-list-item prepend-icon="mdi-horseshoe" title="About Us" link @click="onAbout"></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-navigation-drawer color="#c9e0ec" v-model="categoryDrawer" permanent>
      <v-list flat subheader three-line>

        <v-banner height="50" lines="one" style="background-color: #c9e0ec;">
          <v-banner-text class="text-h6">
            Categories
          </v-banner-text>
        </v-banner>
        <v-list-item-group multiple active-class="">
          <v-list-item width="85%" margin-bottom="10px">
            <template v-slot:default="{ active }">
              <v-list-item-content v-for="(item, index) in listItems" :key="index" :label="item.category">
                <v-text-field color="#12518e" variant="underlined" v-if="item.hasInput"
                  :label="`Enter ${item.category}`" v-model="inputValue[index]"
                  @keyup.enter="onCategSearch"></v-text-field>
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
      <v-card class="mx-auto my-10" max-width="744" varaint="outlined" style="border-radius: 10px;">
        <v-toolbar color="#c9e0ec">
          <v-text-field label="Enter Search Term" placeholder="Horse Name" variant="regular" ref="getValue"
            @keyup.enter="onSearch">
          </v-text-field>
          <v-btn variant="icon" @click="onSearch">
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
          <v-btn color="#c9e0ec" @click="onFindAll">Find All Horses</v-btn>
        </v-toolbar>
      </v-card>

      <v-card elevation="2" class="mx-auto" max-width="1000" max-height="650px" color="#c9e0ec">
        <v-container fluid style="height: 100vh;">
          <v-table fixed-header height="600px" theme="dark">
            <thead>
              <tr>
                <th class="text-left" scope>
                  Name
                </th>
                <th class="text-left" scope>
                  Sire
                </th>
                <th class="text-left" scope>
                  Dam
                </th>
                <th class="text-left" scope>
                  Dam Sire
                </th>
                <th class="text-left" scope>
                  2nd Dam
                </th>
                <th class="text-left" scope>
                  Maneuver Scores
                </th>
              </tr>
            </thead>

            <tbody>
              <tr class="table-row" v-for="horse of horseSearch" :key="horse.id">
                <td>{{ horse.name }}</td>
                <td>{{ horse.sire1 }}</td>
                <td>{{ horse.dam1 }}</td>
                <td>{{ horse.sire2 }}</td>
                <td>{{ horse.dam2 }}</td>
                <td>{{ horse.Maneuver }}</td>
              </tr>
            </tbody>
          </v-table>
        </v-container>
      </v-card>

    </v-main>
    <v-container>
    </v-container>
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
import axios from "axios";

export default {
  name: 'App',
  props: ["itemDetails"],
  data: () => {
    return {
      drawer: false,
      categoryDrawer: true,
      group: null,
      horseSearch: [],
      newItem: [],
      inputValue: [],
      selected: ['Name'],
      value: '',
      listItems: [
        {
          category: "Name",
          checked: true,
          hasInput: true,
        },
        {
          category: "Sire",
          checked: false,
          hasInput: false,
        },
        {
          category: "Dam",
          checked: false,
          hasInput: false,
        },
        {
          category: "Dam Sire",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "2nd Dam",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Maneuver Scores",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "LTE",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "PE",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Show",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Class",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Level",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Open vs Non Pro",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Age",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Place",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Money",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Breeder",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Owner",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Rider",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Draw",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Back Number",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "On Dirt",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Finalist",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Notes",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "NRHA",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Date of Show/Class",
          checked: false,
          hasInput: false,
          inputValue: '',
        },
        {
          category: "Schooling",
          checked: false,
          hasInput: false,
          inputValue: '',
        }
      ],
    }
  },

  computed: {
  },

  mounted() {

  },

  methods: {
    onReturnHome() {
      this.$router.push('/home');
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

    async onFindAll() {
      this.$router.push('/result')
      try {
        const res = await axios.get('https://bmwphd-be.herokuapp.com/horses', {
        }).then(res => (
          this.horseSearch = res.data.data
        ))
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },


    onSearch() {
      const value = this.$refs.getValue.value.toUpperCase();
      console.log(this.$refs.getValue.value);
      axios({
        url: 'https://bmwphd-be.herokuapp.com/horses/search',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          name: value,
        }
      }).then((res) => {
        this.horseSearch = res.data.data
        console.log(res)
      }, (error) => {
        console.log(error);
      });
    },

    onCategSearch() {
      // if (this.inputValue[0] != null){
      //   this.inputValue[0] = this.inputValue[0].toUpperCase()
      // }
      // if(this.inputValue[1] != null){
      //   this.inputValue[1] = this.inputValue[1].toUpperCase()
      // }
      // if(this.inputValue[2] != null){
      //   this.inputValue[2] = this.inputValue[2].toUpperCase()
      // }
      // if(this.inputValue[3] != null){
      //   this.inputValue[3] = this.inputValue[3].toUpperCase()
      // }
      // if(this.inputValue[4] != null){
      //   this.inputValue[4] = this.inputValue[4].toUpperCase()
      // }

      let i = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, , 22, 23, 24, 25, 26]
      for (i = 0; i < this.inputValue.length; i++) {
        if (this.inputValue[i] != null) {
          this.inputValue[i] = this.inputValue[i].toUpperCase()
        }
      }
      axios({
        url: 'https://bmwphd-be.herokuapp.com/horses/search',
        method: 'post',
        headers: {
          'Content-Type': 'application/json'
        },
        data: {
          name: this.inputValue[0],
          sire1: this.inputValue[1],
          dam1: this.inputValue[2],
          sire2: this.inputValue[3],
          dam2: this.inputValue[4],
        }
      }).then((res) => {
        this.horseSearch = res.data.data
        console.log(res)
      }, (error) => {
        console.log(error);
      });
    }
  },

}
</script>

<style setup>
.v-tooltip__content {
  pointer-events: initial;
}

.upperCase {
  text-transform: uppercase;
}
</style>
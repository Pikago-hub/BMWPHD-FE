<template>
  <v-navigation-drawer
    location="right"
    color="#c9e0ec"
    v-model="categoryDrawer"
  >
    <v-list flat subheader three-line>
      <v-banner height="65" lines="one" style="background-color: #c9e0ec">
        <v-banner-text class="text-h6"> Categories </v-banner-text>
      </v-banner>
      <v-list-item-group multiple active-class="">
        <v-list-item width="85%" margin-bottom="10px">
          <template v-slot:default="{ active }">
            <v-list-item-content
              v-for="(item, index) in listItems"
              :key="index"
              :label="item.category"
            >
              <v-text-field
                color="#12518e"
                variant="underlined"
                hint="key word search"
                prepend-icon="mdi-magnify"
                v-if="item.hasInput"
                :label="`Enter ${item.category}`"
                v-model="inputValue[index]"
                @keyup.enter="onCategSearch"
              ></v-text-field>
            </v-list-item-content>
            <v-list-item-action v-for="item in listItems">
              <v-checkbox
                v-model="item.hasInput"
                :input-value="active"
                :label="item.category"
              ></v-checkbox>
            </v-list-item-action>
          </template>
        </v-list-item>
      </v-list-item-group>
    </v-list>
  </v-navigation-drawer>

  <v-main>
    <v-card
      class="mx-auto my-10"
      max-width="744"
      varaint="outlined"
      style="border-radius: 10px"
    >
      <v-toolbar color="#c9e0ec">
        <v-text-field
          placeholder="Enter Horse Name to Start Searching"
          variant="plain"
          ref="getValue"
          @keyup.enter="onSearch"
        >
        </v-text-field>
        <v-btn variant="tonal" rounded @click="onSearch">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn variant="tonal" color="#212121" @click="onFindAll"
          >Find All Horses</v-btn
        >
        <v-btn
          variant="tonal"
          prepend-icon="mdi-clipboard-text-search-outline"
          rounded
          color="#0D47A1"
          @click="categoryDrawer = !categoryDrawer"
          >CategorySearch</v-btn
        >
      </v-toolbar>
    </v-card>

    <v-card
      elevation="2"
      class="mx-auto"
      max-width="1000"
      height="650px"
      color="#c9e0ec"
    >
      <v-container fluid style="height: 60vh">
        <v-table
          fixed-header="true"
          height="600px"
          theme="dark"
          density="comfortable"
        >
          <thead>
            <tr>
              <th class="text-left" scope>Name</th>
              <th class="text-left" scope>Sire</th>
              <th class="text-left" scope>Dam</th>
              <th class="text-left" scope>Dam Sire</th>
              <th class="text-left" scope>2nd Dam</th>
              <th class="text-left" scope>Maneuver Scores</th>
              <th class="text-left" scope>LTE</th>
              <th class="text-left" scope>PE</th>
              <th class="text-left" scope>Show</th>
              <th class="text-left" scope>Class</th>
              <th class="text-left" scope>Level</th>
              <th class="text-left" scope>Open vs Non Pro</th>
              <th class="text-left" scope>Age</th>
              <th class="text-left" scope>Place</th>
              <th class="text-left" scope>Money</th>
              <th class="text-left" scope>Breeder</th>
              <th class="text-left" scope>Owner</th>
              <th class="text-left" scope>Rider</th>
              <th class="text-left" scope>Draw</th>
              <th class="text-left" scope>Back Number</th>
              <th class="text-left" scope>On Dirt</th>
              <th class="text-left" scope>Finalist</th>
              <th class="text-left" scope>Notes</th>
              <th class="text-left" scope>NRHA</th>
              <th class="text-left" scope>Date of Show/Class</th>
              <th class="text-left" scope>Schooling</th>
            </tr>
          </thead>

          <tbody>
            <tr class="table-row" v-for="horse of horseSearch" :key="horse.id">
              <td>{{ horse.name }}</td>
              <td>{{ horse.sire1 }}</td>
              <td>{{ horse.dam1 }}</td>
              <td>{{ horse.sire2 }}</td>
              <td>{{ horse.dam2 }}</td>
              <td>{{ horse.maneuver_score }}</td>
              <td>{{ horse.lte }}</td>
              <td>{{ horse.pe }}</td>
              <td>{{ horse.show }}</td>
              <td>{{ horse.class }}</td>
              <td>{{ horse.level }}</td>
              <td>{{ horse.openvsnpro }}</td>
              <td>{{ horse.age }}</td>
              <td>{{ horse.place }}</td>
              <td>{{ horse.money }}</td>
              <td>{{ horse.breeder }}</td>
              <td>{{ horse.owner }}</td>
              <td>{{ horse.rider }}</td>
              <td>{{ horse.draw }}</td>
              <td>{{ horse.back_number }}</td>
              <td>{{ horse.on_dirt }}</td>
              <td>{{ horse.finalist }}</td>
              <td>{{ horse.notes }}</td>
              <td>{{ horse.nrha }}</td>
              <td>{{ horse.date_of_show }}</td>
              <td>{{ horse.schooling }}</td>
            </tr>
          </tbody>
        </v-table>
      </v-container>
    </v-card>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  props: ["itemDetails"],
  data: () => {
    return {
      drawer: false,
      categoryDrawer: false,
      group: null,
      horseSearch: [],
      newItem: [],
      inputValue: [],
      selected: ["Name"],
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
          inputValue: "",
        },
        {
          category: "2nd Dam",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Maneuver Scores",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "LTE",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "PE",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Show",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Class",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Level",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Open vs Non Pro",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Age",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Place",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Money",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Breeder",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Owner",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Rider",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Draw",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Back Number",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "On Dirt",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Finalist",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Notes",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "NRHA",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Date of Show/Class",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
        {
          category: "Schooling",
          checked: false,
          hasInput: false,
          inputValue: "",
        },
      ],
    };
  },

  computed: {},

  mounted() {},

  methods: {
    // async onFindAll() {
    //   this.$router.push("/result");
    //   try {
    //     const res = await axios
    //       .get("http://localhost:3004/data", {})
    //       .then((res) => (this.horseSearch = res.data.data));
    //     console.log(res);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    // onSearch() {
    //   const value = this.$refs.getValue.value.toUpperCase();
    //   console.log(this.$refs.getValue.value);
    //   axios({
    //     url: "https://bmwphd-be.herokuapp.com/horses/search",
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: {
    //       name: value,
    //     },
    //   }).then(
    //     (res) => {
    //       this.horseSearch = res.data.data;
    //       console.log(res);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // },

    // onCategSearch() {
    //   let i = [
    //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    //     20, 21, 22, 23, 24, 25, 26,
    //   ];
    //   for (i = 0; i < this.inputValue.length; i++) {
    //     if (this.inputValue[i] != null) {
    //       this.inputValue[i] = this.inputValue[i].toUpperCase();
    //     }
    //   }
    //   axios({
    //     url: "https://bmwphd-be.herokuapp.com/horses/search",
    //     method: "post",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     data: {
    //       name: this.inputValue[0],
    //       sire1: this.inputValue[1],
    //       dam1: this.inputValue[2],
    //       sire2: this.inputValue[3],
    //       dam2: this.inputValue[4],
    //       maneuver_scores: this.inputValue[5],
    //       lte: this.inputValue[6],
    //       pe: this.inputValue[7],
    //     },
    //   }).then(
    //     (res) => {
    //       this.horseSearch = res.data.data;
    //       console.log(res);
    //     },
    //     (error) => {
    //       console.log(error);
    //     }
    //   );
    // },

    //axios fetch from json server for presentation only. above commentted out code is for production from BE.
    async onFindAll() {
      this.$router.push("/result");
      try {
        const response = await axios.get("http://localhost:3004/data");
        this.horseSearch = response.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },

    async onSearch() {
      const value = this.$refs.getValue.value;
      console.log(this.$refs.getValue.value);
      try {
        const response = await axios.get(
          "http://localhost:3004/data?name=" + value
        );
        this.horseSearch = response.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },

    async onCategSearch() {
      let i = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25,
      ];
      for (i = 0; i < this.inputValue.length; i++) {
        if (this.listItems[i].checked == true) {
          this.inputValue[i] = this.inputValue[i];
        }
      }
      try {
        const response = await axios.get("http://localhost:3004/data", {
          params: {
            name: this.inputValue[0],
            sire1: this.inputValue[1],
            dam1: this.inputValue[2],
            sire2: this.inputValue[3],
            dam2: this.inputValue[4],
            maneuver_scores: this.inputValue[5],
            lte: this.inputValue[6],
            pe: this.inputValue[7],
            show: this.inputValue[8],
            class: this.inputValue[9],
            level: this.inputValue[10],
            openvsnpro: this.inputValue[11],
            age: this.inputValue[12],
            place: this.inputValue[13],
            money: this.inputValue[14],
            breeder: this.inputValue[15],
            owner: this.inputValue[16],
            rider: this.inputValue[17],
            draw: this.inputValue[18],
            back_number: this.inputValue[19],
            on_dirt: this.inputValue[20],
            finalist: this.inputValue[21],
            notes: this.inputValue[22],
            nrha: this.inputValue[23],
            date_of_show_class: this.inputValue[24],
            schooling: this.inputValue[25],
          },
        });
        this.horseSearch = response.data;
        console.log(response);
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style setup>
.v-tooltip__content {
  pointer-events: initial;
}

.upperCase {
  text-transform: uppercase;
}
</style>

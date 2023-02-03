<template>
  <v-main>
    <v-navigation-drawer
        location="right"
        color="#c9e0ec"
        v-model="categoryDrawer"
        v-click-outside="onClickOutsideCD"
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

    <v-navigation-drawer
        location="right"
        color="#c9e0ec"
        v-model="attributesDrawer"
        v-click-outside="onClickOutsideAD"
    >
      <v-list flat subheader three-line>
        <v-banner height="65" lines="one" style="background-color: #c9e0ec">
          <v-banner-text class="text-h6"> Attributes </v-banner-text>
        </v-banner>
        <v-list-item-group multiple active-class="">
          <v-list-item width="85%" margin-bottom="10px">
            <template v-slot:default="{ active }">
              <v-checkbox
                  v-model="selected"
                  label="Name"
                  value="Name"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Sire"
                  value="Sire"
              ></v-checkbox>
              <v-checkbox v-model="selected" label="Dam" value="Dam"></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Foul Date"
                  value="Name"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Owner"
                  value="Owner"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Dam Sire"
                  value="Dam Sire"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="2nd Dam"
                  value="2nd Dam"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Maneuver Scores"
                  value="Maneuver Scores"
              ></v-checkbox>
              <v-checkbox v-model="selected" label="LTE" value="LTE"></v-checkbox>
              <v-checkbox v-model="selected" label="PE" value="PE"></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Show"
                  value="Show"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Class"
                  value="Class"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Level"
                  value="Level"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Open vs Non Pro"
                  value="Open vs Non Pro"
              ></v-checkbox>
              <v-checkbox v-model="selected" label="Age" value="Age"></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Place"
                  value="Place"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Money"
                  value="Money"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Breeder"
                  value="Breeder"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Rider"
                  value="Rider"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Draw"
                  value="Draw"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Back Number"
                  value="Back Number"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="On Dirt"
                  value="On Dirt"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Finalist"
                  value="Finalist"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Notes"
                  value="Notes"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="NRHA"
                  value="NRHA"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Date of Show/Class"
                  value="Date of Show/Class"
              ></v-checkbox>
              <v-checkbox
                  v-model="selected"
                  label="Schooling"
                  value="Schooling"
              ></v-checkbox>
            </template>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>

    <v-card
      class="mx-auto my-10"
      max-width="900"
      varaint="outlined"
      style="border-radius: 10px"
    >
      <v-toolbar color="#c9e0ec">
        <v-text-field
          placeholder="Enter Horse Name to Start Searching"
          variant="plain"
          ref="getValue"
          class="ml-3"
          @keyup.enter="onSearch"
        >
        </v-text-field>
        <v-btn variant="tonal" @click="onSearch">
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
        <v-btn variant="tonal" color="#0D47A1" @click="onFindAll" class="ml-3">
          Find All Horses
        </v-btn>

        <v-btn id="menu-activator" variant="tonal" color="#0D47A1" class="ml-3"> Advanced Search </v-btn>
            <v-menu open-on-hover activator="#menu-activator">              
                <v-list>
                  <v-list-item>
                  <template v-slot:append> 
                    <v-btn
                      variant="tonal"
                      prepend-icon="mdi-clipboard-text-search-outline"
                      color="#0D47A1"
                      @click="attributesDrawer = !attributesDrawer"
                    >
                      Attributes Displayed
                    </v-btn>
                  </template>
                  </v-list-item>
                  <v-list-item>
                    <template v-slot:append> 
                    <v-btn
                      
                      variant="tonal"
                      prepend-icon="mdi-clipboard-text-search-outline"
                      color="#0D47A1"
                      @click="categoryDrawer = !categoryDrawer"
                    >
                      Search By Category
                    </v-btn>
                    </template>
                  </v-list-item>
                </v-list>
              </v-menu>
         
        <v-dialog v-model="dialog">
          <template v-slot:activator="{ props }">
            <v-btn class="ml-3" color="#0D47A1" variant="tonal" v-bind="props">
              Flag A Horse
            </v-btn>
          </template>
          <v-card
            class="mx-auto"
            width="75%"
            color="white"
            elevation="3"
            style="border-radius: 10px"
          >
            <h2 class="text-h4 mt-4 mb-4" style="text-align:center">
              Flag Horse 
            </h2>
                    <v-form ref="form" lazy-validation color="#212121">
                      <v-text-field
                        v-model="horseName"
                        :counter="10"
                        label="Horse Name"
                        required
                      ></v-text-field>

                      <v-select
                        v-model="select"
                        :items="items"
                        label="Which field would you like to suggest a change for?"
                        required
                      ></v-select>

                      <v-text-field
                        v-model="change"
                        :counter="10"
                        label="Suggested Change"
                        required
                      ></v-text-field>
                      <p style="text-align: center">
                        <v-btn
                          class="mr-14 mb-6"
                          color="#c9e0ec"
                          @click="submitChanges"
                          >Submit Changes for Review</v-btn
                        >
                        <v-btn
                          class="mr-2 mb-6"
                          color="#c9e0ec"
                          @click="dialog = false"
                          >Close</v-btn
                        >
                      </p>
                    </v-form>
                  </v-card>
                </v-dialog>
      </v-toolbar>
    </v-card>

    <v-card
      elevation="2"
      class="mx-auto my-auto"
      style="margin-bottom:100px !important;"
      max-width="1000"
      height="725"
      color="#c9e0ec"
    >
    
      <v-container fluid style="height: 60vh">
        <v-table id="table" height="600px" theme="dark" density="comfortable">
          <thead>
            <tr>
              <th v-for="(select, index) in selected" :key="index" scope="col">
                {{ select }}
              </th>
            </tr>
          </thead>

          <tbody>
            <tr class="table-row" v-for="horse of horseSearch" :key="horse.id">
              <!-- row 1 6th columns -->
              <td>{{ horse.name }}</td>
              <td>{{ horse.sire1 }}</td>
              <td>{{ horse.dam1 }}</td>
              <td>{{ horse.foaldate }}</td>
              <td>{{ horse.owner }}</td>
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

        <v-row class="mt-4 mb-4 ml-10">
        <v-col cols="4" sm="3">
          <v-select
            v-model="pageSize"
            :items="pageSizes"
            label="Items per Page"
            @change="handlePageSizeChange"
          ></v-select>
        </v-col>
        <v-col cols="12" sm="9">
          <v-pagination
            v-model="page"
            :length="totalPages"
            total-visible="7"
            next-icon="mdi-menu-right"
            prev-icon="mdi-menu-left"
            @input="handlePageChange"
          ></v-pagination>
        </v-col>
      </v-row>
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
      // pagination 
      page: 1,
      totalPages: 10,
      pageSize: 20,
      pageSizes: [20, 30, 40],

      // for flagging a horse
      change: "",
      horseName: "",
      select: ["Select an Attribute"],
      items: [
        "Select an Attribute",
        "Name",
        "Sire",
        "Dam",
        "Dam Sire",
        "2nd Dam",
        "Maneuver Scores",
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
        "Notes",
        "NRHA",
        "Date of Show/Class",
        "Schooling",
      ],
      dialog: false,
      // for selecting categories and attributes
      drawer: false,
      categoryDrawer: false,
      attributesDrawer: false,
      group: null,
      horseSearch: [],
      newItem: [],
      inputValue: [],
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
          category: "Foal Date",
          checked: false,
          hasInput: false,
        },
        {
          category: "Owner",
          checked: false,
          hasInput: false,
          inputValue: "",
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
      selected: ["Name", "Sire", "Dam", "Foul Date", "Owner"],
    };
  },

  computed: {
    
  },

  mounted() {
      // const table = document.getElementById('table');
      // const headers = [].slice.call(table.querySelectorAll('th'));
      //  headers.forEach(function(th, index) {
      //    checkbox.addEventListener('change', function(e) {
      //      e.target.checked ? showColumn(index) : hideColumn(index);
      // });
      // });
      // const numColumns = headers.length;
      // const cells = [].slice.call(table.querySelectorAll('th, td'));
      // cells.forEach(function (cell, index) {
      // cell.setAttribute('data-column-index', index % numColumns);
      // });
      // const hideColumn = function (index) {
      //   cells
      //       .filter(function (cell) {
      //           return cell.getAttribute('data-column-index') === `${index}`;
      //       })
      //       .forEach(function (cell) {
      //           cell.style.display = 'none';
      //       });
      // };
      // const showColumn = function (index) {
      //   cells
      //       .filter(function (cell) {
      //           return cell.getAttribute('data-column-index') === `${index}`;
      //       })
      //       .forEach(function (cell) {
      //           cell.style.display = '';
      //       });
      // };
    },

  methods: {
    handlePageChange(value) {
      this.page = value;
      // this.retrieveTutorials();
    },
    handlePageSizeChange(size) {
      this.pageSize = size;
      this.page = 1;
      // this.retrieveTutorials();
    },
    onClickOutsideCD () {
      this.categoryDrawer = false;
    },
    onClickOutsideAD() {
      this.attributesDrawer = false;
    },

    async onFindAll() {
      this.$router.push("/result");
      try {
        const res = await axios
          .get("https://bmwphd-be.herokuapp.com/horses", {})
          .then((res) => (this.horseSearch = res.data.data));
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    },

    onSearch() {
      const value = this.$refs.getValue.value.toUpperCase();
      console.log(this.$refs.getValue.value);
      axios({
        url: "https://bmwphd-be.herokuapp.com/horses/search",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: value,
        },
      }).then(
        (res) => {
          this.horseSearch = res.data.data;
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    onCategSearch() {
      let i = [
        0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
        20, 21, 22, 23, 24, 25, 26,
      ];
      for (i = 0; i < this.inputValue.length; i++) {
        if (this.inputValue[i] != null) {
          this.inputValue[i] = this.inputValue[i].toUpperCase();
        }
      }
      axios({
        url: "https://bmwphd-be.herokuapp.com/horses/search",
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: {
          name: this.inputValue[0],
          sire1: this.inputValue[1],
          dam1: this.inputValue[2],
          sire2: this.inputValue[3],
          dam2: this.inputValue[4],
          maneuver_scores: this.inputValue[5],
          lte: this.inputValue[6],
          pe: this.inputValue[7],
        },
      }).then(
        (res) => {
          this.horseSearch = res.data.data;
          console.log(res);
        },
        (error) => {
          console.log(error);
        }
      );
    },

    submitChanges() {
      console.log("this happends");
      this.horseName = "";
      this.select = this.items[0];
      this.change = "";
    },
    // onClickOutside() {
    //   this.drawer = false;
    // },

    //axios fetch from json server for presentation only. above commentted out code is for production from BE.
    // async onFindAll() {
    //   this.$router.push("/result");
    //   try {
    //     const response = await axios.get("http://localhost:3004/data");
    //     this.horseSearch = response.data;
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    // async onSearch() {
    //   const value = this.$refs.getValue.value;
    //   console.log(this.$refs.getValue.value);
    //   try {
    //     const response = await axios.get(
    //       "http://localhost:3004/data?name=" + value
    //     );
    //     this.horseSearch = response.data;
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },

    // async onCategSearch() {
    //   let i = [
    //     0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19,
    //     20, 21, 22, 23, 24, 25,
    //   ];
    //   for (i = 0; i < this.inputValue.length; i++) {
    //     if (this.listItems[i].checked == true) {
    //       this.inputValue[i] = this.inputValue[i];
    //     }
    //   }
    //   try {
    //     const response = await axios.get("http://localhost:3004/data", {
    //       params: {
    //         name: this.inputValue[0],
    //         sire1: this.inputValue[1],
    //         dam1: this.inputValue[2],
    //         sire2: this.inputValue[3],
    //         dam2: this.inputValue[4],
    //         maneuver_scores: this.inputValue[5],
    //         lte: this.inputValue[6],
    //         pe: this.inputValue[7],
    //         show: this.inputValue[8],
    //         class: this.inputValue[9],
    //         level: this.inputValue[10],
    //         openvsnpro: this.inputValue[11],
    //         age: this.inputValue[12],
    //         place: this.inputValue[13],
    //         money: this.inputValue[14],
    //         breeder: this.inputValue[15],
    //         owner: this.inputValue[16],
    //         rider: this.inputValue[17],
    //         draw: this.inputValue[18],
    //         back_number: this.inputValue[19],
    //         on_dirt: this.inputValue[20],
    //         finalist: this.inputValue[21],
    //         notes: this.inputValue[22],
    //         nrha: this.inputValue[23],
    //         date_of_show_class: this.inputValue[24],
    //         schooling: this.inputValue[25],
    //       },
    //     });
    //     this.horseSearch = response.data;
    //     console.log(response);
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
  },
};
</script>

<style scoped setup>
.v-tooltip__content {
  pointer-events: initial;
}

.upperCase {
  text-transform: uppercase;
}

</style>

<template>

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

  <v-card
    class="mx-auto my-10"
    max-width="800"
    varaint="outlined"
    style="border-radius: 10px"
  >
    <v-toolbar color="#c9e0ec">
      <v-text-field
        placeholder="Enter Horse Name to Start Searching"
        variant="plain"
        ref="getValue"
        class="ml-8"
        @keyup.enter="onSearch"
      >
      </v-text-field>
      <v-btn variant="tonal" @click="onSearch">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn variant="tonal" color="#0D47A1" @click="onFindAll" class="ml-2">
        Find All Horses
      </v-btn>
      <v-btn class="ml-2" variant="tonal" color="#0D47A1" @click="categoryDrawer = !categoryDrawer">
        Search By Category
      </v-btn>
    </v-toolbar>
  </v-card>
</template>

<script>
import axios from "axios";

export default {
  name: "searchTool",
  props: ["itemDetails"],
  data: () => {
    return {
      horses: [],
      drawer: false,
      categoryDrawer: false,
      group: null,
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
    };
  },

  methods: {
    onClickOutsideCD() {
      this.categoryDrawer = false;
    },

    async onFindAll() {
      try {
        const res = await axios.get(
          "https://bmwphd-be.herokuapp.com/horses",
          {}
        );
        this.$emit("horseSearch", res.data.data);
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
          this.$emit("horseSearch", res.data.data);
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
          this.$emit("horseSearch", res.data.data);
        },
        (error) => {
          console.log(error);
        }
      );
    },
  },
};
</script>

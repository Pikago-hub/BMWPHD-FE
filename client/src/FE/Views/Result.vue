<template>
  <v-main>
    <searchTool />
    <dataTable />
  </v-main>
</template>

<script>
import searchTool from "./components/searchTool.vue";
import dataTable from "./components/dataTable.vue";

export default {
  name: "Result",
  components: {
    searchTool,
    dataTable,
  },
  data: () => {
    return {
      horseName: "",
      horseSearch: [],
    };
  },

  computed: {},

  mounted() {},

  methods: {
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

<template>
  <v-main>
    <searchTool @horseSearch="horseData" />
    <dataTable :dataHorses="this.horses" />
  </v-main>
</template>

<script>
import searchTool from "./components/searchTool.vue";
import dataTable from "./components/dataTable.vue";

export default {
  name: "Result",
  data() {
    return {
      horses: [],
    };
  },
  components: {
    searchTool,
    dataTable,
  },

  computed: {},

  mounted() {},

  methods: {
    horseData(data) {
      this.horses = data;
      console.log(this.horses);
    },
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

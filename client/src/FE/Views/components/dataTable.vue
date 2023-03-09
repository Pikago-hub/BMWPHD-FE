<template>
  <EasyDataTable
    table-class-name="customize-table"
    id="table"
    show-index
    :theme-color="themeColor"
    :headers="headers"
    :items="items"
    :loading="loading"
    buttons-pagination
  >
    <template #loading>
      <img
        src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
        style="width: 100px; height: 80px !important"
      />
    </template>
    <template #empty-message>
      <a style="color: white">No Data</a>
    </template>
    <template #item-operation="horseD">
      <v-row justify="center">
        <v-btn color="primary" @click="findOneHorse(horseD)" class="mr-2">
          Details
        </v-btn>
      </v-row>
    </template>
  </EasyDataTable>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "DataTable",
  props: ["dataHorses"],
  data: () => {
    return {
      headers: [
        { text: "Name", value: "name", sortable: true },
        { text: "Sire", value: "sire1", sortable: true },
        { text: "Dam", value: "dam1", sortable: true },
        { text: "Maneuver Score", value: "maneuver_score", sortable: true },
        // { text: "Dam Sire", value: "sire2" },
        // { text: "2nd Dam", value: "dam2" },
        // { text: "Foal Date", value: "foal_date", sortable: true },
        // { text: "European OPT", value: "european_opt" },
        // { text: "Year", value: "year", sortable: true },
        // { text: "Nominator", value: "nominator" },
        { text: "Operation", value: "operation", sortable: false },
      ],
      items: [],
      themeColor: "orange",
      loading: false,
    };
  },

  watch: {
    dataHorses: function () {
      this.assignData();
    },
  },

  methods: {
    assignData() {
      this.items = this.dataHorses;
      this.loading = false;
    },
    findOneHorse(horseD) {
      const horseId = horseD.id;
      const url = "http://www.bmwphd.net/horse/" + horseId;
      window.open(url, "_blank");
    },
  },
});
</script>

<style>
.customize-table {
  --easy-table-border: 1px solid #445269;
  --easy-table-row-border: 1px solid #445269;

  --easy-table-header-font-size: 14px;
  --easy-table-header-height: 50px;
  --easy-table-header-font-color: #c1cad4;
  --easy-table-header-background-color: #2d3a4f;

  --easy-table-header-item-padding: 10px 15px;

  --easy-table-body-even-row-font-color: #fff;
  --easy-table-body-even-row-background-color: #4c5d7a;

  --easy-table-body-row-font-color: #c0c7d2;
  --easy-table-body-row-background-color: #2d3a4f;
  --easy-table-body-row-height: 50px;
  --easy-table-body-row-font-size: 14px;

  --easy-table-body-row-hover-font-color: #2d3a4f;
  --easy-table-body-row-hover-background-color: #eee;

  --easy-table-body-item-padding: 10px 15px;

  --easy-table-footer-background-color: #2d3a4f;
  --easy-table-footer-font-color: #c0c7d2;
  --easy-table-footer-font-size: 14px;
  --easy-table-footer-padding: 0px 10px;
  --easy-table-footer-height: 50px;

  --easy-table-scrollbar-track-color: #2d3a4f;
  --easy-table-scrollbar-color: #2d3a4f;
  --easy-table-scrollbar-thumb-color: #4c5d7a;
  --easy-table-scrollbar-corner-color: #2d3a4f;

  --easy-table-loading-mask-background-color: #2d3a4f;
}
</style>

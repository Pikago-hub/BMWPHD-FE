<template>
  <EasyDataTable
    table-class-name="customize-table"
    id="table"
    show-index
    v-model:items-selected="itemsSelected"
    :theme-color="themeColor"
    :headers="headers"
    :items="items"
    buttons-pagination
  >
  </EasyDataTable>
</template>

<script>
import { defineComponent, ref } from "vue";
export default defineComponent({
  name: "DataTable",
  props: ["dataHorses"],
  data: () => {
    return {
      headers: [
        { text: "Name", value: "name" },
        { text: "Sire", value: "sire1" },
        { text: "Dam", value: "dam1" },
        { text: "Dam Sire", value: "sire2" },
        { text: "2nd Dam", value: "dam2" },
        { text: "Foal Date", value: "foal_date", sortable: true },
        { text: "European OPT", value: "european_opt" },
        { text: "Year", value: "year", sortable: true },
        { text: "Nominator", value: "nominator" },
      ],
      items: [],
      itemsSelected: ref([]),
      themeColor: "orange",
    };
  },

  watch: {
    dataHorses: function () {
      this.assignData();
    },
  },

  methods: {
    onHorses() {
      console.log("onHorses", this.dataHorses);
      this.assignData();
    },

    assignData() {
      this.items = this.dataHorses;
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

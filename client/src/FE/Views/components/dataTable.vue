<template>
  <EasyDataTable
    id="table"
    :headers="headers"
    :items="items"
    :rows-per-page="25"
  >
    <searchTool @horseSearch="getHorses" />
    <template #pagination="{ prevPage, nextPage, isFirstPage, isLastPage }">
      <button :disabled="isFirstPage" @click="prevPage">prev page</button>
      <button :disabled="isLastPage" @click="nextPage">next page</button>
    </template>
  </EasyDataTable>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Header } from "vue3-easy-data-table";
import searchTool from "./searchTool.vue";

export default defineComponent({
  name: "DataTable",
  components: {
    searchTool,
  },

  methods: {
    getHorses(horseSearch) {
      console.log(horseSearch);
    },
  },

  setup() {
    const headers: Header[] = [
      { text: "Name", value: "name" },
      { text: "Sire", value: "sire1" },
      { text: "Dam", value: "dam1" },
      { text: "Dam Sire", value: "sire2" },
      { text: "2nd Dam", value: "dam2" },
    ];
    function getHorses(horseSearch) {
      console.log(horseSearch);
    }

    const items = getHorses(34110);
    return {
      getHorses,
      headers,
      items,
    };
  },
});
</script>

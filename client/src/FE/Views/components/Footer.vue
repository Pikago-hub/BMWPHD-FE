<template>
    <v-footer absolute inset app height="60" width="auto" color="#c9e0ec">
      <v-container>
        <v-row justify="center" no-gutters>
          <v-col class="text-center mt-4" cols="12">
            <strong>{{ new Date().getFullYear() }} — BMWPHD</strong>
          </v-col>
        </v-row>
      </v-container>
    </v-footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>
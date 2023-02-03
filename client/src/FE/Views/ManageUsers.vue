<template>
    <v-main>
        <v-sheet class="py-16">
            <section id="filter">
            <v-card class="mx-auto"
                width="75%" color="#c9e0ec" elevation="3" style="border-radius: 10px;">
                <h2 class="text-h4" style="text-align:center">
                 Request Management
                </h2>
            </v-card>

            <v-card
                class="mx-auto my-10"
                max-width="900"
                varaint="outlined"
                style="border-radius: 10px"
            >
            <v-container fluid style="height: 60vh">
                <v-table height="600px" theme="dark" density="comfortable">
                    <thead>
                        <tr>
                        <th>User</th>
                        <th>Horse</th>
                        <th>Atttribute</th>
                        <th>Suggest Change</th>
                        <th>Actions (three buttons - approve deny edit)</th>
                        </tr>
                    </thead>
                </v-table>
            </v-container>
            </v-card>
            </section>
        </v-sheet>
    </v-main>
</template>

<script>

export default {
  name: 'ManageUsers',
  data: () => ({
  }),

  computed: {},

  methods: {
  }
}
</script>

<style>

</style>
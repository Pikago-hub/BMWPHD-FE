<template>
    <v-main>
        <v-sheet class="py-16">
            <section id="filter">
            <v-card class="mx-auto"
                width="20%" color="#c9e0ec" elevation="3" style="border-radius: 10px;">
                <h2 class="text-h4" style="text-align:center">
                 Request Management
                </h2>
            </v-card>

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
                        Flaged Horse 
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
                        label="Attribute selected to change"
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
                          >Update Changes</v-btn
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

            <v-card
                class="mx-auto my-10"
                max-width="900"
                varaint="outlined"
                style="border-radius: 10px"
                color="#c9e0ec"
            >
            <v-container fluid style="height: 60vh">
                <v-table height="600px" theme="dark" density="comfortable">
                    <thead>
                        <tr>
                            <th>User Email</th>
                            <th>Horse Name</th>
                            <th>Atttribute</th>
                            <th>Suggested Change</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>User Email</td>
                            <td>Horse Name</td>
                            <td>Attribute</td>
                            <td>Suggested change</td>
                            <td>
                                <!-- <template v-slot:default="scope">  -->
                                    <v-btn color="green" class="ml-8" @click="acceptReq(scope.row)"> Approve </v-btn>
                                    <v-btn color="white" class="ml-5" @click="handleClick(scope.row)"> Edit </v-btn>
                                    <v-btn color="red" class="ml-5" @click="deleteReq(scope.row)"> Deny </v-btn>
                                <!-- </template> -->
                            </td>
                        </tr>
                    </tbody>
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
    dialog: false,
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
  }),

  computed: {},

  methods: {
    handleClick(row){       
        this.form = row
        this.dialog = true    
    },
    acceptReq(row) {
        row.status = 'Approved'
        api.acceptRequest(row, row.id)          
    },
    deleteReq(row) {
        row.status = 'Rejected'
        api.rejectRequest(row, row.id)
            
    },
  }
}
</script>

<style>

</style>
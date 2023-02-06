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
                        label="Suggested Change"
                        required
                      ></v-text-field>
                      <p style="text-align: center">
                        <v-btn
                          class="mr-14 mb-6"
                          color="#c9e0ec"
                          @click="updateChanges"
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
              <v-btn @click="loadChangeRequests()" >Test</v-btn>
                <v-table id="table" height="600px" theme="dark" density="comfortable">
                    <thead>
                        <tr>
                            <th style="text-align: center" scope="col">User Email</th>
                            <th style="text-align: center" scope="col">Horse Name</th>
                            <th style="text-align: center" scope="col">Atttribute</th>
                            <th style="text-align: center" scope="col">Suggested Change</th>
                            <th style="text-align: center" scope="col">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr class="table-row" v-for="request of requestList" :key="request.id">
                                <td style="text-align: center"> {{ request.email }} </td>
                                <td style="text-align: center"> {{ request.horse }} </td>
                                <td style="text-align: center"> {{ request.attribute }} </td>
                                <td style="text-align: center"> {{ request.change }} </td>
                                    <td>
                                        <v-btn color="green" @click="acceptReq(request)"> Approve </v-btn>
                                        <v-btn color="white" class="ml-5" @click="editReq(request)"> Edit </v-btn>
                                        <v-btn color="red" class="ml-5" @click="deleteReq(request)"> Deny </v-btn>   
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
import axios from "axios";
import api from '../../api/systemApi';


export default {
  name: 'ManageRequests',
  props:[""],
  data: () => ({
    requestList: [
         {
             id: 1,
             email: "m.gresham@tcu.edu",
             horse: "Piggy",
             attribute: "Sire",
             change: "Sire should be",
             status: "Pending"
         },
         {
             id: 2,
             email: "j.wu@tcu.edu",
             horse: "Skittle",
             attribute: "Dam",
             change: "Dam should be",
             status: "Pending"
         },
         {
             id: 3,
             email: "c.jain@tcu.edu",
             horse: "Lauren",
             attribute: "Schooling",
             change: "Schooling should be",
             status: "Pending"
         },
         {
             id: 4,
             email: "d.hanft@tcu.edu",
             horse: "Waterbottle",
             attribute: "Score",
             change: "Score should be",
             status: "Pending"
         },
    ],
    // flagging horse dialog 
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
    async loadChangeRequests () {
          this.rawData = await api.getChangeRequests();//this should be getFormDataForReal()
          this.requestList = this.rawData.data; 
          console.log(this.rawData)
    },

    editReq(request){       
        // this.form = row
        this.dialog = true    
        this.horseName = request.horse
        this.select = request.attribute
        this.change = request.change
    },
    acceptReq(request) {
        request.status = 'Approved'
        // api.acceptRequest(request, request.id)          
    },
    deleteReq(request) {
        request.status = 'Rejected'
        // api.rejectRequest(request, request.id)
            
    },
    updateChanges() {
      this.horseName = "";
      this.select = this.items[0];
      this.change = "";
    },

  }
}
</script>

<style>

</style>
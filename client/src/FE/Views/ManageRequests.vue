<template>
    <v-main>

              <v-alert
                v-model="acceptAlert"
                  outlined
                  text
                  color="#E6FFE6"
                  closable
                  close-text="Close Alert"
                >
                <v-icon icon="mdi-check-bold"></v-icon>
                Horse request has been <strong>accepted</strong> and the horse inforamtion has been <strong>updated</strong> for all users to see
              </v-alert>

            <v-alert
                v-model="editAlert"
                  outlined
                  text
                  color="#E6FFE6"
                  closable
                  close-text="Close Alert"
                >
                <v-icon icon="mdi-check-bold"></v-icon>
                Horse request has been <strong>updated</strong>
              </v-alert>

              <v-alert
                v-model="denyAlert"
                  outlined
                  text
                  color="#FFCCCB"
                  closable
                  close-text="Close Alert"
                >
                <v-icon icon="mdi-check-bold"></v-icon>
                Horse request has been <strong>Denied</strong>
              </v-alert>

        <v-sheet class="py-9">
            <section id="filter">

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
                        class="mx-6"
                        style="display: none;"
                        v-model="editingHorse.changeRequestId">
                      </v-text-field>

                      <v-text-field
                        class="mx-6"
                        v-model="editingHorse.horseName"
                        label="Horse Name"
                        required
                      ></v-text-field>

                      <v-select
                        class="mx-6"
                        v-model="editingHorse.select"
                        :items="items"
                        label="Attribute selected to change"
                        required
                      ></v-select>

                      <v-text-field
                        class="mx-6"
                        v-model="editingHorse.change"
                        label="Suggested Change"
                        required
                      ></v-text-field>

                      <p style="text-align: center">
                        <v-btn
                          class="mr-14 mb-6"
                          color="#c9e0ec"
                          @click="updateChanges(request)"
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
                class="mx-auto"
                width="70%"
                height="80vh"
                varaint="outlined"
                style="border-radius: 10px"
                color="#c9e0ec"
            >
                <h2 class="text-h4 mt-5" style="text-align:center">
                 Request Management
                </h2>
                <!-- <v-btn @click="loadChangeRequests()"> TEST </v-btn> -->
                <v-table fixed-header id="table" height="65vh" theme="dark" density="comfortable" class="mx-4 mt-5 mb-10">
                    <thead>
                        <tr>
                            <th style="text-align: center; font-size:20px;" scope="col">User Email</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Horse Name</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Atttribute</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Suggested Change</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Status</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr class="table-row" v-for="request of requestList" :key="request.id">
                                <td style="text-align: center"> {{ request.ownerId }} </td>
                                <td style="text-align: center"> {{ request.horseId }} </td>
                                <td style="text-align: center"> {{ request.attribute }} </td>
                                <td style="text-align: center"> {{ request.suggestedChange }} </td>
                                <td style="text-align: center"> {{ request.status }} </td>
                                    <td style="text-align: center">
                                      <v-tooltip text="Accept" location="top">
                                      <template v-slot:activator="{ props }"> 
                                        <v-btn v-bind="props" class="ml-4" color="green" @click="acceptReq(request)"> <v-icon icon="mdi-check-bold"></v-icon> </v-btn>
                                      </template>
                                      </v-tooltip>
                                      <v-tooltip text="Edit" location="top">
                                      <template v-slot:activator="{ props }">  
                                        <v-btn v-bind="props" class="ml-4" color="white" @click="editReq(request)"> <v-icon icon="mdi-pencil-outline"></v-icon> </v-btn>  
                                      </template>
                                      </v-tooltip>
                                      <v-tooltip text="Deny" location="top">
                                      <template v-slot:activator="{ props }">    
                                        <v-btn v-bind="props" class="ml-4" color="red" @click="deleteReq(request)"> <v-icon icon="mdi-cancel"></v-icon> </v-btn> 
                                      </template>
                                      </v-tooltip>
                                    </td>    
                            </tr>
                        </tbody>
                </v-table>
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
        //  {
        //      id: 1,
        //      email: "m.gresham@tcu.edu",
        //      horse: "Piggy",
        //      attribute: "Sire",
        //      suggestedChange: "Sire should be",
        //      status: "Pending"
        //  },
        //  {
        //      id: 2,
        //      email: "j.wu@tcu.edu",
        //      horse: "Skittle",
        //      attribute: "Dam",
        //      suggestedChange: "Dam should be",
        //      status: "Pending"
        //  },
        //  {
        //      id: 3,
        //      email: "c.jain@tcu.edu",
        //      horse: "Lauren",
        //      attribute: "Schooling",
        //      suggestedChange: "Schooling should be",
        //      status: "Pending"
        //  },
        //  {
        //      id: 4,
        //      email: "d.hanft@tcu.edu",
        //      horse: "Waterbottle",
        //      attribute: "Score",
        //      suggestedChange: "Score should be",
        //      status: "Pending"
        //  },
    ],
    acceptAlert: false,
    editAlert: false,
    denyAlert: false,
    // flagging horse dialog 
    dialog: false,
    editingHorse: {
      change: "",
      horseName: "",
      changeRequestId: "",
      select: ["Select an Attribute"],
    },
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

  async mounted () {
      this.data = await api.getChangeRequests();
      this.requestList = this.data.data; 
      console.log(this.requestList)
  },

  methods: {
    editReq(request){       
        this.dialog = true   
        this.editingHorse.changeRequestId = request.id 
        this.editingHorse.horseName = request.horse
        this.editingHorse.select = request.attribute
        this.editingHorse.change = request.suggestedChange
    },
    acceptReq(request) {
        this.acceptAlert = true
        request.status = 'Approved'
        api.acceptRequest(request, request.id)          
    },
    deleteReq(request) {
        this.denyAlert = true
        request.status = 'Rejected'
        api.rejectRequest(request, request.id)
    },
    async updateChanges() {
      console.log(this.editingHorse);
      await api.updateChangeRequest(this.editingHorse);
      this.editAlert = true
      this.dialog = false;
      this.editingHorse.horseName = "";
      this.editingHorse.changeRequestId = "";
      this.editingHorse.select = this.items[0];
      this.editingHorse.change = "";
    },

  }
}
</script>

<style>
.v-tooltip__content {
  pointer-events: initial;
}

</style>
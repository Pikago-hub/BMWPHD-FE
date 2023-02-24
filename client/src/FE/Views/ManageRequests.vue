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
                        style="display: none;"
                        v-model="editingHorse.status">
                      </v-text-field>

                      <v-text-field
                        class="mx-6"
                        style="display: none;"
                        v-model="editingHorse.horseId">
                      </v-text-field>

                      <v-text-field
                        class="mx-6"
                        style="display: none;"
                        v-model="editingHorse.ownerId">
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
                            <tr 
                              class="table-row" 
                              v-for="(request, index) in requestList" :key="index">
                                <td style="text-align: center"> {{ userList[index] }} </td>
                                <td style="text-align: center"> {{ horseList[index] }} </td>
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
                                        <v-btn v-bind="props" class="ml-4" color="white" @click="editReq(request, horseList)"> <v-icon icon="mdi-pencil-outline"></v-icon> </v-btn>  
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
import api from '../../api/systemApi';


export default {
  name: 'ManageRequests',
  props:[""],
  data: () => ({
    requestList: [
        
    ],
    userList: [

    ],
    horseList: [

    ],
    acceptAlert: false,
    editAlert: false,
    denyAlert: false,
    // flagging horse dialog 
    dialog: false,
    editingHorse: {
      status: "",
      horseId: "",
      ownerId: "",
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

  created() {
      this.loadChangeRequests();
  },

  methods: {
    async loadChangeRequests() {
      this.data = await api.getChangeRequests();
      this.requestList = this.data.data; 
      console.log(this.requestList);
      this.requestList.forEach(async (request) => {
        // console.log(request.ownerId);
        this.data = await api.getUserByID(request.ownerId);
        this.userList.push(this.data.data.email);
      }) 
      this.requestList.forEach(async (request) => {
        this.data = await api.getHorseByID(request.horseId);
        this.horseList.push(this.data.data.name);
      }) 
    },

    async editReq(request, horseList){       
        this.dialog = true   
        this.editingHorse.changeRequestId = request.id 
        this.editingHorse.horseId = request.horseId 
        this.editingHorse.ownerId = request.ownerId 
        this.editingHorse.status = request.status 
        const data = await api.getHorseByID(request.horseId);
        const name = data.data.name;
        this.editingHorse.horseName = name
        this.editingHorse.select = request.attribute
        this.editingHorse.change = request.suggestedChange
    },
    async acceptReq(request) {
        this.acceptAlert = true
        const horse = await api.getHorseByID(request.horseId);
        const horseData = horse.data;
        const hID = horse.data.id;
        if (request.attribute === "Dam") {
          api.updateHorseDam(hID, horseData, request);
        }
        if (request.attribute === "Sire") {
          api.updateHorseSire(hID, horseData, request);
        }
        if (request.attribute === "name") {
          api.updateHorseName(hID, horseData, request);
        }
        if (request.attribute === "Dam Sire") {
          api.updateHorseDamSire(hID, horseData, request);
        }
        if (request.attribute === "2nd Dam") {
          api.updateHorseSecondDam(hID, horseData, request);
        }
        if (request.attribute === "Maneuver Scores") {
          api.updateHorseManeuverScores(hID, horseData, request);
        }
        if (request.attribute === "LTE") {
          api.updateHorseLTE(hID, horseData, request);
        }
        if (request.attribute === "PE") {
          api.updateHorsePE(hID, horseData, request);
        }
        if (request.attribute === "Show") {
          api.updateHorseShow(hID, horseData, request);
        }
        if (request.attribute === "Class") {
          api.updateHorseClass(hID, horseData, request);
        }
        if (request.attribute === "Level") {
          api.updateHorseLevel(hID, horseData, request);
        }
        if (request.attribute === "Foal Date") {
          api.updateHorseFoalDate(hID, horseData, request);
        }
        if (request.attribute === "European Opt") {
          api.updateHorseEuropeanOpt(hID, horseData, request);
        }
        if (request.attribute === "Year") {
          api.updateHorseYear(hID, horseData, request);
        }
        if (request.attribute === "Nominator") {
          api.updateHorseNominator(hID, horseData, request);
        }
        request.status = 'Approved'
        api.acceptRequest(request, request.id)          
    },
    deleteReq(request) {
        this.denyAlert = true
        request.status = 'Rejected'
        api.rejectRequest(request, request.id)
    },
    async updateChanges() {
      await api.updateChangeRequest(this.editingHorse);
      this.loadChangeRequests();
      this.editAlert = true;
      this.dialog = false;
      this.editingHorse.changeRequestId = "";
      this.editingHorse.horseId = "";
      this.editingHorse.ownerId = "";
      this.editingHorse.status = ""; 
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
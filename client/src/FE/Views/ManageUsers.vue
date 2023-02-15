<template>
    <v-main>
              <v-alert
              v-model="editAlert"
                outlined
                text
                color="#E6FFE6"
                closable
                close-text="Close Alert"
              >
              <v-icon icon="mdi-check-bold"></v-icon>
              User has been <strong>updated</strong> in the database
              </v-alert>

              <v-alert
              v-model="deleteAlert"
                outlined
                text
                color="#FFCCCB"
                closable
                close-text="Close Alert"
              >
              <v-icon icon="mdi-check-bold"></v-icon>
              User has been <strong>Deleted</strong> in the database
              </v-alert>

        <v-sheet class="mt-6 mb-6">
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
                        Edit User 
                        </h2>
                    <v-form ref="form" lazy-validation color="#212121">

                        <v-text-field
                          class="mx-6"
                          style="display: none;"
                          v-model="editingUser.id">
                        </v-text-field>
                        <v-text-field
                          class="mx-6"
                          style="display: none;"
                          v-model="editingUser.active">
                        </v-text-field>
                        <v-text-field
                          class="mx-6"
                          style="display: none;"
                          v-model="editingUser.username">
                        </v-text-field>

                      <!-- <v-row>
                        <v-col cols="12" sm="6" md="6">
                        <v-text-field
                            class="ml-6"
                            v-model="editingUser.firstName"
                            label="First Name"
                            required
                        ></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6"> -->
                        <v-text-field
                            class="mx-6"
                            v-model="editingUser.name"
                            label="Name"
                            required
                        ></v-text-field>
                        <!-- </v-col>
                      </v-row> -->

                      <v-text-field
                        class="mx-6"
                        v-model="editingUser.email"
                        label="Email Address"
                        required
                      ></v-text-field>

                      <v-select
                        class="mx-6"
                        v-model="editingUser.select"
                        :items="items"
                        label="Role"
                        required
                      ></v-select>

                      <p style="text-align: center">
                        <v-btn
                          class="mr-7 mb-6"
                          color="#c9e0ec"
                          @click="updateChanges()"
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
                class="mx-auto mt-5"
                width="70%"
                height="80vh"
                varaint="outlined"
                style="border-radius: 10px"
                color="#c9e0ec"
            >
                <h2 class="text-h4 mt-5" style="text-align:center">
                 User Management
                </h2>
                <v-table fixed-header id="table" height="65vh" theme="dark" density="comfortable" class="mx-4 mt-5 mb-10">
                    <thead>
                        <tr>
                            <th style="text-align: center; font-size:20px;" scope="col">Name</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Email</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Role</th>
                            <th style="text-align: center; font-size:20px;" scope="col">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr class="table-row" v-for="user of userList" :key="user.id">
                                <td style="text-align: center"> {{ user.name }} </td>
                                <td style="text-align: center"> {{ user.email }} </td>
                                <td style="text-align: center"> {{ user.role }} </td>
                                    <td style="text-align: center">
                                    <v-tooltip text="Edit" location="top">
                                      <template v-slot:activator="{ props }">  
                                        <v-btn v-bind="props" color="white" @click="editUser(user)"> <v-icon icon="mdi-pencil-outline"></v-icon> </v-btn>  
                                      </template>
                                      </v-tooltip>
                                      <v-tooltip text="Delete" location="top">
                                      <template v-slot:activator="{ props }">    
                                        <v-btn v-bind="props" class="ml-4" color="red" @click="deleteUser(user)"> <v-icon icon="mdi-trash-can"></v-icon> </v-btn> 
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
  name: 'ManageUsers',
  props:[""],
  data: () => ({
    // alerts 
    editAlert: false,
    deleteAlert: false,
    // edit user dialog 
    dialog: false,
    editingUser: {
      id: "",
      active: "",
      username: "",
      name: "",
      // lastName: "",
      email: "",
      select: [""],
    },
    items: [
        "Fan",
        "Judge",
        "Rider",
        "Admin"
    ],
    userList: [
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
        //  {
        //      id: 1,
        //      firstName: 'Madison',
        //      lastName: 'Gresham',
        //      email: "m.gresham@tcu.edu",
        //      role: 'Fan'
        //  },
        //  {
        //      id: 2,
        //      firstName: 'Chirayu',
        //      lastName: 'Jain',
        //      email: "c.jain@tcu.edu",
        //      role: 'Admin'
        //  },  
    ],
   

  }),

  computed: {},

  async mounted () {
      this.data = await api.getAllUsers();
      this.userList = this.data.data; 
      console.log(this.userList)
  },

  methods: {
    editUser(user){       
        this.dialog = true    
        this.editingUser.id = user.id
        this.editingUser.active = user.active
        this.editingUser.username = user.username
        this.editingUser.name = user.name
        // this.editingUser.lastName = user.lastName
        this.editingUser.email = user.email
        this.editingUser.select = user.role
    },
   
    deleteUser(user) {
      this.deleteAlert = true
      // user.status = 'Delete'
      // api.rejectRequest(request, request.id)
    },

    async updateChanges() {
      console.log(this.editingUser);
      await api.updateUser(this.editingUser);
      this.editAlert = true
      this.dialog = false
    },
  }
}
</script>

<style>

</style>
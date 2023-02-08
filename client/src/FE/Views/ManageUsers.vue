<template>
    <v-main>
        <v-sheet class="py-16">
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
                        User 
                        </h2>
                    <v-form ref="form" lazy-validation color="#212121">
                      <v-text-field
                        v-model="firstName"
                        label="First Name"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="lastName"
                        label="Last Name"
                        required
                      ></v-text-field>

                      <v-text-field
                        v-model="email"
                        label="Email Address"
                        required
                      ></v-text-field>

                      <v-select
                        v-model="select"
                        :items="items"
                        label="Role"
                        required
                      ></v-select>

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
                <h2 class="text-h4 mt-5" style="text-align:center">
                 User Management
                </h2>
            <v-container fluid style="height: 60vh">
             
                <v-table id="table" height="600px" theme="dark" density="comfortable">
                    <thead>
                        <tr>
                            <th style="text-align: center; font-size:15px;" scope="col">First Name</th>
                            <th style="text-align: center; font-size:15px;" scope="col">Last Name</th>
                            <th style="text-align: center; font-size:15px;" scope="col">Email</th>
                            <th style="text-align: center; font-size:15px;" scope="col">Role</th>
                            <th style="text-align: center; font-size:15px;" scope="col">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr class="table-row" v-for="user of userList" :key="user.id">
                                <td style="text-align: center"> {{ user.firstName }} </td>
                                <td style="text-align: center"> {{ user.lastName }} </td>
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
            </v-container>
            </v-card>
            </section>
        </v-sheet>
    </v-main>
</template>

<script>
import axios from "axios";


export default {
  name: 'ManageUsers',
  props:[""],
  data: () => ({
    dialog: false,
    firstName: "",
    lastName: "",
    email: "",
    select: [""],
    items: [
        "Fan",
        "Judge",
        "Rider",
        "Admin"
    ],
    userList: [
         {
             id: 1,
             firstName: 'Madison',
             lastName: 'Gresham',
             email: "m.gresham@tcu.edu",
             role: 'Fan'
         },
         {
             id: 2,
             firstName: 'Chirayu',
             lastName: 'Jain',
             email: "c.jain@tcu.edu",
             role: 'Admin'
         },  
    ],
   

  }),

  computed: {},

  methods: {
    editUser(user){       
        this.dialog = true    
        this.firstName = user.firstName
        this.lastName = user.lastName
        this.email = user.email
        this.select = user.role
    },
   
    deleteUser(user) {
        user.status = 'Delete'
        // api.rejectRequest(request, request.id)
    },
  }
}
</script>

<style>

</style>
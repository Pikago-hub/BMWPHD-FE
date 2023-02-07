<template>
    <v-main>
        <v-sheet class="py-16">
            <section id="filter">
            <v-card class="mx-auto"
                width="20%" color="#c9e0ec" elevation="3" style="border-radius: 10px;">
                <h2 class="text-h4" style="text-align:center">
                 User Management
                </h2>
            </v-card>


            <v-card
                class="mx-auto my-10"
                max-width="900"
                varaint="outlined"
                style="border-radius: 10px"
                color="#c9e0ec"
            >
            <v-container fluid style="height: 60vh">
             
                <v-table id="table" height="600px" theme="dark" density="comfortable">
                    <thead>
                        <tr>
                            <th style="text-align: center" scope="col">Username</th>
                            <th style="text-align: center" scope="col">Name</th>
                            <th style="text-align: center" scope="col">Email</th>
                            <th style="text-align: center" scope="col">Role</th>
                            <th style="text-align: center" scope="col">Actions</th>
                        </tr>
                    </thead>
                        <tbody>
                            <tr class="table-row" v-for="user of userList" :key="user.id">
                                <td style="text-align: center"> {{ user.username }} </td>
                                <td style="text-align: center"> {{ user.name }} </td>
                                <td style="text-align: center"> {{ user.email }} </td>
                                <td style="text-align: center"> {{ user.role }} </td>
                                    <td>
                                        <v-btn color="red"  class="ml-16" @click="deleteUser(user)"> Delete </v-btn>   
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
    userList: [
         {
             id: 1,
             username: 'mgresham',
             name: 'Madison Gresham',
             email: "m.gresham@tcu.edu",
             role: 'fan'
         },
         {
             id: 2,
             username: 'cjain',
             name: 'Chirayu Jain',
             email: "c.jain@tcu.edu",
             role: 'admin'
         },
         
    ],

  }),

  computed: {},

  methods: {
   
    deleteUser(user) {
        user.status = 'Delete'
        // api.rejectRequest(request, request.id)
    },
  }
}
</script>

<style>

</style>
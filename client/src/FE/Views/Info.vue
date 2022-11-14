<template>
    <v-app>
      <!-- <div> -->
        <v-app-bar color="blue accent-4" dense dark>
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-toolbar-title>BMWPHD</v-toolbar-title>
          <v-spacer></v-spacer>
  
  
        <v-tooltip text="Go Home" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn icon @click="onHome" v-bind="props">
              <v-icon>mdi-home-outline</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
        
        <v-tooltip text="Login" location="bottom">
          <template v-slot:activator="{ props }">
            <v-btn icon @click="onLogin" v-bind="props">
              <v-icon>mdi-login-variant</v-icon>
            </v-btn>
          </template>
        </v-tooltip>
        
          <v-menu leftbottom>
            <template v-slot:activator="{ on, attrs }">
              <v-btn icon v-bind="attrs" v-on="on">
                <v-icon>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>
          </v-menu>
        </v-app-bar>
  
        <v-navigation-drawer v-model="drawer" absolute temporary>
  
            <v-list nav>
            <v-list-item prepend-icon="mdi-home" title="Home" link @click="onHome"></v-list-item>
            <v-list-item prepend-icon="mdi-account" title="Manage" link @click="onManage"></v-list-item>
            <v-list-item prepend-icon="mdi-file-document" title="History" link @click="onHistory"></v-list-item>
            <v-list-item prepend-icon="mdi-horseshoe" title="About Us" link @click="onAbout"></v-list-item>
            </v-list>
        
        </v-navigation-drawer>
  
      <!-- </div> -->
  
      <v-main>
  
          <v-sheet class="py-16">
              <section id="filter">
                  <v-container>
                      <v-row justify="space-between">
                          <v-col cols="auto">
                              <v-responsive width="700">
                                  <h2 class="text-h4">
                                      BMW Performance Horse Database is sponsored by BMW Quarter Horses
                                  </h2>
          
                                  <p class="mt-8">
                                      BMW Quarter Horses breeds and raises prospects for the reining and reined cowhorse
                                      disciplines with a
                                      focus on pedigree, conformation, a good mind, and soundness. They believe in mare power and
                                      always have a range of prospects available.
                                      BMW Quarter Horses has tailored their breeding program to the western performance
                                      disciplines of reining (NRHA) and reined cowhorse (NRCHA).
                                      The team is made up of Trainers, Reproduction and Foal Care, Vets, Sale Fitting, and
                                      Photographers.
                                  </p>
          
                                  <p class="mt-8">
                                      You can contact them by one of the following:
                                  </p>
          
                                  <p class="text-success mt-3">
                                      Phone: (940) 357-1998
                                  </p>
                                  <p class="text-success mt-3">
                                      Email: bmw@cedartopcapital.com
                                  </p>
  
                                  <p class="mt-8">
                                      More information can be found on their facebook page through the link below. 
                                  </p>
  
                      <v-btn
                        class="mt-6"
                        href="https://www.facebook.com/BMWqh/"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Facebook Homepage
                      </v-btn>
                    </v-responsive>
                  </v-col>
  
                  <v-img
                    max-width="600"
                    src="../client/src/assets/BMWPHD.png"
                  />
                </v-row>
              </v-container>
            </section>
          </v-sheet>
        </v-main> 
  
      <v-footer absolute inset app height="100" width="auto" class="bg-grey-lighten-1" >
        <v-container>
          <v-row justify="center" no-gutters >
            <v-col class="text-center mt-4" cols="12">
              <strong>{{ new Date().getFullYear() }} — BMWPHD</strong>
            </v-col>
          </v-row>
        </v-container>
      </v-footer>
    </v-app>
  </template>
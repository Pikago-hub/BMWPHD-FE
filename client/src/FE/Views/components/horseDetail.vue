<template>
  <v-main>

    <v-alert
      v-model="alert"
      outlined
      text
      color="#E6FFE6"
      closable
      close-text="Close Alert"
    >
      <v-icon icon="mdi-check-bold"></v-icon>
      Your suggested changes have been submitted for review by our team
    </v-alert>

    <v-card
      class="mx-auto mt-6 pa-12 pb-8"
      elevation="8"
      max-width="900"
      rounded="lg"
      color="#c9e0ec"
    >
      <v-row justify-center align-center>
        <v-col>
          <v-card class="mx-auto" max-width="900">
            <h2 class="text-h4 mt-5" style="text-align:center">
              Horse: {{ horse.name }}
              </h2>
            <v-list dense>
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Sire:</strong> {{ horse.sire1 }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Dam: </strong>{{ horse.dam1 }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Dam Sire: </strong> {{ horse.sire2 }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Second Dam: </strong> {{ horse.dam2 }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Maneuver Score: </strong> {{ horse.maneuver_score }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>LTE: </strong> {{ horse.lte }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>
              
              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Show: </strong> {{ horse.show }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Horse Class: </strong> {{ horse.horse_class }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Level: </strong> {{ horse.level }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>European Opt.: </strong> {{ horse.european_opt }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Foal Date: </strong> {{ horse.foal_date }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Year: </strong> {{ horse.year }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
              </v-row>

              <v-row>
                <v-col cols="12" sm="6" md="6">
                  <v-list-item>
                    <v-list-item-content>
                      <strong>Nominator </strong> {{ horse.nominator }}
                    </v-list-item-content>
                  </v-list-item>
                </v-col>
                <v-col> 
                  <v-dialog v-model="dialog">
                      <template v-slot:activator="{ props }">
                        <v-btn color="#c9e0ec" v-bind="props">
                          Flag Horse: {{ horse.name }}
                        </v-btn>
                      </template>
                    <v-card
                      class="mx-auto"
                      width="75%"
                      color="white"
                      elevation="3"
                      style="border-radius: 10px"
                    >
                      <h2 class="text-h4 mt-4 mb-4" style="text-align: center">
                        Flag Horse: {{ horse.name }}
                      </h2>
                          <v-form ref="form" lazy-validation color="#212121">
          
                            <v-select
                              class="mx-6"
                              v-model="flaggedHorse.select"
                              :items="items"
                              label="Which field would you like to suggest a change for?"
                              required
                            ></v-select>

                            <v-text-field
                              class="mx-6"
                              v-model="flaggedHorse.change"
                              :counter="10"
                              label="Suggested Change"
                              required
                            ></v-text-field>
                            <p style="text-align: center">
                              <v-btn class="mr-14 mb-6" color="#c9e0ec" @click="submitChanges"
                                >Submit Changes for Review</v-btn
                              >
                              <v-btn class="mr-2 mb-6" color="#c9e0ec" @click="dialog = false"
                                >Close</v-btn
                              >
                            </p>
                        </v-form>
                      </v-card>
                    </v-dialog>
                </v-col>
              </v-row>
            </v-list>
          </v-card>
          <v-btn class="mt-8" color="white" @click="$router.push('/result')"
            >Go Back</v-btn
          >
        </v-col>
      </v-row>
    </v-card>
  </v-main>
  
</template>

<script>
import axios from "axios";
import api from "../../../api/systemApi";

export default {
  name: "HorseDetail",
  props: ["horseDetails", "itemDetails"],
  data() {
    return {
      id: this.$route.params.id,
      horse: {},
      alert: false,
      flaggedHorse: {
        change: "",
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
        "Foal Date",
        "European Opt",
        "Year",
        "Nominator"
      ],
      dialog: false,
    };
  },

  mounted() {
    axios
      .get("https://bmwphd-be.herokuapp.com/horses/" + this.id)
      .then((response) => {
        this.horse = response.data.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  methods: {
    async submitChanges() {
      if (
        this.flaggedHorse.select == this.items[0] ||
        this.flaggedHorse.change == ""
      ) {
        alert("please fill out all fields");
      } else {
        console.log(this.flaggedHorse);
        const hID = this.horse.id;
        await api.postFlaggedHorse(this.flaggedHorse, hID);
        this.flaggedHorse.select = this.items[0];
        this.flaggedHorse.change = "";
        this.dialog = false;
        this.alert = true;
      }
    },
  }
};
</script>

<style>
.v-subheader {
  color: #333;
  font-size: 16px;
  font-weight: bold;
  margin: 20px 0 10px 0;
  text-transform: uppercase;
}

.v-list-item {
  padding-top: 4px;
  padding-bottom: 4px;
}

.v-list-item-content {
  font-size: 14px;
  line-height: 1.4;
}
</style>

<template>
  <v-main>
    <v-container fill-height align-center>
      <v-row justify-center align-center>
        <v-col>
          <v-card class="mx-auto" max-width="600">
            <v-card-title class="text-center">
              Horse Detailed Information
            </v-card-title>
            <v-list dense>
              <v-list-item>
                <v-list-item-content>
                  Name: {{ horse.name }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Sire: {{ horse.sire1 }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Dam: {{ horse.dam1 }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Dam Sire: {{ horse.sire2 }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  2nd Dam: {{ horse.dam2 }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Maneuver Score: {{ horse.maneuver_score }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  LTE: {{ horse.lte }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content> PE: {{ horse.pe }} </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Show: {{ horse.show }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Horse Class: {{ horse.horse_class }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Level: {{ horse.level }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Foal Date: {{ horse.foal_date }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  European OPT: {{ horse.european_opt }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Year: {{ horse.year }}
                </v-list-item-content>
              </v-list-item>
              <v-list-item>
                <v-list-item-content>
                  Nominator: {{ horse.nominator }}
                </v-list-item-content>
              </v-list-item>
            </v-list>
          </v-card>
          <v-btn color="primary" @click="$router.push('/result')"
            >Go Back</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-main>
</template>

<script>
import axios from "axios";

export default {
  name: "HorseDetail",
  props: ["horseDetails"],
  data() {
    return {
      id: this.$route.params.id,
      horse: {},
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

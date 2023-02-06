import App from "./App.vue";
import { createApp } from "vue";
import { registerPlugins } from "./plugins/index.js";
import vuetify from "./plugins/vuetify";
import router from "./router";
import axios from "axios";
import VueAxios from "vue-axios";
import { VueClipboard } from "@soerenmartius/vue3-clipboard";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

const app = createApp(App);

registerPlugins(app);
app
  .use(VueAxios, axios)
  .use(router)
  .use(vuetify)
  .component("EasyDataTable", Vue3EasyDataTable)
  .use(VueClipboard)
  .mount("#app");

import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from './plugins/index.js'
import vuetify from './plugins/vuetify'
import router from'./router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

const host = '0.0.0.0';
const port = process.env.PORT || 3000;
app.listen(port, host, function() {
  console.log("Server started.......");
});

registerPlugins(app)
app
  .use(VueAxios, axios)
  .use(router)
  .use(vuetify)
  .mount('#app')




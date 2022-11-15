import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from './plugins/index.js'
import vuetify from './plugins/vuetify'
import router from'./router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)
app.listen(process.env.PORT || 3001, '0.0.0.0', () => {
  console.log("Server is running.");
});


registerPlugins(app)
app
  .use(VueAxios, axios)
  .use(router)
  .use(vuetify)
  .mount('#app')




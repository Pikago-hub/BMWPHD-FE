import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from './plugins/index.js'
import vuetify from './plugins/vuetify'
import router from'./router'
import axios from 'axios'
import VueAxios from 'vue-axios'

const app = createApp(App)

const PORT = process.env.PORT || 3666
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})

registerPlugins(app)
app
  .use(VueAxios, axios)
  .use(router)
  .use(vuetify)
  .mount('#app')




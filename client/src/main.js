import App from './App.vue'
import { createApp } from 'vue'
import { registerPlugins } from './plugins/index.js'
import vuetify from './plugins/vuetify'

const app = createApp(App)

registerPlugins(app)

app
  .use(vuetify)
  .mount('#app')

import { createRouter, createWebHistory} from 'vue-router'

import common from './common.js'



const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        ...common
    ]
})


export default router
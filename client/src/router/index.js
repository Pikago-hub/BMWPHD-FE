import { createRouter, createWebHistory} from 'vue-router'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'

import common from './common.js'


const router = createRouter({
    history: createWebHistory(),
    routes:[
        ...common
    ]
})

NProgress.inc(0.2)
NProgress.configure({ easing: 'ease', speed: 600, showSpinner: false })


router.beforeEach((to, from, next) => {
    NProgress.start()
    if (to.meta.title) {
        document.title = to.meta.title
    } else {
        document.title = "BMWPHD"
    }
    next()
})

router.afterEach(() => {
    NProgress.done()
})

export default router
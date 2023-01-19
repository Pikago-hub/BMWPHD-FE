import { createWebHistory, createRouter } from "vue-router";
import Home from '../FE/Views/Home.vue'
import About from '../FE/Views/About.vue'
import Login from '../FE/Views/Login.vue'
import Result from '../FE/Views/Result.vue'
import ManageUsers from '../FE/Views/ManageUsers.vue'
import PageNotFound from '../FE/Views/PageNotFound.vue'

const routes = [
    {
        path: '/home',
        name: 'Home',
        meta: {title: "Home"},
        component: Home
    },
    {
        path: '/',
        name: 'Home2',
        component: Home
    }
    {
        path: '/result',
        name: 'result',
        meta: {title: "Result"},
        component: Result
    },
    {
        path: '/login',
        name: 'login',
        meta: {title: "Login Page"},
        component: Login
    },
    {
        path: '/about',
        name: 'about',
        meta: {title: "about"},
        component: About
    },
    {
        path: '/manageusers',
        name: 'manageusers',
        meta: {title: "manageusers"},
        component: ManageUsers
    },
    {   path: '/:pathMatch(.*)*', 
        component: PageNotFound
        // redirect:'/Page404'
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
    // routes:[
    //     ...common,
    //     ...asnycRouters,
    //     {path:'/:pathMatch(.*)*', redirect:'/404'}
    // ]
  });
  
  export default router;

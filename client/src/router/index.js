import { createWebHistory, createRouter } from "vue-router";
import Home from '../FE/Views/Home.vue'
import About from '../FE/Views/About.vue'
import Login from '../FE/Views/Login.vue'
import Result from '../FE/Views/Result.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        meta: {title: "Home"},
        component: Home
    },
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
        path: '/:pathMatch(.*)*',
        component: Home,
      },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
  });
  
  export default router;

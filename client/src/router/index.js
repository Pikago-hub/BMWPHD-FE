import { createWebHistory, createRouter } from "vue-router";
import Home from '../FE/Views/Home.vue'
import About from '../FE/Views/About.vue'
import Login from '../FE/Views/Login.vue'
import Result from '../FE/Views/Result.vue'
import ManageUsers from '../FE/Views/ManageUsers.vue'
import PageNotFound from '../FE/Views/PageNotFound.vue'
import SignUp from '../FE/Views/SignUp.vue'

const routes = [
    {
        path: '/',
        name: 'home',
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
        path: '/signup',
        name: 'signup',
        meta: {title: "Signup Page"},
        component: SignUp
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
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
    // routes:[
    //     ...basicRoutes,
    // ]
  });

  export async function setupRouter(app) {
    if (utils.cacheUtils.get('login_token')?.token) {
      // get user info and save it to Pinia, then we can have access to user's permission list in different components
      const userStore = useUserStore();
      await userStore.getUserInfo();
  
      autoloadDynamicRoutes(router); // add more route records to the router, e.g., /users and /orders
    }
    setupGuard(router); // set up router guard
    // app.use(router);
  }
  
  export default router;

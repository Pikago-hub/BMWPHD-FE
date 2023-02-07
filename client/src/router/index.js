import { createWebHistory, createRouter } from "vue-router";
import Home from "../FE/Views/Home.vue";
import About from "../FE/Views/About.vue";
import Login from "../FE/Views/Login.vue";
import Result from "../FE/Views/Result.vue";
import ManageRequests from "../FE/Views/ManageRequests.vue";
import ManageUsers from "../FE/Views/ManageUsers.vue"
import PageNotFound from "../FE/Views/PageNotFound.vue";

import basicRoutes from './basicRoutes';
import setupGuard from './guard';
import useUserStore from '../store/index';
import autoloadDynamicRoutes from './loadDynamicRoutes';
import authService from '../services/auth.service';
import authHeader from '../services/auth-header';
import userService from '../services/user.service';

const routes = [
  {
    path: "/",
    name: "home",
    meta: { title: "Home" },
    component: Home,
  },
  {
    path: "/result",
    name: "result",
    meta: { title: "Result" },
    component: Result,
  },
  {
    path: "/login",
    name: "login",
    meta: { title: "Login Page" },
    component: Login,
  },
  {
    path: "/about",
    name: "about",
    meta: { title: "about" },
    component: About,
  },
  {
    path: "/managerequests",
    name: "managerequests",
    meta: { title: "managerequests" },
    component: ManageRequests,
  },
  {
    path: "/manageusers",
    name: "manageusers",
    meta: { title: "manageusers" },
    component: ManageUsers,
  },
  { path: "/:pathMatch(.*)*", component: PageNotFound },
];

// router.beforeEach((to, from, next) => {
//   const publicPages = ["/login", "/home", "/about", "/result"];
//   const authRequired = !publicPages.includes(to.path);
//   const loggedIn = localStorage.getItem("user");

//   if (authRequired && !loggedIn) {
//     return next("/login");
//   } else {
//     next();
//   }
// });

const router = createRouter({
  history: createWebHistory(),
  routes,
  // routes:[
  //     ...basicRoutes,
  // ]
});

export async function setupRouter(app) {
  if (utils.cacheUtils.get("login_token")?.token) {
    // get user info and save it to Pinia, then we can have access to user's permission list in different components
    const userStore = useUserStore();
    await userStore.getUserInfo();

    autoloadDynamicRoutes(router); // add more route records to the router, e.g., /users and /orders
  }
  setupGuard(router); // set up router guard
  // app.use(router);
}

export default router;

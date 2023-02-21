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

const router = createRouter({
  history: createWebHistory(),
  routes,
  // routes:[
  //     ...basicRoutes,
  // ]
});


router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/", "/about", "/result"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  }
  else {
    next();
  }
});

export default router;

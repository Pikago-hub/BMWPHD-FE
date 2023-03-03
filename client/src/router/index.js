import { createWebHistory, createRouter } from "vue-router";
import Home from "../FE/Views/Home.vue";
import About from "../FE/Views/About.vue";
import Login from "../FE/Views/Login.vue";
import Result from "../FE/Views/Result.vue";
import ManageRequests from "../FE/Views/ManageRequests.vue";
import ManageUsers from "../FE/Views/ManageUsers.vue";
import PageNotFound from "../FE/Views/PageNotFound.vue";
import horseDetail from "../FE/Views/components/horseDetail.vue";

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
    path: "/horseDetail",
    name: "horsedetail",
    meta: { title: "about" },
    component: horseDetail,
  },
  {
    path: "/managerequests",
    name: "managerequests",
    meta: { title: "managerequests" },
    component: ManageRequests,
    beforeEnter: (to, from, next) => {
      if (isAdmin() == true) {
        next();
      } else {
        return next("/login");
      }
    },
  },
  {
    path: "/manageusers",
    name: "manageusers",
    meta: { title: "manageusers" },
    component: ManageUsers,
    beforeEnter: (to, from, next) => {
      if (isAdmin() == true) {
        next();
      } else {
        return next("/login");
      }
    },
  },
  {
    name: "horseDetail",
    path: "/horse/:id",
    component: horseDetail,
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

function isAdmin() {
  const user = localStorage.getItem("user");
  // console.log(user);
  // const role = user.userInfo.role;
  if (user.includes("Admin")) {
    return true;
  } else {
    return false;
  }
}

router.beforeEach((to, from, next) => {
  const publicPages = ["/login", "/", "/about", "/result"];
  const authRequired = !publicPages.includes(to.path);
  const loggedIn = localStorage.getItem("user");

  if (authRequired && !loggedIn) {
    return next("/login");
  } else {
    next();
  }
});

export default router;

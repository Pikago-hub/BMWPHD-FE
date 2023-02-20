const basicRoutes = [
  {
    path: "/",
    name: "home",
    meta: {
      requiresAuth: false,
    },
    component: () => import("../FE/Views/Home.vue"),
  },
  {
    path: "/login",
    name: "login",
    meta: {
      requiresAuth: false,
      visitorOnly: true,
    },
    component: () => import("../FE/Views/Login.vue"),
  },
  {
    path: "/about",
    name: "about",
    meta: {
      requiresAuth: false,
    },
    component: () => import("../FE/Views/About.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    name: "pageNotFound",
    component: () => import("../FE/Views/PageNotFound.vue"),
  },
];

export default basicRoutes;

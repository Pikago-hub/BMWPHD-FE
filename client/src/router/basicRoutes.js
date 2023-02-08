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
  /*
    {
      path: "/DirectorRequestManagement",
      //name: 'orders  view',
      //meta: { title: 'Requests', permissions: ['director'] },
      meta: { requiresAuth: false },
      component: () => import("@/views/DirectorReqMngmt.vue"),
    },
    
    {
      path: "/UserManagement",
      name: "director user management",
      meta: { requiresAuth: false },
      component: () => import("@/views/UserManagement.vue"),
    },
    {
      path: '/RequestLandingPage',
      name: 'landing',
      meta: { requiresAuth: false },
      component: () => import('@/views/RequestLandingPage.vue'),
    },
    {
      path: '/CustomerRequestForm',
      name: 'customer dashboard',
      meta: { requiresAuth: false },
      component: () => import('@/views/CustomerReqForm.vue'),
    },
    {
      path: '/SuperFrogRequestManagement',
      name: 'superfrog dashboard',
      meta: { requiresAuth: false },
      component: () => import('@/views/SuperFrogReqMngmt.vue'),
    },
    */
  {
    path: "/:pathMatch(.*)",
    name: "pageNotFound",
    component: () => import("../FE/views/PageNotFound.vue"),
  },
];

export default basicRoutes;

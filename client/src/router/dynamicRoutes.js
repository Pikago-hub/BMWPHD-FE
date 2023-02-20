// See loadDynamicRoutes.js for how to filter views based on user permissions

const dynamicRoutes = [
  {
    path: "/result",
    name: "result",
    meta: { title: "Result" },
    component: () => import("../FE/Views/Result.vue"),
  },
  {
    path: "/managerequests",
    name: "managerequests",
    meta: { title: "managerequests" },
    component: () => import("../FE/Views/ManageRequests.vue"),
  },
  {
    path: "/manageusers",
    name: "manageusers",
    meta: { title: "manageusers" },
    component: () => import("../FE/Views/ManageUsers.vue"),
  },
];

export default dynamicRoutes;

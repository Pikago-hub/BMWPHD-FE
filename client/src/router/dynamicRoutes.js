// Not all users can see the views defined here, e.g., a user must have 'orders' permission to see /orders
// See loadDynamicRoutes.js for how to filter views based on user permissions

const dynamicRoutes = [
  {
    path: "/manageusers",
    name: "user  management",
    meta: { title: "Users", permissions: ["admin"] },
    component: () => import("../FE/Views/ManageUsers.vue"),
  },
];

export default dynamicRoutes;

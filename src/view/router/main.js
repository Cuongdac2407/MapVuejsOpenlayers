const home = [
  {
    path: "/login",
    component: () => import("../pages/home/users/login.vue"),
  },
  {
    path: "/dashbroad",
    component: () => import("../dashbroads/DashBroad.vue"),
  },
  {
    path: "/map",
    component: () => import("../pages/home/users/map.vue"),
  },
  {
    path: "/layer",
    component: () => import("../pages/home/users/LayerQhc.vue"),
  },
];
export default home;

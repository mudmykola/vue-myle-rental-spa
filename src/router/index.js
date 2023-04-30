import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main"},
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/:catchAll(.*)",
    name: "noRoute",
    component: () => import("../views/ErrorPage.vue"),
  },
];
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL, {mode: 'history'}),
  routes,
});


export default router;
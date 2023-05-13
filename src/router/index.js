import { createRouter, createWebHistory } from "vue-router";
import About from "@/components/About.vue";
import Features from "@/components/Features.vue";
const routes = [
  {
    path: "/",
    name: "home",
    meta: { layout: "main"},
    component: () => import("../views/Home.vue"),
  },

  {
    path: "/features",
    name: "features",
    meta: { layout: "main" },
    component: Features,
  },
  {
    path: "/about",
    name: "about",
    meta: { layout: "main" },
    component: About,
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
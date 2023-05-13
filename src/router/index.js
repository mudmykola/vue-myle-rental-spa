import {createRouter, createWebHistory} from "vue-router";
import About from "@/components/About.vue";
import Features from "@/components/Features.vue";
import Services from "@/components/Services.vue";
import Work from "@/components/Work.vue";
import Contacts from "@/components/Contacts.vue";

const routes = [
    {
        path: "/",
        name: "home",
        meta: {layout: "main"},
        component: () => import("../views/Home.vue"),
    },

    {
        path: "/features",
        name: "features",
        meta: {layout: "main"},
        component: Features,
    },
    {
        path: "/technology",
        name: "technology",
        meta: {layout: "main"},
        component: Services,
    },
    {
        path: "/drive",
        name: "drive",
        meta: {layout: "main"},
        component: Work,
    },
    {
        path: "/about",
        name: "about",
        meta: {layout: "main"},
        component: About,
    },
    {
        path: "/contact",
        name: "contact",
        meta: {layout: "main"},
        component: Contacts,
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
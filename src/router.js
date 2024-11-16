import { createRouter, createWebHistory } from "vue-router";
import HomeView from "./views/HomeView.vue";
import OpconView from "./views/OpconView.vue";
import EarthView from "./views/EarthView.vue";

const routes = [
  {
    path: "/primevue-table-demo",
    name: "home",
    component: HomeView,
  },
  {
    path: "/opcon",
    name: "opcon",
    component: OpconView,
  },
  {
    path: "/earth",
    name: "earth",
    component: EarthView,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

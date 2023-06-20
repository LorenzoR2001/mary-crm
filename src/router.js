import { createWebHistory, createRouter } from "vue-router";
import Homepage from "./components/Homepage.vue";
import Services from "./components/Services.vue";
import Works from "./components/Works.vue";

const routes = [
  {
    path: "/",
    name: "homepage",
    component: Homepage,
  },
  {
    path: "/services",
    name: "services",
    component: Services,
  },
  {
    path: "/works",
    name: "works",
    component: Works,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

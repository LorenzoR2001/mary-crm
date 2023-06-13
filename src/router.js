import { createWebHistory, createRouter } from "vue-router";
import Homepage from "./components/Homepage.vue";
const routes = [
  {
    path: "/",
    name: "homepage",
    component: Homepage,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});
export default router;

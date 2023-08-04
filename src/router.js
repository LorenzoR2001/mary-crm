import { createWebHistory, createRouter } from "vue-router";
import Homepage from "./components/Homepage.vue";
import Services from "./components/Services.vue";
import Works from "./components/Works.vue";
const path='7Xv3nH6bCkZ8YsKtDqMw9P4GjLcWxR';
 const routes = [
  {
    path: "/"+path,
    name: "homepage",
    component: Homepage,
  },
  {
    path:   "/"+path+"/services",
    name: "services",
    component: Services,
  },
  {
    path:  "/"+path+"/works",
    name: "works",
    component: Works,
  },
];
const router = createRouter({
  history: createWebHistory(),
  routes,  base: "/"+path+"/",
  mode:"history"

});
export default router;

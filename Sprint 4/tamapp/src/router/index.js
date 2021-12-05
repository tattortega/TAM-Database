import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contactar_soporte from "../views/Contactar_soporte.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/contactarsoporte",
    name: "Contactar_soporte",
    component: Contactar_soporte,
  },

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

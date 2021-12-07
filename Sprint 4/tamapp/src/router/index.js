import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Contactar_soporte from "../views/Contactar_soporte.vue"
import Consultas from "../views/Consultas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },

  {
    path: "/Contactanos",
    name: "Contactar_soporte",
    component: Contactar_soporte,
  },

  {
    path: "/Consultas",
    name: "Consultas",
    component: Consultas,
  }

];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

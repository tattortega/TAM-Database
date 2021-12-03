import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import IngresarDatosBiologicos from "../views/IngresarDatosBiologicos.vue";
import Consultas from "../views/Consultas.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/IngresarDatosBiologicos",
    name: "IngresarDatosBiologicos",
    component: IngresarDatosBiologicos,
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

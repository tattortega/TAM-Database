import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue";
import Contactar_soporte from "../views/Contactar_soporte.vue"
import Consultas from "../views/Consultas.vue";
import IngresarDatosBiologicos from "../views/IngresarDatosBiologicos.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Login",
    component: Login,
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
  },

  {
    path: "/IngresarDatosBiologicos",
    name: "IngresarDatosBiologicos",
    component: IngresarDatosBiologicos,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

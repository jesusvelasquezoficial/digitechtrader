import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recargas from "../views/Recargas.vue";
import Freefire from "../views/Freefire.vue";
import Remesas from "../views/Remesas.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/recargas",
    name: "recargas",
    component: Recargas,
  },
  {
    path: "/remesas",
    name: "remesas",
    component: Remesas,
  },
  {
    path: "/recargas/free-fire",
    name: "/recargasfreefire",
    component: Freefire,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView();
  }
});

export default router;
import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Recargas from "../views/Recargas.vue";
import Freefire from "../views/Freefire.vue";
import Pubg from "../views/Pubg.vue";
import Callofduty from "../views/Callofduty.vue";
import Lol from "../views/Lol.vue";
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
    component: Home,
  },
  {
    path: "/recargas/free-fire",
    name: "freefire",
    component: Freefire,
  },
  {
    path: "/recargas/pubg-mobile",
    name: "pubg",
    component: Pubg,
  },
  {
    path: "/recargas/call-of-duty",
    name: "callofduty",
    component: Callofduty,
  },
  {
    path: "/recargas/league-of-legends",
    name: "leagueoflegends",
    component: Lol,
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
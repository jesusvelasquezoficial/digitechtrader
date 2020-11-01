import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Shop from "../views/Shop.vue";
import Factura from "../views/Factura.vue";

Vue.use(VueRouter);

const routes = [{
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/tienda",
    name: "tienda",
    component: Shop,
    children: [
      { path: "/tienda/:categoria", component: Shop },
    ],
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () =>
    //   import ( /* webpackChunkName: "about" */ '../views/Shop.vue')
  },
  {
    path: "/factura",
    name: "factura",
    component: Factura
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
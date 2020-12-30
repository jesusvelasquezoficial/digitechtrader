import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    tasaPaypal: 1000000,
    tasaDolar: 1300000,
    tasaAirTM: 4.3,
    tasaPaypalSell: 1300000,
    tasaDolarSell: 1400000,
    tasaAirTMSell: 4.3,
    remesa: [],
    carrito: [],
    productos: [],
    recargas: [{
        nombre: "Free Fire",
        img: "freefire.png",
        tipos: [{
            cant: 100,
            bonus: 10,
            precio: 1.0,
          },
          {
            cant: 310,
            bonus: 31,
            precio: 3.0,
          },
          {
            cant: 520,
            bonus: 52,
            precio: 5.0,
          },
          {
            cant: 1060,
            bonus: 106,
            precio: 10.0,
          },
          {
            cant: 2180,
            bonus: 218,
            precio: 20.0,
          },
          {
            cant: 5600,
            bonus: 560,
            precio: 50.0,
          },
        ],
      },
      {
        nombre: "Pubg Mobile",
        img: "pubg.png",
        tipos: [{
            cant: 60,
            bonus: 0,
            precio: 1.19,
          },
          {
            cant: 300,
            bonus: 0,
            precio: 5.49,
          },
          {
            cant: 600,
            bonus: 0,
            precio: 10.99,
          },
          {
            cant: 1500,
            bonus: 0,
            precio: 26.49,
          },
          {
            cant: 3000,
            bonus: 0,
            precio: 52.99,
          },
          {
            cant: 6000,
            bonus: 0,
            precio: 102.99,
          },
        ],
      },
      {
        nombre: "Calll of Duty",
        img: "callofduty.jpg",
        tipos: [{
            cant: 80,
            bonus: 0,
            precio: 1.19,
          },
          {
            cant: 400,
            bonus: 0,
            precio: 5.49,
          },
          {
            cant: 800,
            bonus: 0,
            precio: 10.99,
          },
          {
            cant: 2000,
            bonus: 0,
            precio: 26.49,
          },
          {
            cant: 4000,
            bonus: 0,
            precio: 52.99,
          },
          {
            cant: 8000,
            bonus: 0,
            precio: 102.99,
          },
        ],
      },
      {
        nombre: "League of Legends",
        img: "lol.png",
        tipos: [{
            cant: 710,
            bonus: 0,
            precio: 6.19,
          },
          {
            cant: 1500,
            bonus: 0,
            precio: 12.29,
          },
          {
            cant: 2310,
            bonus: 0,
            precio: 18.39,
          },
          {
            cant: 4070,
            bonus: 0,
            precio: 30.59,
          },
          {
            cant: 8470,
            bonus: 0,
            precio: 61.09,
          },
          {
            cant: 13815,
            bonus: 0,
            precio: 95.99,
          },
        ],
      },
    ],
  },
  getters: {
    getRemesa: (state) => {
      return state.remesa;
    },
    getTasaDolar: (state) => {
      return state.tasaDolar;
    },
    getTasaPaypal: (state) => {
      return state.tasaPaypal;
    },
    getTasaAirTM: (state) => {
      return state.tasaAirTM;
    },
    getTasaDolarSell: (state) => {
      return state.tasaDolarSell;
    },
    getTasaPaypalSell: (state) => {
      return state.tasaPaypalSell;
    },
    getTasaAirTMSell: (state) => {
      return state.tasaAirTMSell;
    },
    getCantItemsInCart: (state) => {
      return state.carrito.length;
    },
    getProductInCart: (state) => {
      return state.carrito;
    },
    getFreefire: (state) => {
      return state.recargas[0];
    },
    getSubTotal(state) {
      var precioProducto = 0;
      state.carrito.forEach((element) => {
        var precio = element.precio * element.cant;
        precioProducto += precio;
        return precioProducto;
      });
      return precioProducto;
    },
  },
  mutations: {
    setTasas(state, obj) {
      var {
        tasaDolar,
        tasaPaypal,
        tasaAirTM,
        tasaPaypalSell,
        tasaDolarSell,
        tasaAirTMSell,
      } = obj.form;
      console.log(JSON.stringify(tasaDolar));
      console.log(JSON.stringify(tasaPaypal));
      console.log(JSON.stringify(tasaAirTM));
      console.log(JSON.stringify(tasaPaypalSell));
      console.log(JSON.stringify(tasaDolarSell));
      console.log(JSON.stringify(tasaAirTMSell));
      state.tasaPaypal = tasaPaypal;
      state.tasaDolar = tasaDolar;
      state.tasaAirTM = tasaAirTM;
      state.tasaPaypalSell = tasaPaypalSell;
      state.tasaDolarSell = tasaDolarSell;
      state.tasaAirTMSell = tasaAirTMSell;
    },
    setRemesa(state, obj) {
      var remesa = obj.form;
      console.log(JSON.stringify(remesa));
      state.remesa = remesa;
    },
    restarCantProduct(state, id) {
      var producto = state.carrito[id];
      producto.cant -= producto.cant > 1 ? 1 : 0;
    },
    sumarCantProduct: function(state, id) {
      var producto = state.carrito[id];
      producto.cant += producto.cant < 100 ? 1 : 0;
    },
    addProductoAlCarrito(state, producto) {
      producto = JSON.parse(producto);
      var productoInCart = state.carrito.find((e) => {
        return e.nombre == producto.nombre;
      });
      if (productoInCart) {
        // alert(`Agrego ${producto.cant} ${producto.nombre} al Carrito`);
        producto.cant = productoInCart.cant += producto.cant;
      } else {
        state.carrito.push(producto);
        // alert(`Agrego ${producto.cant} ${producto.nombre} al Carrito`);
      }
    },
    delProductCart(state, id) {
      state.carrito.splice(id, 1);
    },
    cleanCart(state) {
      state.carrito = [];
    },
    cleanRemesa(state) {
      state.remesa = [];
    },
  },
  actions: {},
  modules: {},
});
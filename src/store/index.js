import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    productos: [],
  },
  getters: {
    getCantItemsInCart: (state) => {
      return state.carrito.length;
    },
    getProductInCart: (state) => {
      return state.carrito;
    },
    getProduct: (state) => {
      return state.productos;
    },
    getSubTotal(state) {
      var precioProducto = 0;
      state.carrito.forEach((element) => {
        var precio = element.precio * element.cant;
        precioProducto += precio;
        return precioProducto;
      });
      return precioProducto;
    }
  },
  mutations: {
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
    }
  },
  actions: {},
  modules: {},
});
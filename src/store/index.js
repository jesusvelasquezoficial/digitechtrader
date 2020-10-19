import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: [],
    productos: [{
        categoria: "licores",
        imagen: "1",
        alt: "Image",
        nombre: "Anis Cartujo 1L",
        precio: 7.0,
        cant: 1,
      },
      {
        categoria: "licores",
        imagen: "2",
        nombre: "Ron Cacique 750ml",
        precio: 7.0,
        cant: 1,
      },
      {
        categoria: "licores",
        imagen: "3",
        nombre: "Cerveza Corona",
        precio: 2.5,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "4",
        nombre: "Arroz Primor",
        precio: 3.5,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "5",
        nombre: "Azucar Konfit",
        precio: 1.5,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "6",
        nombre: "Sal Celestial",
        precio: 2.0,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "7",
        nombre: "Cafe Amanecer",
        precio: 5.5,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "8",
        nombre: "Leche Galait",
        precio: 4.0,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "9",
        nombre: "Corn Flakes",
        precio: 2.0,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "10",
        nombre: "Mantequilla Mavesa",
        precio: 2.5,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "11",
        nombre: "Mayonesa Mavesa",
        precio: 2.5,
        cant: 1,
      },
      {
        categoria: "alimentos",
        imagen: "12",
        nombre: "Salsa de Tomate",
        precio: 2.0,
        cant: 1,
      },
      {
        categoria: "electrodomesticos",
        imagen: "13",
        nombre: 'Tv Samsung 4K 55"',
        precio: 450.0,
        cant: 1,
      },
      {
        categoria: "electrodomesticos",
        imagen: "14",
        nombre: "Nevera 300L",
        precio: 319.99,
        cant: 1,
      },
      {
        categoria: "electrodomesticos",
        imagen: "15",
        nombre: "Congelador 200L",
        precio: 249.99,
        cant: 1,
      },
      {
        categoria: "electrodomesticos",
        imagen: "16",
        nombre: "Licuadora 10 Vel..",
        precio: 120.0,
        cant: 1,
      },
      {
        categoria: "aseo-personal",
        imagen: "17",
        nombre: "Shampu Dove",
        precio: 16.0,
        cant: 1,
      },
      {
        categoria: "aseo-personal",
        imagen: "18",
        nombre: "Pasta Colgate",
        precio: 3.5,
        cant: 1,
      },
      {
        categoria: "aseo-personal",
        imagen: "19",
        nombre: "Condones Durex",
        precio: 2.5,
        cant: 1,
      },
      {
        categoria: "aseo-personal",
        imagen: "20",
        nombre: "Desodorante Speed Stick",
        precio: 1.5,
        cant: 1,
      },
      {
        categoria: "aseo-del-hogar",
        imagen: "21",
        nombre: "Cloro Desinfectante",
        precio: 8.0,
        cant: 1,
      },
      {
        categoria: "aseo-del-hogar",
        imagen: "22",
        nombre: "Ajax Super Degreaser",
        precio: 2.0,
        cant: 1,
      },
      {
        categoria: "aseo-del-hogar",
        imagen: "23",
        nombre: "Ajax Triple Acción",
        precio: 2.0,
        cant: 1,
      },
      {
        categoria: "aseo-del-hogar",
        imagen: "24",
        nombre: "Tide",
        precio: 7.0,
        cant: 1,
      },
      {
        categoria: "celulares",
        imagen: "25",
        nombre: "Iphone X",
        precio: 999.99,
        cant: 1,
      },
      {
        categoria: "celulares",
        imagen: "26",
        nombre: "Xiaomi A9 6GB/64RAM",
        precio: 130.00,
        cant: 1,
      },
      {
        categoria: "mascotas",
        imagen: "27",
        nombre: "Perrarina Dog Chow",
        precio: 27.00,
        cant: 1,
      },
      {
        categoria: "mascotas",
        imagen: "28",
        nombre: "Gatarina Mirringo",
        precio: 25.00,
        cant: 1,
      },
      {
        categoria: "mascotas",
        imagen: "29",
        nombre: "Pelota para Perros",
        precio: 5.00,
        cant: 1,
      },
      {
        categoria: "muebles",
        imagen: "30",
        nombre: "Mesa de Oficina",
        precio: 250.00,
        cant: 1,
      },
      {
        categoria: "muebles",
        imagen: "31",
        nombre: "Mesa de Oficina L",
        precio: 350.00,
        cant: 1,
      },
      {
        categoria: "muebles",
        imagen: "32",
        nombre: "Mesa de Comedor",
        precio: 500.00,
        cant: 1,
      },
    ],
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
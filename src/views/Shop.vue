<template>
  <div class="shop">
    <b-container fluid="md" class="mt-3">
      <!-- Buscador de Prodcutos -->
      <b-row>
        <b-col class="text-left" cols="0" sm="4" md="3">
          <small>
            <b-breadcrumb class="p-2 pl-3">
              <b-breadcrumb-item to="/">
                <b-icon icon="house-door" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon>
                inicio
              </b-breadcrumb-item>
              <b-breadcrumb-item to="/tienda">
                <!-- <b-icon icon="shop" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> -->
                tienda
              </b-breadcrumb-item>
              <b-breadcrumb-item to="">{{$route.params.categoria}}</b-breadcrumb-item>
            </b-breadcrumb>
          </small>
        </b-col>
        <b-col cols="12" sm="8" md="9">
          <b-input-group prepend="Buscar">
            <b-form-input type="search" id="search" v-model="buscar" placeholder="Producto"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <!-- GRID de Productos -->
      <b-row class="mt-3">
        <!-- Aside Categorias Productos -->
        <b-col class="d-none d-sm-block" sm="4" md="3" lg="3">
          <b-nav class="text-left" vertical>
            <b-nav-text><b class="txt-categorias">Categorias</b></b-nav-text>
            <b-nav-item to="/tienda/alimentos">Alimentos</b-nav-item>
            <b-nav-item to="/tienda/aseo-personal">Aseo Personal</b-nav-item>
            <b-nav-item to="/tienda/aseo-del-hogar">Aseo del Hogar</b-nav-item>
            <b-nav-item to="/tienda/electrodomesticos">Electrodomesticos</b-nav-item>
            <b-nav-item to="/tienda/licores">Licores</b-nav-item>
          </b-nav>
        </b-col>
        <!-- Lista de Productos -->
        <b-col sm="8" md="9" lg="9">
          <b-row class="text-left">
            <!-- Sin Productos -->
            <b-col class="my-5 text-center" v-if="filtrarProductos == '' ">
              <h5>El producto <b>"{{buscar}}"</b> no esta en inventario</h5>
            </b-col>
            <!-- Con Productos -->
            <b-col md="6" lg="4" v-for="(producto, index) in filtrarProductos" :key="index">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col cols="6" sm="6" md="12">
                    <img
                      :src="getImgProduct(producto.imagen)"
                      :alt="producto.alt"
                      class="rounded-0"
                      width="100%"
                    />
                  </b-col>
                  <b-col cols="6" sm="6" md="12">
                    <b-card-body>
                       <b-card-sub-title class="mb-2">
                        {{ producto.nombre }}
                      </b-card-sub-title>
                      <b-card-title>
                        $ {{ producto.precio.toFixed(2) }}
                      </b-card-title>
                       <b-card-text>
                       <b-button-group class="d-flex roundered">
                          <b-button @click="restarCantProduct(index)" variant="outline-danger"><b-icon icon="cart-dash"></b-icon></b-button>
                           <b-button class="w-100"  @click="setProductToCart(index)" variant="outline-success">{{producto.cant}}</b-button>
                            <b-button @click="sumarCantProduct(index)"  variant="outline-primary"><b-icon icon="cart-plus"></b-icon></b-button>
                       </b-button-group>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Tienda",
  data() {
    return {
      buscar: "",
      cart: [],
      productos: [
        {
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
          precio: 450.00,
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
          precio: 120.00,
          cant: 1,
        },
        {
          categoria: "aseo-personal",
          imagen: "17",
          nombre: "Shampu Dove",
          precio: 16.00,
          cant: 1,
        },
        {
          categoria: "aseo-personal",
          imagen: "18",
          nombre: "Pasta Colgate",
          precio: 3.50,
          cant: 1,
        },
        {
          categoria: "aseo-personal",
          imagen: "19",
          nombre: "Condones Durex",
          precio: 2.50,
          cant: 1,
        },
        {
          categoria: "aseo-personal",
          imagen: "20",
          nombre: "Desodorante Speed Stick",
          precio: 1.50,
          cant: 1,
        },
        {
          categoria: "aseo-del-hogar",
          imagen: "21",
          nombre: "Cloro Desinfectante",
          precio: 8.00,
          cant: 1,
        },
        {
          categoria: "aseo-del-hogar",
          imagen: "22",
          nombre: "Ajax Super Degreaser",
          precio: 2.00,
          cant: 1,
        },
        {
          categoria: "aseo-del-hogar",
          imagen: "23",
          nombre: "Ajax Triple acción",
          precio: 2.00,
          cant: 1,
        },
        {
          categoria: "aseo-del-hogar",
          imagen: "24",
          nombre: "Tide",
          precio: 7.00,
          cant: 1,
        },
      ],
    };
  },
  methods: {
    getImgProduct(id) {
      var images = require.context("@/assets/ProductosOpt/", true, /\.png$/);
      return images("./" + id + ".png");
    },
    restarCantProduct(id) {
      var producto = this.filtrarProductos[id];
      producto.cant = producto.cant > 1 ? producto.cant - 1 : producto.cant;
    },
    sumarCantProduct: function (id) {
      var producto = this.filtrarProductos[id];
      producto.cant = producto.cant < 100 ? producto.cant + 1 : producto.cant;
    },
    setProductToCart(id) {
      var product = this.filtrarProductos[id];
      var producto = JSON.stringify(product);
      var carrito = this.cart;
      carrito.push(producto);
      console.log(carrito);
      console.log(JSON.parse(carrito[carrito.length - 1]));
      alert(`Agrego ${product.cant} ${product.nombre} al Carrito`);
      product.cant = 1;
    },
  },
  computed: {
    categoriaName() {
      return this.$route.params.categoria;
    },
    filtrarProductos() {
      // Ordenar producto por nombre
      var productoOrdenado = this.productos.sort((a, b) => {
        // Use toLowerCase() to ignore character casing
        const productA = a.nombre.toLowerCase();
        const productB = b.nombre.toLowerCase();

        let comparison = 0;
        if (productA > productB) {
          comparison = 1;
        } else if (productA < productB) {
          comparison = -1;
        }
        return comparison;
      });
      // filtramos los productos por categoria
      var filtroCategorias = productoOrdenado.filter((producto) => {
        var categoriaProducto = producto.categoria.toString().toLowerCase();
        return categoriaProducto.match(this.categoriaName);
      });
      // filtramos los productos por la busqueda
      var productosEncontrados = filtroCategorias.filter((producto) => {
        var nombre = producto.nombre.toString().toLowerCase();
        return nombre.match(this.buscar.toLowerCase());
      });
      return productosEncontrados;
      s;
    },
  },
};
</script>
<style>
.txt-categorias {
  font-size: 1.2rem !important;
  text-transform: capitalize;
}
</style>
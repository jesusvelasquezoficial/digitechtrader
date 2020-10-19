<template>
  <div class="shop">
    <b-container fluid="md" class="mt-3">
      <!-- Buscador de Prodcutos -->
      <b-row>
        <b-col class="text-left" cols="0" sm="4" md="3">
          <small>
            <b-breadcrumb class="p-2 pl-3">
              <b-breadcrumb-item to="/">
                <b-icon
                  icon="house-door"
                  scale="1.25"
                  shift-v="1.25"
                  aria-hidden="true"
                ></b-icon>
                inicio
              </b-breadcrumb-item>
              <b-breadcrumb-item to="/tienda">
                <!-- <b-icon icon="shop" scale="1.25" shift-v="1.25" aria-hidden="true"></b-icon> -->
                tienda
              </b-breadcrumb-item>
              <b-breadcrumb-item to="">{{
                $route.params.categoria
              }}</b-breadcrumb-item>
            </b-breadcrumb>
          </small>
        </b-col>
        <b-col cols="12" sm="8" md="9">
          <b-input-group prepend="Buscar">
            <b-form-input
              type="search"
              id="search"
              v-model="buscar"
              placeholder="Producto"
            ></b-form-input>
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
            <b-nav-item to="/tienda/celulares">Celulares</b-nav-item>
            <b-nav-item to="/tienda/electrodomesticos"
              >Electrodomesticos</b-nav-item
            >
            <b-nav-item to="/tienda/licores">Licores</b-nav-item>
            <b-nav-item to="/tienda/mascotas">Mascotas</b-nav-item>
            <b-nav-item to="/tienda/muebles">Muebles</b-nav-item>
          </b-nav>
        </b-col>
        <!-- Lista de Productos -->
        <b-col sm="8" md="9" lg="9">
          <b-row class="text-left">
            <!-- Sin Productos -->
            <b-col class="my-5 text-center" v-if="productos == ''">
              <h5>
                El producto <b>"{{ buscar }}"</b> no esta en inventario
              </h5>
            </b-col>
            <!-- Con Productos -->
            <b-col
              md="6"
              lg="4"
              v-for="(producto, index) in productos"
              :key="index"
            >
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row class="d-flex align-items-center" no-gutters>
                  <b-col cols="5" sm="6" md="12">
                    <img
                      :src="getImgProduct(producto.imagen)"
                      :alt="producto.alt"
                      class="rounded-0"
                      width="100%"
                    />
                  </b-col>
                  <b-col cols="7" sm="6" md="12">
                    <b-card-body>
                      <b-card-sub-title class="mb-2">
                        {{ producto.nombre }}
                      </b-card-sub-title>
                      <b-card-title>
                        $ {{ producto.precio.toFixed(2) }}
                      </b-card-title>
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button
                              class="bg-light text-dark"
                              @click="restarCantProduct(index)"
                              >-</b-button
                            >
                          </template>
                          <b-form-input
                            min="1"
                            class="pl-2 text-center border-secondary"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button
                              class="bg-light text-dark"
                              @click="sumarCantProduct(index)"
                              >+</b-button
                            >
                          </template>
                        </b-input-group>
                        <b-button
                          @click="setProductToCart(index)"
                          block
                          variant="dark"
                          class="mt-2"
                          >Agregar al Carrito</b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
        <b-col class="offset-sm-4 offset-md-3" sm="8" md="9" lg="9">
          <b-row class="mb-3">
            <b-col cols="6"
              ><b-button to="/" class="shadow-sm" block variant="dark"
                >IR A CATEGORIAS</b-button
              ></b-col
            >
            <b-col cols="6"
              ><b-button
                v-b-toggle.sidebar-backdrop
                class="shadow-sm"
                block
                variant="success"
                >REALIZAR PEDIDO</b-button
              ></b-col
            >
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
    };
  },
  methods: {
    getImgProduct(id) {
      var images = require.context("@/assets/ProductosOpt/", true, /\.png$/);
      return images("./" + id + ".png");
    },
    restarCantProduct(id) {
      var producto = this.productos[id];
      producto.cant = producto.cant > 1 ? producto.cant - 1 : producto.cant;
    },
    sumarCantProduct: function (id) {
      var producto = this.productos[id];
      producto.cant = producto.cant < 100 ? producto.cant + 1 : producto.cant;
    },
    setProductToCart(id) {
      var producto = this.productos[id];
      this.$store.commit("addProductoAlCarrito", JSON.stringify(producto));
      // alert(`Agrego ${producto.cant} ${producto.nombre} al Carrito`);
      this.productos[id].cant = 1;
    },
  },
  computed: {
    categoriaName() {
      return this.$route.params.categoria;
    },
    productos() {
      // Ordenar producto por nombre
      var productosOrdenados = this.$store.getters.getProduct.sort((a, b) => {
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
      var filtroCategorias = productosOrdenados.filter((producto) => {
        var categoriaProducto = producto.categoria.toString().toLowerCase();
        return categoriaProducto.match(this.categoriaName);
      });
      // filtramos los productos por la busqueda
      var productosEncontrados = filtroCategorias.filter((producto) => {
        var nombre = producto.nombre.toString().toLowerCase();
        return nombre.match(this.buscar.toLowerCase());
      });
      var allProductos = productosOrdenados.filter((producto) => {
        var nombre = producto.nombre.toString().toLowerCase();
        return nombre.match(this.buscar.toLowerCase());
      });
      if (productosEncontrados == "") {
        return allProductos;
      }
      return productosEncontrados;
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
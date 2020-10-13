<template>
  <div id="app" class="fondo">
    <b-navbar
      class="shadow-sm"
      toggleable="md"
      type="light"
      variant="white"
      sticky
    >
      <b-container>
        <b-navbar-brand class="d-flex align-items-center" to="/">
          <img class="mb-1" src="@/assets/icono.png" alt="" width="32px" />
          <b class="pl-1"> PHOENIX SHOP</b></b-navbar-brand
        >

        <b-navbar-toggle
          target="nav-collapse"
          class="ml-auto"
        ></b-navbar-toggle>

        <b-collapse class="text-left" id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item class="ml-2 ml-md-0" to="/">
              <b-icon icon="house-door"></b-icon> INICIO
            </b-nav-item>
            <b-nav-item class="ml-2 ml-md-0" to="/tienda">
              <b-icon icon="shop"></b-icon> TIENDA
            </b-nav-item>
            <b-nav-item-dropdown class="ml-2 ml-md-0" right>
              <template v-slot:button-content>
                <b-icon icon="person-circle"></b-icon> CUENTA
              </template>
              <b-dropdown-item href="#"
                ><b-icon icon="box-arrow-in-right"></b-icon> INICIAR
                SESION</b-dropdown-item
              >
              <b-dropdown-item href="#">
                <b-icon icon="box-arrow-in-left"></b-icon>
                REGISTRARSE</b-dropdown-item
              >
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
        <b-navbar-nav>
          <b-nav-item v-b-toggle.sidebar-backdrop class="ml-2 ml-md-0">
            <b-icon icon="cart2"></b-icon>
            <b-badge pill variant="secondary">{{cantItemsInCart}}</b-badge>
          </b-nav-item>
        </b-navbar-nav>
      </b-container>
    </b-navbar>
    <b-sidebar
      id="sidebar-backdrop"
      backdrop-variant="dark"
      header-class="py-3 pr-5 bg-white shadow-sm"
      footer-class="pt-3 bg-white border"
      width="360px"
      lazy
      backdrop
      right
      shadow
    >
      <template slot="title">
        <div style="width: 185px;" class="d-flex align-items-center">
          <b-icon class="h4" icon="cart2"></b-icon>
          Carrito
        </div>
      </template>
      <b-container>
        <b-row>
          <b-col
            class="py-2 px-4 d-flex justify-content-between align-items-center"
            cols="12"
          >
            <div class="d-flex align-items-center">
              <b>Items</b>
            </div>
            <div><b>1</b></div>
          </b-col>
        </b-row>
      </b-container>
      <b-container class="overflow-auto" style="max-height: 90%">
        <b-row>
          <b-col cols="12" v-for="(producto, index) in productInCart" :key="index">
            <b-card
              no-body
              class="overflow-hidden shadow-sm mb-3"
              style="max-width: 100%"
              tag="article"
            >
              <b-row class="text-left" no-gutters>
                <b-col cols="5">
                  <img
                    :src="getImgProduct(producto.imagen)"
                    :alt="producto.alt"
                    class="rounded-0"
                    width="100%"
                  />
                </b-col>
                <b-col cols="6">
                  <b-card-body>
                    <b-card-sub-title class="mb-2">
                      {{ producto.nombre}}
                    </b-card-sub-title>
                    <b-card-title> $ {{ producto.precio.toFixed(2) }} </b-card-title>
                    <b-card-text>
                      <b-button-group class="d-flex roundered" size="sm">
                        <b-button variant="outline-danger"
                          ><b-icon icon="cart-dash"></b-icon
                        ></b-button>
                        <b-button
                          block
                          class="w-100"
                          variant="outline-success"
                          disabled
                          >{{producto.cant}}</b-button
                        >
                        <b-button variant="outline-primary"
                          ><b-icon icon="cart-plus"></b-icon
                        ></b-button>
                      </b-button-group>
                    </b-card-text>
                  </b-card-body>
                </b-col>
                <b-col class="p-2" cols="1">
                  <button type="button" class="close" aria-label="Close">
                    <b-icon
                      class="border rounded"
                      variant="danger"
                      icon="x"
                    ></b-icon>
                  </button>
                </b-col>
              </b-row>
            </b-card>
          </b-col>
        </b-row>
      </b-container>
      <template slot="footer">
        <b-container>
          <div class="d-flex align-items-center px-3 py-2">
            <h5 class="mr-auto"><b>Sub-Total</b></h5>
            <h3><b>$ 7.00</b></h3>
          </div>
          <div class="text-center px-3">
            <b-button block class="mb-3" variant="success"
              >Realizar Pedido</b-button
            >
          </div>
        </b-container>
      </template>
    </b-sidebar>
    <router-view />
    <div class="bg-white border">
      <b-container class="text-left font-small pt-4 mt-4">
        <b-row>
          <b-col md="6">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Informacion
            </h5>
            <p>
              Somos una tienda online de ventas de productos que ayuda al pueblo
              venezolano a realizar compras desde la comodidad de su hogar con
              entregas a domiciolio.
            </p>
          </b-col>
          <hr class="clearfix w-100 d-md-none" />
          <b-col md="6" lg="3">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Categorias
            </h5>
            <ul class="list-unstyled">
              <li>
                <router-link to="/tienda/alimentos">Alimentos</router-link>
              </li>
              <li>
                <router-link to="/tienda/aseo-personal"
                  >Aseo Personal</router-link
                >
              </li>
              <li>
                <router-link to="/tienda/aseo-del-hogar"
                  >Aseo del Hogar</router-link
                >
              </li>
              <li>
                <router-link to="/tienda/electrodomesticos"
                  >Electrodomesticos</router-link
                >
              </li>
              <li>
                <router-link to="/tienda/licores">Licores</router-link>
              </li>
            </ul>
          </b-col>
          <hr class="clearfix w-100 d-md-none" />
          <b-col md="6" lg="3">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Redes Sociales
            </h5>
            <ul class="list-unstyled">
              <li><a href="#!">Facebook</a></li>
              <li><a href="#!">Twitter</a></li>
              <li><a href="#!">Instagram</a></li>
              <!-- <li><a href="#!">WhatsApp</a></li> -->
            </ul>
          </b-col>
        </b-row>
      </b-container>
      <hr class="clearfix w-100 d-md-none" />
      <div class="text-center">
        <ul class="list-unstyled list-inline">
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-fb mx-1"
              ><i class="fab fa-facebook"> </i
            ></a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-tw mx-1"
              ><i class="fab fa-twitter"> </i
            ></a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-gplus mx-1"
              ><i class="fab fa-google-plus"> </i
            ></a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-li mx-1"
              ><i class="fab fa-linkedin-in"> </i
            ></a>
          </li>
          <li class="list-inline-item">
            <a class="btn-floating btn-sm btn-dribbble mx-1"
              ><i class="fab fa-dribbble"> </i
            ></a>
          </li>
        </ul>
      </div>
      <div class="text-center mb-5">
        &copy; 2020 Copyright
        <a href="https://phoenixshop.herokuapp.com"> www.phoenixshop.com </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  computed: {
    cantItemsInCart() {
      return this.$store.getters.getCantItemsInCart;
    },
    productInCart(){
      return this.$store.getters.getProductInCart;
    }
  },
  methods: {
     getImgProduct(id) {
      var images = require.context("@/assets/ProductosOpt/", true, /\.png$/);
      return images("./" + id + ".png");
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  padding: 10px;
}
.nav-item a {
  color: #2c3e50 !important;
}
.nav-item a:hover {
  font-weight: bold;
}
.fondo {
  background-image: url("./assets/fondo4.png");
  background-size: 30rem;
  background-attachment: fixed;
}
</style>

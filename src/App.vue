<template>
  <div id="app" class="bg-light">
    <b-navbar
      class="shadow-sm"
      toggleable="md"
      type="light"
      variant="white"
      sticky
    >
      <b-container>
        <b-navbar-brand class="d-flex align-items-center" to="/">
          <img class="mb-1" src="@/assets/logo.png" alt="" width="132px" />
          <b class="pl-1"></b>
        </b-navbar-brand>
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
            <!-- <b-nav-item class="ml-2 ml-md-0" to="/tienda">
              <b-icon icon="shop"></b-icon> TIENDA
            </b-nav-item> -->
            <b-nav-item-dropdown class="ml-2 ml-md-0" right>
              <template v-slot:button-content>
                <b-icon icon="gear"></b-icon> SERVICIOS
              </template>
              <b-dropdown-item to="/recargas">
                <b-icon icon="gem"></b-icon>
                RECARGAS
              </b-dropdown-item>
              <b-dropdown-item to="/remesas">
                <b-icon icon="credit-card-2-front"></b-icon>
                REMESAS
              </b-dropdown-item>
              <b-dropdown-item href="#" disabled>
                <b-icon icon="journals"></b-icon>
                CURSOS ONLINE </b-dropdown-item
              ><b-dropdown-item href="#" disabled>
                <b-icon icon="camera-reels"></b-icon>
                STREAMIING
              </b-dropdown-item>
            </b-nav-item-dropdown>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <marquee behavior="" direction="">
      <small>
        <span>{{fechaHoy}}</span>
        | <b>Tasa Paypal:</b> Bs. {{tasaPaypal.toLocaleString("es-VE")}} / Bs. 920.000 para la venta
        | <b>Tasa Dolar:</b> Bs. {{tasaDolar.toLocaleString("es-VE")}} / Bs. 1.000.000 para la venta
        | <b>Tasa AirTM:</b> Bs. 950.000 / Bs. 1.000.000 para la venta
      </small>
    </marquee>

    <router-view />
    <!-- FOOTER -->
    <div class="bg-white border">
      <b-container class="text-left font-small pt-4 mt-4">
        <b-row>
          <b-col md="6">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">
              Informacion
            </h5>
            <p>
              Somos una empresa dedicada al servicio de compra, venta e
              intercambio de remesas y recargas de videojuegos.
            </p>
          </b-col>
          <hr class="clearfix w-100 d-md-none" />
          <b-col md="6" lg="3">
            <h5 class="text-uppercase mb-4 mt-3 font-weight-bold">Servicios</h5>
            <ul class="list-unstyled">
              <li>
                <router-link to="/recargas">Recargas</router-link>
              </li>
              <li>
                <router-link to="/remesas">Remesas</router-link>
              </li>
              <li>
                <router-link to="">Cursos Online</router-link>
              </li>
              <li>
                <router-link to="">Streaming</router-link>
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
        &copy; 2020 Copyright <br />
        <a href="https://www.digitechtrader.com"> www.digitechtrader.com </a>
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
    fechaHoy(){
      var fecha = Date();
      return fecha;
    },
    tasaPaypal() {
      return this.$store.getters.getTasaPaypal;
    },
    tasaDolar() {
      return this.$store.getters.getTasaDolar;
    },
    tasaAirTM() {
      return this.$store.getters.getTasaAirTM;
    },
  },
  methods: {},
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

<template>
  <div class="recargas">
    <b-container class="my-4">
      <b-carousel
        id="carousel-1"
        class="mt-3 shadow-sm"
        v-model="slide"
        :interval="3000"
        fade
        background="#ababab"
        img-width="1024"
        img-height="300"
        style="text-shadow: 1px 1px 2px #333"
        @sliding-start="onSlideStart"
        @sliding-end="onSlideEnd"
      >
        <!-- Slides with image only -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/slider/1.png"
              alt="image slot"
            /> </template
        ></b-carousel-slide>
        <!-- Slides with image only -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/slider/2.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
        <!-- Slides with image only -->
        <b-carousel-slide>
          <template v-slot:img>
            <img
              class="d-block img-fluid w-100"
              src="@/assets/slider/3.png"
              alt="image slot"
            />
          </template>
        </b-carousel-slide>
      </b-carousel>
      <div class="mt-3">
        <b-row id="categorias" cols="2">
          <b-col cols="12" sm="6" md="4" lg="3" class="mb-3">
            <router-link to="/recargas/free-fire" class="text-decoration-none">
              <b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/recargas/freefire.png"
                  fluid
                  alt=""
                  width="120px"
                  class="rounded"
                />
                <b-card-text class="mt-2"><b>FREE FIRE</b></b-card-text>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3" class="mb-3">
            <router-link to="/recargas/pubg-mobile" class="text-decoration-none">
              <b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/recargas/pubg.png"
                  fluid
                  alt=""
                  width="120px"
                  class="rounded"
                />
                <b-card-text class="mt-2"><b>PUBG MOBILE</b></b-card-text>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3" class="mb-3">
            <router-link to="/recargas/call-of-duty" class="text-decoration-none">
              <b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/recargas/callofduty.jpg"
                  fluid
                  alt=""
                  width="120px"
                  class="rounded"
                />
                <b-card-text class="mt-2"><b>CALL OF DUTY</b></b-card-text>
              </b-card>
            </router-link>
          </b-col>
          <b-col cols="12" sm="6" md="4" lg="3" class="mb-3">
            <router-link to="/recargas/league-of-legends" class="text-decoration-none">
              <b-card class="card-categoria shadow-sm" text-variant="dark">
                <img
                  src="@/assets/recargas/lol.png"
                  fluid
                  alt=""
                  width="120px"
                  class="rounded"
                />
                <b-card-text class="mt-2"><b>LEAGUE OF LEGENDS</b></b-card-text>
              </b-card>
            </router-link>
          </b-col>
        </b-row>
      </div>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Recargas",
  data() {
    return {
      btnComprarStatus: true,
      form: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        direccion: "",
        metodoPago: "",
      },
      optionsPay: [
        { text: "Efectivo", value: "Efectivo" },
        { text: "Banesco", value: "Banesco" },
        { text: "Provincial", value: "Provincial" },
        { text: "Mercantil", value: "Mercantil" },
        { text: "Bank of America", value: "Bank of America" },
        { text: "Banesco Panama", value: "Banesco Panama" },
        { text: "Zelle", value: "Zelle" },
        { text: "PayPal", value: "PayPal" },
        { text: "Bitcoin", value: "Bitcoin" },
      ],
      show: true,
      fields: [
        {
          key: "nombre",
          label: "Producto",
          sortable: true,
          variant: "light",
        },
        {
          key: "subtotal",
          label: "Sub-total",
          sortable: true,
          variant: "light",
        },
      ],
    };
  },
  computed: {
    blockBtn() {
      return this.btnComprarStatus;
    },
    items() {
      var productos = this.$store.getters.getProductInCart;
      var items = [];
      productos.forEach((producto) => {
        items.push({
          nombre: producto.nombre,
          cant: producto.cant,
          subtotal: (producto.precio * producto.cant).toFixed(2),
        });
      });
      return items;
    },
    subtotal() {
      return this.$store.getters.getSubTotal;
    },
    inputsValidos() {
      var {
        nombre,
        apellido,
        telefono,
        email,
        direccion,
        metodoPago,
      } = this.form;
      if (
        nombre != "" &&
        apellido != "" &&
        telefono != "" &&
        email != "" &&
        direccion != "" &&
        metodoPago != ""
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    comprar(evt) {
      this.btnComprarStatus = false;
      evt.preventDefault();
      var productos = this.$store.getters.getProductInCart;
      var subtotal = this.$store.getters.getSubTotal;
      var form = this.form;
      var msg = { form, productos, subtotal };
      if (this.inputsValidos) {
        var baseURL =
          location.protocol + "//" + location.hostname + ":" + location.port;
        axios
          .post(baseURL + "/send-pedido", msg)
          .then((res) => {
            // console.log(res);
            if (res.data == "recibido") {
              this.cleanData();
              alert("Hemos recibido su pedido, lo contactaremos de inmediato.");
              this.btnComprarStatus = true;
            } else {
              alert("No pudimos recibir su pedido, intente mas tarde.");
              this.btnComprarStatus = true;
            }
          })
          .catch((err) => {
            console.log(err);
            alert("Ocurrio un error, intente mas tarde.");
            this.btnComprarStatus = true;
          });
      } else {
        alert("Por favor, llene todos los detalles de facturacion.");
        this.btnComprarStatus = true;
      }
    },
    cleanData() {
      this.form = {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        direccion: "",
        metodoPago: "",
      };
      this.$store.commit("cleanCart");
    },
  },
};
</script>
<style scoped>
.card-categoria {
  min-height: 6rem !important;
  font-size: 0.9rem !important;
}
.card-categoria:hover {
  background-color: dodgerblue;
  color: white !important;
}
</style>
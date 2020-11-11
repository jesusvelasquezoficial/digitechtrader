<template>
  <div class="callofduty">
    <b-container class="my-4">
      <b-row>
        <b-col cols="12" md="3" lg="2" class="text-left mb-4">
          <div class="p-2">
            <img
              src="@/assets/recargas/callofduty.jpg"
              fluid
              alt=""
              width="120px"
              class="rounded"
            />
          </div>
        </b-col>
        <b-col class="text-left mb-3" cols="12" md="5" lg="5">
          <h5 class="text-left ml-1"><b>INFORMACION DEL CLIENTE</b></h5>
          <b-container class="mb-2 pt-3 shadow-sm bg-white rounded border">
            <b-form @submit="comprar">
              <b-row>
                <b-col md="6">
                  <b-form-group
                    id="input-group-1"
                    label="Nombre:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.nombre"
                      type="text"
                      required
                      placeholder="Nombre"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="6">
                  <b-form-group
                    id="input-group-2"
                    label="Apellido:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.apellido"
                      type="text"
                      required
                      placeholder="Apellido"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    id="input-group-3"
                    label="Telefono / WhatsApp:"
                    label-for="input-3"
                    description=""
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.telefono"
                      type="number"
                      required
                      placeholder="+58 412 0110011"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="6">
                  <b-form-group
                    id="input-group-4"
                    label="Correo Electronico:"
                    label-for="input-4"
                    description=""
                  >
                    <b-form-input
                      id="input-4"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Correo Electronico"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group
                    id="input-group-5"
                    label="ID del Jugador:"
                    label-for="input-5"
                    description=""
                  >
                    <b-form-input
                      id="input-5"
                      v-model="form.idUser"
                      required
                      placeholder="ID del Jugador"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group label="Metodo de Pago:">
                    <b-form-radio-group
                      id="checkbox-group-1"
                      v-model="form.metodoPago"
                      :options="optionsPay"
                      name="flavour-1"
                      stacked
                    ></b-form-radio-group>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-container>
        </b-col>
        <b-col class="text-left mb-3" cols="12" md="4" lg="5">
          <h5 class="text-left ml-1"><b>RECARGA</b></h5>
          <b-form-group>
            <b-form-radio-group
              id="radio-group-monedas"
              v-model="selected"
              name="radio-sub-component"
            >
              <b-list-group-item
                v-for="(item, index) in recarga.tipos"
                :key="index"
              >
                <b-form-radio :value="item">
                  💰 {{ item.cant }} <b>+</b> Bonus {{ item.bonus }} <b> x </b>
                  {{ item.precio.toFixed(2) }}$
                </b-form-radio>
              </b-list-group-item>
            </b-form-radio-group>
          </b-form-group>
          <!-- <div class="text-left ml-1 mb-3">
            <small
              >Si su pedido es mayor o igual a 50$, el costo del delivery es
              gratis.</small
            ><br />
            <small
              >Si su pedido es menor a 50$ el costo del delivery dependerá de su
              zona.</small
            >
          </div> -->
          <b-button
            class="shadow-sm"
            :disabled="!blockBtn"
            @click="comprar"
            variant="dark"
            block
          >
            FINALIZAR PEDIDO
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Callofduty",
  data() {
    return {
      btnComprarStatus: true,
      selected: "",
      form: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        idUser: "",
        metodoPago: "",
      },
      optionsPay: [
        { text: "Banesco", value: "Banesco" },
        { text: "Pago Movil", value: "Pago Movil" },
        { text: "Provincial", value: "Provincial" },
        { text: "Venezuela", value: "Venezuela" },
        { text: "Bank of America", value: "Bank of America" },
        { text: "Banesco Panama", value: "Banesco Panama" },
        { text: "Bitcoin", value: "Bitcoin" },
      ],
      fields: [
        {
          key: "objeto",
          label: "Objeto",
          sortable: true,
          variant: "light",
        },
        {
          key: "precio",
          label: "Precio",
          sortable: true,
          variant: "light",
        },
      ],
      recarga: {
        nombre: "Call of Duty",
        img: "callofduty.png",
        tipos: [
          {
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
    };
  },
  computed: {
    blockBtn() {
      return this.btnComprarStatus;
    },
    items() {
      var recargas = this.$store.getters.getRecargas;
      var items = [];
      recargas.forEach((recarga) => {
        items.push({
          objeto: recarga.nombre,
          precio: recarga.tipos.precio,
        });
      });
      return items;
    },
    inputsValidos() {
      var tipo_recarga = this.selected;
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
        metodoPago != "" &&
        tipo_recarga != ""
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
      // var productos = this.$store.getters.getProductInCart;
      // var subtotal = this.$store.getters.getSubTotal;
      var form = this.form;
      var nombre_recarga = this.recarga.nombre;
      var tipo_recarga = this.selected;
      var pedido = { form, nombre_recarga, tipo_recarga };
      if (this.inputsValidos) {
        var baseURL =
          location.protocol + "//" + location.hostname + ":" + location.port;
        axios
          .post(baseURL + "/send-pedido", pedido)
          .then((res) => {
            // console.log(res);
            if (res.data == "recibido") {
              this.cleanData();
              alert("Hemos recibido su pedido, lo contactaremos de inmediato.");
            } else {
              alert("No pudimos recibir su pedido, intente mas tarde.");
            }
            this.btnComprarStatus = true;
          })
          .catch((err) => {
            console.log(err);
            alert("Ocurrio un error, intente mas tarde.");
            this.btnComprarStatus = true;
          });
      } else {
        alert("Por favor, llene todos los campos.");
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
      this.selected = "";
      // this.$store.commit("cleanCart");
    },
  },
};
</script>
<style scoped>
</style>
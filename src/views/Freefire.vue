<template>
  <div class="factura">
    <b-container class="my-4">
      <b-row>
        <b-col cols="12" md="3" lg="2" class="text-left mb-4">
          <div class="p-2">
            <img
            src="@/assets/recargas/freefire.png"
            fluid
            alt=""
            width="120px"
            class="rounded"
          />
          </div>
        </b-col>
        <b-col class="text-left mb-3" cols="12" md="5" lg="5">
          <h5 class="text-left ml-1"><b>DETALLES DE FACTURACION</b></h5>
          <b-container class="mb-2 pt-3 shadow-sm bg-white rounded border">
            <b-form @submit="comprar" v-if="show">
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
        <b-col class="text-left mb-3 " cols="12" md="4" lg="5">
          <h5 class="text-left ml-1"><b>FACTURA</b></h5>
          <b-table
            responsive
            sticky-header
            striped
            outlined
            hove
            :items="items"
            :fields="fields"
            class="text-left shadow-sm"
          >
            <template v-slot:cell(nombre)="data">
              {{ data.item.nombre }} <b> x {{ data.item.cant }} </b>
            </template>
            <template v-slot:custom-foot>
              <b-tr class="border bg-white shadow-sm">
                <b-td><b>Total</b></b-td>
                <b-td>
                  <h5>
                    <b>$ {{ subtotal.toFixed(2) }}</b>
                  </h5>
                </b-td>
              </b-tr>
            </template>
          </b-table>
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
            block
            @click="comprar"
            variant="dark"
            >FINALIZAR PEDIDO</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Factura",
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
        { text: "Banesco", value: "Banesco" },
        { text: "Pago Movil", value: "Pago Movil" },
        { text: "Provincial", value: "Provincial" },
        { text: "Venezuela", value: "Venezuela" },
        { text: "Bank of America", value: "Bank of America" },
        { text: "Banesco Panama", value: "Banesco Panama" },
        { text: "Bitcoin", value: "Bitcoin" },
      ],
      show: true,
      fields: [
        {
          key: "nombre",
          label: "Precio",
          sortable: true,
          variant: "light",
        },
        {
          key: "producto",
          label: "Producto",
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
</style>
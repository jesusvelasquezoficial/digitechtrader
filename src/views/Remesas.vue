<template>
  <div class="factura">
    <b-container class="my-4">
      <b-row>
        <b-col class="text-left mb-3" cols="12" md="6">
          <h5 class="text-left ml-1"><b>ENVIAR DESDE:</b></h5>
          <b-container class="mb-2 pt-3 shadow-sm bg-white rounded border">
            <b-form @submit="siguiente" v-if="show">
              <b-row>
                <b-col lg="12">
                  <b-form-group label="">
                    <b-form-radio-group
                      id="radio-group"
                      v-model="form.divisaEnviar"
                      name="radio-sub-component"
                      buttons
                      button-variant="outline-primary"
                    >
                      <b-form-radio required name="some-radios" value="Paypal">
                        <img
                          src="@/assets/Remesas/1.png"
                          fluid
                          alt=""
                          width="120px"
                          class="rounded"
                        />
                      </b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group
                    id="input-group-1"
                    label="Monto:"
                    label-for="input-1"
                    description=""
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.montoEnviar"
                      required
                      placeholder="Monto a Enviar"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-container>
        </b-col>
        <b-col cols="12" md="6">
          <h5 class="text-left ml-1"><b>RECIBIR EN:</b></h5>
          <b-container
            class="text-left mb-2 pt-3 shadow-sm bg-white rounded border"
          >
            <b-form @submit="siguiente" v-if="show">
              <b-row>
                <b-col lg="12">
                  <b-form-group label="">
                    <b-form-radio-group
                      id="radio-group-2"
                      v-model="form.divisaRecibir"
                      name="radio-sub-component"
                      buttons
                      button-variant="outline-primary"
                    >
                      <b-form-radio
                        required
                        name="some-radios"
                        value="Transferencia Bancaria Nacional"
                      >
                        <img
                          src="@/assets/Remesas/2.png"
                          fluid
                          alt=""
                          width="120px"
                          class="rounded"
                        />
                      </b-form-radio>
                    </b-form-radio-group>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                  <b-form-group
                    class="text-left"
                    id="input-group-3"
                    label="Monto:"
                    label-for="input-3"
                    description=""
                  >
                    <b-form-input
                      id="input-2"
                      v-model="calMontoRecibir"
                      required
                      placeholder="Monto a Recibir"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-container>
          <b-button
            class="shadow-sm"
            :disabled="!blockBtn"
            block
            @click="siguiente"
            variant="dark"
          >
            SIGUIENTE
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Remesas",
  data() {
    return {
      btnSiguienteStatus: true,
      form: {
        divisaEnviar: "",
        divisaRecibir: "",
        montoEnviar: 0,
        montoRecibir: 0,
      },
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
    tasaPaypal() {
      return this.$store.getters.getTasaPaypal;
    },
    calMontoRecibir() {
      this.form.montoRecibir = this.form.montoEnviar * this.tasaPaypal;
      return this.form.montoRecibir;
    },
    blockBtn() {
      return this.btnSiguienteStatus;
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
    inputsValidos() {
      var {
        divisaEnviar,
        divisaRecibir,
        montoEnviar,
        montoRecibir,
      } = this.form;
      if (
        divisaEnviar != "" &&
        divisaRecibir != "" &&
        montoEnviar != "" &&
        montoRecibir != ""
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    siguiente(evt) {
      this.btnSiguienteStatus = false;
      evt.preventDefault();
      var form = this.form;
      var remesa = { form };
      if (this.inputsValidos) {
        this.$store.commit("setRemesa", remesa);
        this.$router.push('/factura');
        var baseURL =
          location.protocol + "//" + location.hostname + ":" + location.port;
        axios
          .post(baseURL + "/send-pedido", remesa)
          .then((res) => {
            // console.log(res);
            if (res.data == "recibido") {
              this.cleanRemesa();
              alert("Hemos recibido su pedido, lo contactaremos de inmediato.");
              this.btnSiguienteStatus = true;
            } else {
              alert("No pudimos recibir su pedido, intente mas tarde.");
              this.btnSiguienteStatus = true;
            }
          })
          .catch((err) => {
            console.log(err);
            alert(JSON.stringify(this.form));
            // alert("Ocurrio un error, intente mas tarde.");
            this.btnSiguienteStatus = true;
          });
      } else {
        alert("Por favor, Seleccione y llene todos los campos.");
        this.btnSiguienteStatus = true;
      }
    },
    cleanRemesa() {
      this.form = {
        divisaEnviar: "",
        divisaRecibir: "",
        montoEnviar: 0,
        montoRecibir: 0,
      };
      this.$store.commit("cleanRemesa");
    },
  },
};
</script>
<style scoped>
</style>
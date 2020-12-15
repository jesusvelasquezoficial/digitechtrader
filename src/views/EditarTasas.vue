<template>
  <div class="freefire">
    <b-container class="my-2">
      <b-row v-show="show">
        <b-col class="text-left mb-3" cols="12" md="6" lg="6">
          <h5 class="text-left ml-1">
            <b>EDITAR TASAS DE <span class="text-success">COMPRA</span></b>
          </h5>
          <b-container class="mb-2 pt-3 shadow-sm bg-white rounded border">
            <b-form @submit="editarTasas">
              <b-row>
                <b-col md="12">
                  <b-form-group
                    id="input-group-1"
                    label="Tasa Dolar:"
                    label-for="input-1"
                  >
                    <b-form-input
                      id="input-1"
                      v-model="form.tasaDolar"
                      type="number"
                      required
                      :placeholder="String(tasaDolar)"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="12">
                  <b-form-group
                    id="input-group-2"
                    label="Tasa PayPal:"
                    label-for="input-2"
                  >
                    <b-form-input
                      id="input-2"
                      v-model="form.tasaPaypal"
                      type="number"
                      required
                      :placeholder="String(tasaPaypal)"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col md="12">
                  <b-form-group
                    id="input-group-3"
                    label="% Ganancia AirTM:"
                    label-for="input-3"
                    description=""
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.tasaAirTM"
                      type="text"
                      required
                      :placeholder="String(tasaAirTM)"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-container>
        </b-col>
        <b-col class="text-left mb-3" cols="12" md="6" lg="6">
          <h5 class="text-left ml-1">
            <b>EDITAR TASAS DE <span class="text-danger">VENTA</span></b>
          </h5>
          <b-container class="mb-2 pt-3 shadow-sm bg-white rounded border">
            <b-row>
              <b-col md="12">
                <b-form-group
                  id="input-group-4"
                  label="Tasa Dolar:"
                  label-for="input-4"
                >
                  <b-form-input
                    id="input-4"
                    v-model="form.tasaDolarSell"
                    type="number"
                    required
                    :placeholder="String(tasaDolarSell)"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  id="input-group-5"
                  label="Tasa PayPal:"
                  label-for="input-5"
                >
                  <b-form-input
                    id="input-5"
                    v-model="form.tasaPaypalSell"
                    type="number"
                    required
                    :placeholder="String(tasaPaypalSell)"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col md="12">
                <b-form-group
                  id="input-group-6"
                  label="% Ganancia AirTM:"
                  label-for="input-6"
                  description=""
                >
                  <b-form-input
                    id="input-6"
                    v-model="form.tasaAirTMSell"
                    type="text"
                    required
                    :placeholder="String(tasaAirTMSell)"
                  ></b-form-input>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
          <!-- <div class="text-left ml-1 mb-3">
            <small>
              Únicamente transferimos a cuentas Banesco, Mercantil, Provincial o
              BOD. Transferimos mediante Pago Móvil a todos los bancos en
              Venezuela. Al tener la opción de Pago Móvil disponible tu pedido
              podrá ser Procesado en menor tiempo.
            </small>
            <br />
          </div> -->
          <b-button
            class="shadow-sm"
            :disabled="!blockBtn"
            @click="editarTasas"
            variant="dark"
            block
          >
            GUARDAR CAMBIOS
          </b-button>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "Freefire",
  data() {
    return {
      show: true,
      btnComprarStatus: true,
      form: {
        tasaDolar: "",
        tasaPaypal: "",
        tasaAirTM: "",
        tasaPaypalSell: "",
        tasaDolarSell: "",
        tasaAirTMSell: "",
      },
    };
  },
  computed: {
    tasaDolar() {
      return this.$store.getters.getTasaDolar;
    },
    tasaPaypal() {
      return this.$store.getters.getTasaPaypal;
    },
    tasaAirTM() {
      return this.$store.getters.getTasaAirTM;
    },
    tasaDolarSell() {
      return this.$store.getters.getTasaDolarSell;
    },
    tasaPaypalSell() {
      return this.$store.getters.getTasaPaypalSell;
    },
    tasaAirTMSell() {
      return this.$store.getters.getTasaAirTMSell;
    },
    blockBtn() {
      return this.btnComprarStatus;
    },
    inputsValidos() {
      var tipo_recarga = this.selected;
      var {
        tasaDolar,
        tasaPaypal,
        tasaAirTM,
        tasaPaypalSell,
        tasaDolarSell,
        tasaAirTMSell,
      } = this.form;
      if (
        tasaDolar != "" &&
        tasaPaypal != "" &&
        tasaAirTM != "" &&
        tasaPaypalSell != "" &&
        tasaDolarSell != "" &&
        tasaAirTMSell != "" 
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    editarTasas(evt) {
      this.btnComprarStatus = false;
      evt.preventDefault();
      // var productos = this.$store.getters.getProductInCart;
      // var subtotal = this.$store.getters.getSubTotal;
      var form = this.form;
      var edicion = { form };
      if (this.inputsValidos) {
        var baseURL =
          location.protocol + "//" + location.hostname + ":" + location.port;
          this.$store.commit("setTasas", edicion);
          alert("Datos guardados con exito.");
          this.btnComprarStatus = true;
      } else {
        alert("Por favor, llene todos los campos.");
        this.btnComprarStatus = true;
      }
    },
    cleanForm() {
      this.form = {
        tasaDolar: "",
        tasaPaypal: "",
        tasaAirTM: "",
        tasaPaypalSell: "",
        tasaDolarSell: "",
        tasaAirTMSell: "",
      };
      // this.$store.commit("cleanForm");
    },
  },
  mounted() {
    // var remesa = this.$store.getters.getRemesa;
    // if (remesa.length == 0) {
    //   this.$router.push("/remesas");
    // }else{
    //   console.log(remesa);
    //   if (remesa.divisaRecibir == "Transferencia AirTM") {
    //     this.show = false;
    //   }else{
    //     this.show = true;
    //   }
    // }
  },
};
</script>
<style scoped>
</style>
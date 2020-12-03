<template>
  <div class="factura">
    <b-container class="my-2">
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
                      :formatter="formatNumber"
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
                <b-col lg="4">
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
                <b-col lg="4">
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
                        value="Transferencia AirTM"
                      >
                        <img
                          src="@/assets/Remesas/5.png"
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
                      disabled
                      placeholder="Monto a Recibir"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
            </b-form>
          </b-container>
          <div class="mb-2 d-flex w-100 justify-content-between align-items-center">
            <h6 class="mt-1"><b>Tasa PayPal</b></h6>
            <small class="mb-1"><b>{{ tasaPaypal.toLocaleString("es-VE") }} Bs </b></small>
          </div>
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
    calMontoRecibir() {
      var tasa = this.tasaPaypal;
      if (this.form.montoEnviar > 0) {
        if (this.form.divisaRecibir == "Transferencia AirTM") {
          tasa = (this.form.montoEnviar * this.tasaAirTM) / 100;
          var cantPctj = (this.form.montoEnviar * 5.4) / 100;
          this.form.montoRecibir =
            this.form.montoEnviar - cantPctj - 0.3 - tasa;
          return this.form.montoRecibir.toLocaleString("es-VE");
        } else if (
          this.form.divisaRecibir == "Transferencia Bancaria Argentina"
        ) {
          var cantPctj = (this.form.montoEnviar * 5.4) / 100;
          this.form.montoRecibir =
            (this.form.montoEnviar - cantPctj - 0.3) * tasa;
          return this.form.montoRecibir.toLocaleString("es-VE");
        }
        var cantPctj = (this.form.montoEnviar * 5.4) / 100;
        this.form.montoRecibir =
          (this.form.montoEnviar - cantPctj - 0.3) * tasa;
        return this.form.montoRecibir.toLocaleString("es-VE");
      }
      return 0;
    },
    blockBtn() {
      return this.btnSiguienteStatus;
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
        montoEnviar > 0 &&
        montoRecibir > 0
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    formatNumber(value){
      return value;
    },
    siguiente(evt) {
      this.btnSiguienteStatus = false;
      evt.preventDefault();
      var form = this.form;
      var remesa = { form };
      if (this.inputsValidos) {
        this.$store.commit("setRemesa", remesa);
        this.$router.push("/factura");
      } else {
        console.log(form);
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
  mounted() {
    this.cleanRemesa;
  },
};
</script>
<style scoped>
</style>
<template>
  <div class="freefire">
    <b-container class="my-4">
      <b-row>
        <b-col class="text-left mb-3" cols="12" md="6" lg="6">
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
                    label="Cuenta Origen:"
                    label-for="input-5"
                    description=""
                  >
                    <b-form-input
                      id="input-5"
                      v-model="form.cuentaOrigin"
                      required
                      placeholder="Micuentapaypal@ejemplo.com"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col lg="12">
                <b-form-group
                  id="input-group-5"
                  label="Cuenta Destino:"
                  label-for="input-5"
                  description=""
                >
                  <b-form-input
                    id="input-5"
                    v-model="form.cuentaDestino"
                    required
                    placeholder="Nro de cuenta 0134-0000-0000-0000-0000"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              </b-row>
            </b-form>
          </b-container>
        </b-col>
        <b-col class="text-left mb-3" cols="12" md="6" lg="6">
          <h5 class="text-left ml-1"><b>IMPORTANTE</b></h5>
          <b-container class="mb-2 pt-3 shadow-sm bg-white rounded border">
            <b-row>
              <b-col lg="12">
                <b-form-group
                  id="input-group-6"
                  label="Tipo de Cuenta:"
                  label-for="input-6"
                  description=""
                >
                  <b-form-select v-model="form.tipoCuentaDestino" class="">
                    <b-form-select-option :value="null"
                      >Tipo de Cuenta</b-form-select-option
                    >
                    <b-form-select-option value="Ahorro"
                      >Ahorro</b-form-select-option
                    >
                    <b-form-select-option value="Corriente"
                      >Corriente</b-form-select-option
                    >
                  </b-form-select>
                </b-form-group>
              </b-col>
              <b-col lg="12">
                <b-form-group
                  id="input-group-7"
                  label="Nombre de Titular:"
                  label-for="input-7"
                  description=""
                >
                  <b-form-input
                    id="input-7"
                    v-model="form.nombreTitular"
                    required
                    placeholder="Nombre de Titular"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col lg="12">
                <b-form-group
                  id="input-group-8"
                  label="Nro Identidad:"
                  label-for="input-8"
                  description=""
                >
                  <b-form-input
                    id="input-8"
                    v-model="form.nroIdentidad"
                    required
                    placeholder="Nro Identidad Cedula / Rif"
                  ></b-form-input>
                </b-form-group>
              </b-col>
              <b-col lg="12">
                <b-form-group
                  id="input-group-9"
                  label="Pago Movil:"
                  label-for="input-9"
                  description=""
                >
                  <b-form-select v-model="form.pagoMovil" class="">
                    <b-form-select-option :value="null"
                      >Seleccione</b-form-select-option
                    >
                    <b-form-select-option value="Ahorro"
                      >Disponible</b-form-select-option
                    >
                    <b-form-select-option value="Corriente"
                      >Desactivado</b-form-select-option
                    >
                  </b-form-select>
                </b-form-group>
              </b-col>
            </b-row>
          </b-container>
          <div class="text-left ml-1 mb-3">
            <small>
              Únicamente transferimos a cuentas Banesco, Mercantil,
              Provincial o BOD. Transferimos mediante Pago Móvil a todos los
              bancos en Venezuela. Al tener la opción de Pago Móvil disponible
              tu pedido podrá ser Procesado en menor tiempo.
            </small>
            <br />
          </div>
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
  name: "Freefire",
  data() {
    return {
      btnComprarStatus: true,
      selected: "",
      form: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        tipoCuentaDestino: null,
        nombreTitular: "",
        nroIdentidad: "",
        pagoMovil: null,
      },
      optionsPay: [
        { text: "Banesco", value: "Banesco" },
        { text: "Venezuela", value: "Venezuela" },
        { text: "Pago Movil", value: "Pago Movil" },
        // { text: "Provincial", value: "Provincial" },
        // { text: "Bank of America", value: "Bank of America" },
        // { text: "Banesco Panama", value: "Banesco Panama" },
        // { text: "Bitcoin", value: "Bitcoin" },
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
        nombre: "Free Fire",
        img: "freefire.png",
        tipos: [
          {
            cant: 100,
            bonus: 10,
            precio: 1.0,
          },
          {
            cant: 310,
            bonus: 31,
            precio: 3.0,
          },
          {
            cant: 520,
            bonus: 52,
            precio: 5.0,
          },
          {
            cant: 1060,
            bonus: 106,
            precio: 10.0,
          },
          {
            cant: 2180,
            bonus: 218,
            precio: 20.0,
          },
          {
            cant: 5600,
            bonus: 560,
            precio: 50.0,
          },
          {
            cant: "Tarjeta Semanal",
            bonus: 0,
            precio: 2.0,
          },
          {
            cant: "Tarjeta Mensual",
            bonus: 0,
            precio: 8.0,
          },
        ],
      },
    };
  },
  computed: {
    tasaDolar() {
      return this.$store.getters.getTasaDolar;
    },
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
      } = this.form;
      if (
        nombre != "" &&
        apellido != "" &&
        telefono != "" &&
        email != ""
      ) {
        return true;
      }
      return false;
    },
  },
  methods: {
    tolal() {
      var tasa = this.tasaDolar;
      var precio_recarga = this.selected.precio;
      if (precio_recarga != undefined) {
        return (parseFloat(precio_recarga) * tasa).toLocaleString("es-VE");
      }
      return 0;
    },
    infoMetodoPago(metodo) {
      if (metodo == "Banesco") {
        return "Nro Cuenta: <strong>01340946370001523975</strong> </br> Titular: <strong>Floravid davila</strong> </br> Rif: <strong>10.010.207</strong>";
      } else if (metodo == "Venezuela") {
        return "Nro Cuenta: <strong>01020501880002001191</strong> </br> Titular: <strong>Francisco Davila</strong> </br> Rif: <strong>3.807.253</strong>";
      } else if (metodo == "Pago Movil") {
        return "Cuenta: <strong>Venezuela</strong> </br> Nro Tlf: <strong>04141635338</strong> </br> C.I: <strong>3.807.253</strong>";
      } else {
        return "";
      }
    },
    comprar(evt) {
      this.btnComprarStatus = false;
      evt.preventDefault();
      // var productos = this.$store.getters.getProductInCart;
      // var subtotal = this.$store.getters.getSubTotal;
      var form = this.form;
      var remesa = this.$store.getters.getRemesa;
      var pedido = { form, remesa };
      if (this.inputsValidos) {
        var baseURL =
          location.protocol + "//" + location.hostname + ":" + location.port;
        axios
          .post(baseURL + "/send-remesa", pedido)
          .then((res) => {
            // console.log(res);
            if (res.data == "recibido") {
              this.cleanRemesa();
              alert("Hemos recibido su pedido, le enviaremos una factura inmediatamente.");
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
    cleanRemesa() {
      this.form = {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
        tipoCuentaDestino: null,
        nombreTitular: "",
        nroIdentidad: "",
        pagoMovil: null,
      };
      this.selected = "";
      this.$store.commit("cleanRemesa");
    },
  },
};
</script>
<style scoped>
</style>
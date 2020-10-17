<template>
  <div class="factura">
    <b-container class="my-4">
      <b-row>
        <b-col class="text-left mb-3" cols="12" md="6">
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
                      required
                      placeholder="Apellido"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
              </b-row>
              <b-row>
                <b-col lg="6">
                  <b-form-group
                    id="input-group-3"
                    label="Telefono:"
                    label-for="input-3"
                    description=""
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.telefono"
                      type="number"
                      required
                      placeholder="Telefono"
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
              </b-row>
            </b-form>
          </b-container>
        </b-col>
        <b-col cols="12" md="6">
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
          <b-button class="shadow-sm" block @click="comprar" variant="dark"
            >FINALIZAR COMPRA</b-button
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
      form: {
        nombre: "",
        apellido: "",
        telefono: "",
        email: "",
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
      var { nombre, apellido, telefono, email } = this.form;
      if (nombre != "" && apellido != "" && telefono != "" && email != "") {
        return true;
      }
      return false;
    },
  },
  methods: {
    comprar(evt) {
      evt.preventDefault();
      var productos = this.$store.getters.getProductInCart;
      var form = this.form;
      var msg = { form, productos };
      if (this.inputsValidos) {
        var baseURL =
          location.protocol + "//" + location.hostname + ":" + location.port;
        axios
          .post(baseURL + "/send-pedido", msg)
          .then((res) => {
            // console.log(res);
            if(res.data == "recibido"){
              alert("Hemos recibido su pedido, lo contactaremos de inmediato.");
            }else{
              alert("No pudimos recibir su pedido, intente mas tarde.");
            }
          })
          .catch((err) => {
            console.log(err);
            alert("Ocurrio un error, intente mas tarde.");
          });
        // alert(JSON.stringify(this.form));
      } else {
        alert("Por favor, verifique los campos.");
      }
    },
  },
};
</script>
<style scoped>
</style>
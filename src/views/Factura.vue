<template>
  <div class="factura">
    <b-container class="my-4">
      <b-row>
        <b-col class="text-left" cols="12" md="6">
          <h5 class="text-left ml-1"><b>DETALLES DE FACTURACION</b></h5>
          <b-container class="p-2 bg-light rounded border">
            <b-form @submit="comprar" v-if="show">
              <b-row>
                <b-col>
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
                <b-col>
                  <b-form-group
                    id="input-group-2"
                    label="Nombre:"
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
                <b-col>
                  <b-form-group
                    id="input-group-3"
                    label="Correo Electronico:"
                    label-for="input-3"
                    description=""
                  >
                    <b-form-input
                      id="input-3"
                      v-model="form.email"
                      type="email"
                      required
                      placeholder="Correo Electronico"
                    ></b-form-input>
                  </b-form-group>
                </b-col>
                <b-col>
                  <b-form-group
                    id="input-group-4"
                    label="Telefono:"
                    label-for="input-4"
                    description=""
                  >
                    <b-form-input
                      id="input-4"
                      v-model="form.telefono"
                      type="number"
                      required
                      placeholder="Telefono"
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

          <b-button block @click="comprar" variant="dark"
            >FINALIZAR COMPRA</b-button
          >
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Factura",
  data() {
    return {
      form: {
        nombre: "",
        apellido: "",
        email: "",
      },
      foods: [
        { text: "Select One", value: null },
        "Carrots",
        "Beans",
        "Tomatoes",
        "Corn",
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
  },
  methods: {
    comprar(evt) {
      evt.preventDefault();
      alert(JSON.stringify(this.form));
    },
  },
};
</script>
<style scoped>
</style>
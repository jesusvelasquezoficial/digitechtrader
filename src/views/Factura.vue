<template>
  <div class="factura">
    <b-container class="pt-4">
      <b-row>
        <b-col cols="12" md="6">
          <b-table
            responsive
            sticky-header  
            striped
            outlined
            hove
            :items="items"
            :fields="fields"
            class="text-left"
          >
            <template v-slot:custom-foot>
              <b-tr class="border bg-white shadow-sm">
                <b-td><b>Total</b></b-td>
                <b-td></b-td>
                <b-td></b-td>
                <b-td><b class="h5">$ {{subtotal.toFixed(2)}}</b></b-td>
              </b-tr>
            </template>
          </b-table>
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
      fields: [
        {
          key: "nombre",
          sortable: true,
        },
        {
          key: "cant",
          sortable: true,
        },
        {
          key: "precio",
          sortable: true,
        },
        {
          key: "subtotal",
          label: "Sub-total",
          sortable: true,
        },
      ],
    };
  },
  computed: {
    items() {
      var productos = this.$store.getters.getProductInCart;
      return productos;
    },
    subtotal(){
      return this.$store.getters.getSubTotal;
    }
  },
};
</script>
<style scoped>
</style>
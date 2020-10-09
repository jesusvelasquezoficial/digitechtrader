<template>
  <div class="shop">
    <b-container fluid="md" class="mt-3">
      <b-row>
        <b-col class="offset-md-3">
          <b-input-group prepend="Buscar">
            <b-form-input id="search"></b-form-input>
          </b-input-group>
        </b-col>
      </b-row>
      <b-row class="mt-3">
        <b-col sm="4" md="3" lg="3">
          <b-nav class="text-left" vertical>
            <b-nav-text><b class="txt-categorias">Categorias</b></b-nav-text>
            <b-nav-item to="#alimentos">Alimentos</b-nav-item>
            <b-nav-item to="#aseo-personal">Aseo Personal</b-nav-item>
            <b-nav-item to="#aseo-del-hogar">Aseo del Hogar</b-nav-item>
            <b-nav-item to="#licores">Licores</b-nav-item>
          </b-nav>
        </b-col>
        <b-col sm="8" md="9" lg="9">
          <b-row>
            <b-col class="text-left" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/1.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 7.00" sub-title="Anis Cartujo 1L">
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-left" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/2.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 7.00" sub-title="Ron Cacique 750ml">
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block pill variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-left" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/3.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 2.50" sub-title="Cerveza Corona">
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block squared variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <!-- Version 2 -->
             <b-col class="text-center" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/1.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 7.00" sub-title="Anis Cartujo 1L">
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-center" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/2.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 7.00" sub-title="Ron Cacique 750ml">
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block pill variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-center" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/3.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 2.50" sub-title="Cerveza Corona">
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block squared variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <!-- Version 3 -->
             <b-col class="text-center" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/1.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body>
                       <b-card-sub-title class="mb-2">
                        Anis Cartujo 1L
                      </b-card-sub-title>
                      <b-card-title>
                        $ 7.00
                      </b-card-title>
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark  border border-danger">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark border border-success">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-center" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/2.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body>
                       <b-card-sub-title class="mb-2">
                        Ron Cacique 750ml
                      </b-card-sub-title>
                      <b-card-title>
                        $ 7.00
                      </b-card-title>
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center border-secondary"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block pill variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-center" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/3.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body>
                       <b-card-sub-title class="mb-2">
                        Cerveza Corona
                      </b-card-sub-title>
                      <b-card-title>
                        $ 2.50
                      </b-card-title>
                      <b-card-text>
                        <b-input-group>
                          <template v-slot:prepend>
                            <b-button class="bg-light text-dark border">-</b-button>
                          </template>
                          <b-form-input
                            class="text-center border"
                            v-model="producto.cant"
                          ></b-form-input>
                          <template v-slot:append>
                            <b-button class="bg-light text-dark border">+</b-button>
                          </template>
                        </b-input-group>
                        <b-button block squared variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <!-- Version 4 -->
             <b-col class="text-left" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/1.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 7.00" sub-title="Anis Cartujo 1L">
                     <b-card-text>
                       <b-button-group class="d-flex roundered">
                          <b-button   variant="outline-danger"><b-icon icon="cart-dash"></b-icon></b-button>
                           <b-input class="text-center" variant="outline-success" v-model="producto.cant"></b-input>
                            <b-button   variant="outline-primary"><b-icon icon="cart-plus"></b-icon></b-button>
                       </b-button-group>
                        <b-button block pill variant="success" class="mt-2"><b-icon icon="cart-plus"></b-icon></b-button>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-left" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/2.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body>
                       <b-card-sub-title class="mb-2">
                        Ron Cacique 750ml
                      </b-card-sub-title>
                      <b-card-title>
                        $ 7.00
                      </b-card-title>
                       <b-card-text>
                       <b-button-group class="d-flex roundered">
                          <b-button   variant="outline-danger"><b-icon icon="cart-dash"></b-icon></b-button>
                           <b-button  variant="outline-success">{{producto.cant}}</b-button>
                            <b-button   variant="outline-primary"><b-icon icon="cart-plus"></b-icon></b-button>
                       </b-button-group>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
            <b-col class="text-center" md="6" lg="4">
              <b-card
                no-body
                class="overflow-hidden shadow-sm mb-3"
                style="max-width: 100%"
                tag="article"
              >
                <b-row no-gutters>
                  <b-col col="6" sm="6" md="12">
                    <img
                      src="@/assets/Productos/Licores/3.png"
                      alt="Image"
                      class="rounded-0"
                      width="100%"
                    ></img>
                  </b-col>
                  <b-col col="6" sm="6" md="12">
                    <b-card-body title="$ 2.50" sub-title="Cerveza Corona">
                      <b-card-text>
                       <b-button-group class="d-flex roundered">
                          <b-button variant="none"><b-icon icon="dash-circle"></b-icon></b-button>
                           <b-button pill variant="success">{{producto.cant}} <b-icon icon="cart-plus"></b-icon></b-button>
                            <b-button   variant="none"><b-icon icon="plus-circle"></b-icon></b-button>
                       </b-button-group>
                      </b-card-text>
                    </b-card-body>
                  </b-col>
                </b-row>
              </b-card>
            </b-col>
          </b-row>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>
<script>
export default {
  name: "Tienda",
  data() {
    return {
      producto: {
        img_src: "",
        nombre: "",
        precio: "",
        cant: 1,
      },
    };
  },
};
</script>
<style>
.txt-categorias {
  font-size: 1.2rem !important;
}
</style>
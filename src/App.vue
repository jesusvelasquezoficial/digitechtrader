<template>
  <div id="app">
    <b-navbar class="shadow-sm" toggleable="md" type="light" variant="light" sticky>
      <b-container>
        <b-navbar-brand href="#">PHOENIX SHOP</b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse class="text-left" id="nav-collapse" is-nav>
          <!-- Right aligned nav items -->
          <b-navbar-nav class="ml-auto">
            <b-nav-item>
              <b-icon icon="house-door"></b-icon> INICIO
            </b-nav-item>
            <b-nav-item> <b-icon icon="shop"></b-icon> TIENDA </b-nav-item>
            <b-nav-item-dropdown right>
              <template v-slot:button-content>
                <b-icon icon="person-circle"></b-icon> CUENTA
              </template>
              <b-dropdown-item href="#"
                ><b-icon icon="box-arrow-in-right"></b-icon> INICIAR
                SESION</b-dropdown-item
              >
              <b-dropdown-item href="#">
                <b-icon icon="box-arrow-in-left"></b-icon>
                REGISTRARSE</b-dropdown-item
              >
            </b-nav-item-dropdown>
            <b-nav-item>
              <b-icon icon="cart2"></b-icon>
              <b-badge pill variant="secondary">0</b-badge>
            </b-nav-item>
          </b-navbar-nav>
        </b-collapse>
      </b-container>
    </b-navbar>
    <router-view />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.navbar {
  padding: 30px;
}
.nav-item a {
  color: #2c3e50;
}
.nav-item a:hover {
  font-weight: bold;
}
</style>

<template>
  <!-- <BuscarPorCedula/> -->
  <!-- <Insertar/> -->
  <!-- <Actualizar/> -->
  <BorrarPorCedula />
</template>

<script>
import Actualizar from './pages/Actualizar.vue';
import BuscarPorCedula from './pages/BuscarPorCedula.vue';
import Insertar from './pages/Insertar.vue';
import BorrarPorCedula from './pages/Borrar.vue';
export default {
  name: 'App',
  components: {
    BuscarPorCedula,
    Insertar,
    Actualizar,
    BorrarPorCedula
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: left;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

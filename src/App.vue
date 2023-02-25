<template>
  <router-view></router-view>
  <!-- <BuscarPorCedula/> -->
  <!-- <Insertar /> -->
  <!-- <Actualizar/> -->
  <!-- <BorrarPorCedula /> -->
  <!-- <BorrarPorID /> -->
  <!-- <BuscarTodos/> -->
</template>

<script>
import Actualizar from './pages/Actualizar.vue';
import BuscarPorCedula from './pages/BuscarPorCedula.vue';
import Insertar from './pages/Insertar.vue';
import BorrarPorCedula from './pages/BorrarPorCedula.vue';
import BorrarPorID from './pages/BorrarPorID.vue';
import BuscarTodos from './pages/BuscarTodos.vue';
export default {
  name: 'App',
  components: {
    BuscarPorCedula,
    Insertar,
    Actualizar,
    BorrarPorCedula,
    BorrarPorID,
    BuscarTodos
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  font-size: 20px;
}
</style>

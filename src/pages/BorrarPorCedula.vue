<template >
    <div>
        <h1>Borrar por cedula:</h1>
        <input type="text" v-model="cedula">
        <button v-on:click="borrar()">Borrar</button>
    </div>
</template>
<script>
import { borrarPorCedulaFachada } from '../js/api_facturacion/ProcesarCliente.js'
export default {
    data() {
        return {
            cedula: null,
        }
    },
    methods: {

        async borrar() {
            await borrarPorCedulaFachada(this.cedula)
        }
    },
}
</script>
<style ></style>
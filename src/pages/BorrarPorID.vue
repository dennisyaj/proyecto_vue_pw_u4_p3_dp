<template >
    <div>
        <h1>Borrar por id:</h1>
        <input type="text" v-model="id">
        <button v-on:click="borrar()">Borrar</button>
    </div>
</template>
<script>
import { borrarPorIDFachada } from '../js/api_facturacion/ProcesarCliente.js'
export default {
    data() {
        return {
            id: null,
        }
    },
    methods: {
        async borrar() {
            await borrarPorIDFachada(this.id)
        }
    },
}
</script>
<style ></style>
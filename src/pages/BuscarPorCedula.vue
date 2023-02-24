<template >
    <div>
        <h1>Buscar por cedula:</h1>
        <input type="text" v-model="cedula">
        <button v-on:click="buscarCliente()">Buscar</button>
        <button v-on:click="insertar">Insertar</button>
    </div>
</template>
<script>
import { obtenerPorCedulaFachada, insertarFachada } from '../js/api_facturacion/ProcesarCliente.js'
export default {
    data() {
        return {
            cedula: null
        }
    },
    methods: {
        async buscarCliente() {
            const tmp = await obtenerPorCedulaFachada(this.cedula)
            const { id, nombre, apellido, cedula, fechaNacimiento } = tmp
            console.log(tmp);
        },
          insertar() {
            const mycliente = {
                "nombre": "Pedro",
                "apellido": "yajaco",
                "cedula": "172686888",
                "fechaNacimiento": "2023-02-23T18:18:35",
                "genero": "masculino",
                "email": "den@uce.co,"
            }
            insertarFachada(mycliente)
        }
    },
}
</script>
<style ></style>
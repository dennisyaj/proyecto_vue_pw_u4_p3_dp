<template >
    <div>
        <h1>Buscar por cedula:</h1>
        <input type="text" v-model="cedula">
        <button v-on:click="buscarCliente()">Buscar</button>
    </div>
    <div>
        <h1>ID: </h1>
        <input v-model="mycliente.id" type="number" />
        <h1>Nombre: </h1>
        <input v-model="mycliente.nombre" type="text" />
        <h1>Apellido: </h1>
        <input v-model="mycliente.apellido" type="text" />
        <h1>Cedula: </h1>
        <input v-model="mycliente.cedula" type="text" />
        <h1>Fecha de nacimiento: </h1>
        <input v-model="mycliente.fechaNacimiento" type="datetime-local" />
        <h1>genero: </h1>
        <input v-model="mycliente.genero" type="text" />
        <h1>Email: </h1>
        <input v-model="mycliente.email" type="email" />
        <button type="submit" v-on:click="actualizarCliente()">Actualizar</button>
    </div>
</template>
<script>
import { obtenerPorCedulaFachada, actualizarFachada } from '../js/api_facturacion/ProcesarCliente.js'
export default {
    data() {
        return {
            cedula: null,
            mycliente: {
                "id": null,
                "nombre": null,
                "apellido": null,
                "cedula": null,
                "fechaNacimiento": null,
                "genero": null,
                "email": null
            }
        }
    },
    methods: {
        async buscarCliente() {
            const tmp = await obtenerPorCedulaFachada(this.cedula)
            this.mycliente = tmp

        },
        async actualizarCliente() {
            const cliente = {
                "nombre": this.mycliente.nombre,
                "apellido":this.mycliente.apellido,
                "cedula": this.mycliente.cedula,
                "fechaNacimiento": this.mycliente.fechaNacimiento,
                "genero": this.mycliente.genero,
                "email": this.mycliente.email
            }
            console.log(cliente);
            await actualizarFachada(this.mycliente.id, cliente)
        }
    },
}
</script>
<style ></style>
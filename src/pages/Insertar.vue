<template >
    <div>
        <h1>Nombre: </h1>
        <input v-model="nombre" type="text" />
        <h1>Apellido: </h1>
        <input v-model="apellido" type="text" />
        <h1>Cedula: </h1>
        <input v-model="cedula" type="text" />
        <h1>Fecha de nacimiento: </h1>
        <input v-model="fechaNacimiento" type="datetime-local" />
        <h1>genero: </h1>
        <input v-model="genero" type="text" />
        <h1>Email: </h1>
        <input v-model="email" type="email" />
        <button type="submit" v-on:click="insertarCliente">Registrar</button>
    </div>
</template>
<script>
import { insertarFachada } from '@/js/api_facturacion/ProcesarCliente';
export default {
    data() {
        return {
            nombre: null,
            apellido: null,
            cedula: null,
            fechaNacimiento: null,
            genero: null,
            email: null,
        }
    },
    methods: {
        insertarCliente() {
            const mycliente = {
                "nombre": this.nombre,
                "apellido": this.apellido,
                "cedula": this.cedula,
                "fechaNacimiento": this.fechaNacimiento,
                "genero": this.genero,
                "email": this.email
            }
            insertarFachada(mycliente)
            borrarCampos()
        }
    },
    borrarCampos() {
        this.nombre = null
        this.apellido = null
        this.cedula = null
        this.fechaNacimiento = null
        this.genero = null
        this.email = null
    },
}
</script>
<style ></style>
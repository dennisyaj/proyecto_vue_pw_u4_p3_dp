<template >
    <div>
        <div class="form-floating mb-3">
            <input v-model="nombre" type="text" class="form-control" id="floatingInput" placeholder="name" />
            <label for="floatingInput">Nombre: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="apellido" class="form-control" type="text" placeholder="aplldio" />
            <label>Apellido: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="cedula" class="form-control" type="text" placeholder="cedula" />
            <label>Cedula: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="fechaNacimiento" class="form-control" type="datetime-local" placeholder="fecha" />
            <label>Fecha de nacimiento: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="genero" class="form-control" type="text" placeholder="genero" />
            <label>genero: </label>
        </div>
        <div class="form-floating mb-3">
            <input v-model="email" class="form-control" type="email" placeholder="email" />
            <label>Email: </label>
        </div>

        <button class="btn btn-primary" type="submit" v-on:click="insertarCliente">Registrar</button>

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
    mounted() {
        console.log('Entró a la pagina insertar')
        console.log(this.$route);
        console.log(this.$route.query)
        console.log(this.$route.query.provincia)
        console.log(this.$route.query.estudiante)
        const { provincia, estudiante } = this.$route.query
        console.log('Nuevas impresiones');
        console.log(provincia);
        console.log(estudiante);
    },
}
</script>
<style ></style>
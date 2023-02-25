<template >
    <div>
        <ul>
            <li v-for=" cliente in clientes" :key="id">{{ cliente }}</li>
        </ul>
    </div>
</template>
<script>
import { buscarTodosFachada } from '../js/api_facturacion/ProcesarCliente.js'
export default {
    data() {
        return {
            clientes: null,
        }
    },
    methods: {
        async buscarTodos() {
            const tmp = await buscarTodosFachada()
            this.clientes = tmp
        }
    },
    mounted() {
        this.buscarTodos()
        console.log(this.$route.params);
        const {idCliente} =this.$route.params
        console.log(idCliente);
     },
}
</script>
<style ></style>
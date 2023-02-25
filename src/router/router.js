import { createRouter, createWebHashHistory } from "vue-router";
//carga inicial donde se trae todo
import Actualizar from "@/pages/Actualizar.vue";
import BorrarPorCedula from "@/pages/BorrarPorCedula.vue";
import BuscarTodos from "@/pages/BuscarTodos.vue";
import Insertar from "@/pages/Insertar.vue";
import Inicio from "@/pages/Inicio.vue";
import NoFound from "@/pages/NoFound.vue";

//const routes = [
//  { path: '/', component: Inicio },
//  { path: '/actualizar', component: Actualizar },
//  { path: '/insertar', component: Insertar },
//  { path: '/buscar', component: BuscarTodos },
// { path: '/borrar', component: BorrarPorCedula },
//{ path: '/:pathMatch(.*)*', component: NoFound },
//]

const routes = [
    {
        path: '/',
        name: 'inicio',
        component: () => import(/*webpackChunkName: "Inicio"*/ '@/pages/Inicio.vue')
    },
    {
        path: '/actualizar',
        name: 'actualizar',
        component: () => import(/*webpackChunkName: "Actualizar"*/ '@/pages/Actualizar.vue')
    },
    {
        path: '/insertar',
        name: 'insertar',
        component: () => import(/*webpackChunkName: "Insertar"*/ '@/pages/Insertar.vue')
    },
    {
        path: '/buscar/:idCliente',
        name: 'buscar',
        component: () => import(/*webpackChunkName: "BuscarTodos"*/ '@/pages/BuscarTodos.vue')
    },
    {
        path: '/borrar',
        name: 'borrar',
        component: () => import(/* webpackChunkName: "BorrarPorCedula"*/ '@/pages/BorrarPorCedula.vue')
    },
    {
        path: '/negado',
        name: '403',
        component: () => import(/* webpackChunkName: "Negado"*/ '@/pages/Negado.vue')
    },
    {
        path: '/:pathMatch(.*)*',
        component: NoFound
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

//guardianes en Vue.js
router.beforeEach((to, from, next) => {
    console.log({ to, from, next });

    const random = Math.random() * 10
    if (random > 5) {
        console.log("autorizado");
        //para dar acceso se usa los guardianes con el metodo next()
        next()
    } else {
        console.log("no autorizados");
        next({ name: '403' })
    }

})

export default router
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
        component: () => import(/*webpackChunkName: "Inicio"*/ '@/pages/Inicio.vue')
    },
    {
        path: '/actualizar',
        component: () => import(/*webpackChunkName: "Actualizar"*/ '@/pages/Actualizar.vue')
    },
    {
        path: '/insertar',
        component: () => import(/*webpackChunkName: "Insertar"*/ '@/pages/Insertar.vue')
    },
    {
        path: '/buscar/:idCliente',
        component: () => import(/*webpackChunkName: "BuscarTodos"*/ '@/pages/BuscarTodos.vue')
    },
    {
        path: '/borrar',
        component: () => import(/* webpackChunkName: "BorrarPorCedula"*/ '@/pages/BorrarPorCedula.vue')
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

export default router
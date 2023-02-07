import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const rotas: RouteRecordRaw [] = [];

const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
});

export default roteador;
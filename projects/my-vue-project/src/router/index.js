import { createRouter, createWebHistory } from "vue-router";
import GestorProductos from "../views/GestorProductos.vue";
import AnimalCard from "../views/AnimalCard.vue";

import NotFoud from "../views/NotFoud.vue";
import FormularioPeliculas from "../views/FormularioPeliculas.vue";


const routes = [
        {
            path: "/",
            name: "gestorProductos",
            component: GestorProductos
        },
        {
            path: "/animales",
            name: "animal",
            component: AnimalCard
        },
        {
            path: "/peliculas",
            name: "peliculas",
            component: FormularioPeliculas
        } ,
        {
            path: "/:pathMatch(.*)*",
            name: "notFound",
            component: NotFoud
        }
    ]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;
import { createRouter, createWebHistory } from "vue-router";
import AnimalCard from "../views/AnimalCard.vue";

import NotFoud from "../views/NotFoud.vue";
import FormularioPeliculas from "../views/FormularioPeliculas.vue";
import TablaProductos from "../views/TablaProductos.vue";
import FormularioProducto from "../views/FormularioProducto.vue";
import DetallesProducto from "../views/DetallesProducto.vue";


const routes = [
    {
        path: "/",
        name: "tablaProductos",
        component: TablaProductos
    },
    {
        path: "/create",
        name: "createProduct",
        component: FormularioProducto
    },
    {
        path: "/detalle/:id",
        name: "detalleProducto",
        component: DetallesProducto
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
    },
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
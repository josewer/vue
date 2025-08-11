<script setup>
import { useRoute } from 'vue-router';
import { useProductoStore } from '../stores/producto';
import HeaderComponent from '../components/HeaderComponent.vue';

const route = useRoute();
let id = route.params.id;

const productStore = useProductoStore();
const product = productStore.getProduct(id);

console.log(product);


</script>

<template>

    <HeaderComponent/>

    <h2>Pagina detalle productos</h2>
    <div v-if="product" >
        <h3>Nombre: {{ product.name  }}</h3>
        <h3>Precio: {{ product.price }}</h3>
        <h3>Cantidad: {{ product.amount }}</h3>
        <h3>Total: {{ product.total }}</h3>
    </div>
    <h3 v-else>
        El producto no existe.
    </h3>

</template>

<style scoped></style>
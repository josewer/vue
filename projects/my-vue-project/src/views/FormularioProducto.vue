<script setup>

import { ref } from 'vue';
import { Producto } from '../models/Producto.js';
import { useProductoStore } from '../stores/producto.js';
import HeaderComponent from '../components/HeaderComponent.vue';

const productStore = useProductoStore();

const amount = ref();
const price = ref();
const nameProduct = ref();

function addProduct() {

    if (nameProduct.value && price.value && amount.value) {

        const product = new Producto(
            nameProduct.value,
            Number(amount.value),
            Number(price.value));

        nameProduct.value = '';
        price.value = '';
        amount.value = '';

        console.table(product);
        productStore.addProduct(product);
    }
}

</script>

<template>

    <HeaderComponent />

    <h3>Total compra: {{ productStore.total.toFixed(2) }} €</h3>

    <div id="containerProduct">
        <form @submit.prevent="addProduct">
            <fieldset>
                <h2 class="form-title">🛒 Añadir producto</h2>
                <input id="nameProduct" type="text" v-model="nameProduct" placeholder="Nombre" />
                <input id="price" type="number" v-model="price" placeholder="Precio" />
                <input id="amount" type="number" v-model="amount" placeholder="Cantidad" />
                <button @keydown.enter="addProduct" :disabled="!nameProduct || !price || !amount">Añadir</button>
            </fieldset>
        </form>
    </div>
</template>

<style scoped>
#containerProduct {
    display: flex;
    align-items: center;
    justify-content: center;
}

.form-title {
    font-size: 1rem;
    font-weight: 700;
    text-align: center;
    color: #4e9cff;
    margin-bottom: 1rem;
    border-bottom: 2px solid #4e9cff;
    padding-bottom: 0.5rem;
}

fieldset {
    display: flex;
    flex-direction: column;
    gap: 10px;
    border-radius: 12px;
    border: none;
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    background: white;
}

input[type="text"]:focus,
input[type="number"]:focus {
    border-color: #4e9cff;
    outline: none;
}


button {
    background: linear-gradient(135deg, #4e9cff, #0066cc);
    cursor: pointer;
    border-radius: 8px;
    color: #fff;
    border: none;
    font-size: 1rem;
    padding: 0.7rem;
}

button:hover:not(:disabled) {
    background: linear-gradient(135deg, #66b2ff, #005bb5);
    transform: translateY(-2px);
}

input {
    padding: 0.6rem;
    border: 2px solid #ddd;
    border-radius: 8px;
    font-size: 1rem;
    transition: all 0.3s ease;
}

button:disabled {
    cursor: not-allowed;
    background: #ccc;
}


legend {
    text-align: center;
}

h3 {
    max-width: 400px;
    margin: 1.5rem auto 0;
    font-size: 1.4rem;
    font-weight: 700;
    color: #2a4365;
    text-align: center;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}
</style>

<script setup>

import { useProductoStore } from '../stores/producto.js';
import HeaderComponent from '../components/HeaderComponent.vue';


const productStore = useProductoStore();

const removeItem = (index) => {
  productStore.removeProduct(index);
}

</script>

<template>

  <HeaderComponent />

  <table v-if="productStore.products.length > 0">
    <thead>
      <tr>
        <th>#</th>
        <th> Nombre </th>
        <th> Precio </th>
        <th> Cantidad </th>
        <th> Total </th>
        <th> Borrar </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(producto, index) in productStore.products" :key="producto.id">
        <td> {{ index + 1 }} </td>
        <td> <router-link :to="{name: 'detalleProducto' , params: {id : producto.id} }" > {{ producto.name }}  </router-link>  </td>
        <td> {{ producto.price }} </td>
        <td> {{ producto.amount }} </td>
        <td> {{ producto.total.toFixed(2) }} € </td>
        <td @click="removeItem(index)"> 🗑️ </td>
      </tr>
    </tbody>
  </table>
  <h3 v-else>No hay productos que mostrar.</h3>



</template>

<style scoped>
h3 {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0;
}

table {
  width: 90%;
  max-width: 800px;
  margin: 2rem auto;
  border-collapse: collapse;
  background: white;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);
}


thead {
  background: #4e9cff;
  color: white;
  text-transform: uppercase;
  font-size: 0.9rem;
}

th {
  padding: 0.8rem;
  text-align: center;
}


td {
  padding: 0.8rem;
  border-bottom: 1px solid #f0f0f0;
  text-align: center;
}

tbody tr:hover {
  background: #f8fbff;
  transition: background 0.2s ease;
}


td:last-child {
  text-align: center;
  cursor: pointer;
  transition: transform 0.1s ease, color 0.2s ease;
}

td:last-child:hover {
  color: #e74c3c;
  transform: scale(1.2);
}


td:nth-last-child(2) {
  font-weight: bold;
  color: #333;
}


@media (max-width: 600px) {
  table {
    font-size: 0.85rem;
  }

  th,
  td {
    padding: 0.5rem;
  }
}
</style>

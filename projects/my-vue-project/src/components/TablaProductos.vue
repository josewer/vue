<script setup>

import {computed } from 'vue';

const props = defineProps({
    products: {
        type: Array
    }
});

const emit = defineEmits(["removeItem"])


const removeItem = (index) => {
    emit("removeItem" , index)
}

</script>

<template>

    <table>
        <thead>
            <tr>
                <th>#</th>
                <th> Nombre </th>
                <th> Precio </th>
                <th> Cantidad </th>
                <th> Total </th>
                <th> Borrar  </th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(producto , index) in products" :key="producto.id">
                <td> {{ index + 1 }}  </td>
                <td> {{ producto.name }} </td>
                <td> {{ producto.price }} </td>
                <td> {{ producto.amount }} </td>
                <td> {{ producto.getTotalPrice().toFixed(2) }} € </td>
                <td @click="removeItem(index)"> 🗑️ </td>
            </tr>
        </tbody>
    </table>

</template>

<style scoped>

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
  th, td {
    padding: 0.5rem;
  }
}
</style>

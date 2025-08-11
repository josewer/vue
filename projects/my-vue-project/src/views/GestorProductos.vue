<script setup>
import { computed, ref, watch, watchEffect } from 'vue';
import FormularioProducto from './FormularioProducto.vue';
import TablaProductos from './TablaProductos.vue';
import HeaderComponent from '../components/HeaderComponent.vue';


const products = ref([]);

function addProduct(product) {
  products.value.push(product);
}

function removeItem(index) {
  products.value.splice(index, 1);
}

const total = computed(() => {

  let sum = 0;
 
  for (let product of products.value) { sum += product.getTotalPrice(); }

  return sum;
});


const persona = ref({"nombre" : "Jose"})  

watchEffect( () => {
  console.log("Ha cambiado" , persona.value.nombre)
});

</script>

<template>

<HeaderComponent/>

<button @click="persona.nombre = 'Ana'">Cambiar</button>
  <FormularioProducto @addProduct="addProduct">
    <template v-slot:total>
      <h3>Total compra: {{ total.toFixed(2) }} €</h3>
    </template>
  </FormularioProducto>
  <TablaProductos v-if="products.length != 0" :products="products" @removeItem="removeItem" />

</template>


<style scoped>
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
<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { Animal } from '../models/Animal.js';
const animales = [
  new Animal(1, "Leon", 'https://upload.wikimedia.org/wikipedia/commons/7/73/Lion_waiting_in_Namibia.jpg'),
  new Animal(2, "Pinguino", 'https://images.unsplash.com/photo-1598439210625-5067c578f3f6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8cGluZyVDMyVCQ2lub3xlbnwwfHwwfHx8MA%3D%3D'),
  new Animal(3, "Elefante", 'https://upload.wikimedia.org/wikipedia/commons/3/37/African_Bush_Elephant.jpg')
];

</script>


<template>

  <HeaderComponent/>

    <ul class="animal-list">
        <li v-for="animal in animales" :key="animal.id" class="animal-item">
            <img :src="animal.img" :alt="animal.name" class="animal-img" />
            <p class="animal-name">{{ animal.name }}</p>
        </li>
    </ul>
</template>

<style scoped>
.animal-list {
    display: flex;
    gap: 1rem;
    list-style: none;
    padding: 0;
    flex-wrap: wrap;
    justify-content: center;
}

.animal-item {
    text-align: center;
    padding: 1rem;
    background-color: #f9f9f9;
    border-radius: 12px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    width: 150px;
    transition: transform 0.2s ease;
}

.animal-item:hover {
    transform: scale(1.05);
}

.animal-img {
    width: 100%;
    border-radius: 8px;
    object-fit: cover;
    height: 100px;
}

.animal-name {
    margin-top: 0.5rem;
    font-weight: bold;
    color: #333;
}
</style>
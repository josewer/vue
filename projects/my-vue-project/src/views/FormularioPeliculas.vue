<script setup>
import { reactive } from 'vue';
import HeaderComponent from '../components/HeaderComponent.vue';

const movie = reactive({
    title: "",
    duration: "",
    director: ""
});

const handleSubmit = () => {
    console.table(movie);
}

</script>

<template>

    <HeaderComponent />

    <div>
        <form @submit.prevent="handleSubmit">

            <input id="inputTitle" type="text" v-model="movie.title" placeholder="Titulo" />
            <input id="inputDuraction" type="number" v-model="movie.duration" placeholder="Duración" />
            <input id="inputDirector" type="text" v-model="movie.director" placeholder="Director" />
            <button>Enviar</button>

        </form>
    </div>

</template>

<style scoped>
    
div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 70vh;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

input,
button {
    border: none;
    border-radius: 10px;
    padding: 10px;
}

input:focus {
    border: none;
    border-radius: 10px;
    padding: 10px;
}

button:hover {
    border: none;
    border-radius: 10px;
    padding: 10px;
}



</style>
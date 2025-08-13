<script setup>
import { onMounted, ref, watch } from 'vue';
import { useNotesStore } from '../stores/note'
import { useToast } from 'vue-toastification';
import { Status } from '../enums/status';

const description = ref();
const noteStore = useNotesStore();
const toast = useToast();

const handleSubmit = () => {

    if (!description.value) {

        toast.error("La nota no puede estar vacía", {
            position: "top-right",
            timeout: 1000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true
        });

        return;
    }

    noteStore.addNote(description.value);
    description.value = "";
};

onMounted(async () => {

    await noteStore.getNotes();

    console.log(noteStore.status);

    toast.error("Algo salio mal al cargar los datos", {
        position: "bottom-right",
        timeout: 1000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
    });
});


</script>

<template>
    <form @submit.prevent="handleSubmit" class="note">
        <input type="text" v-model="description" placeholder="Nueva nota" />
        <button class="btn-plus ">+</button>
    </form>

</template>

<style scoped>
.error {
    color: red;
    font-weight: bold;
    font-size: 10px;
}

.note {
    background: #94bd91 url('../assets/paper-fibers.png');
    border: 1px solid #a7dda3;
    border-radius: 8px;
    padding: 16px;
    max-width: 250px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    font-family: "Segoe UI", Tahoma, sans-serif;
    position: relative;
    background-size: cover;
    background-blend-mode: multiply;
    /* Integra la textura con el color */

}

.note input[type="text"] {
    width: 100%;
    margin: 8px 0;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.note button {
    border-radius: 8px;
    align-items: center;
    justify-items: center;
    justify-content: center;
}

/* Efecto doblado en la esquina */
.note::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 20px 20px 0;
    border-style: solid;
    border-color: transparent #708f6e transparent transparent;
}

.btn-plus {
    background: #ffca28;
    border: none;
    border-radius: 50%;
    width: 32px;
    height: 32px;
    font-size: 1.5rem;
    color: #fff;
    font-weight: bold;
    cursor: pointer;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    transition: transform 0.15s ease, box-shadow 0.15s ease;
    user-select: none;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0;
}

.btn-plus:hover {
    background: #f9a825;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4);
    transform: scale(1.1);
}

.btn-plus:active {
    background: #f57f17;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transform: scale(0.95);
}
</style>
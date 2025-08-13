<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import { useNotesStore } from '../stores/note'
import Note from '../components/Note.vue';
import { ref } from 'vue';
import CreateNote from '../components/CreateNote.vue';

const notesStore = useNotesStore();
console.table(notesStore.notes)

</script>

<template>
    <HeaderComponent />

    <div class=" notes-board">
        <CreateNote />
        <Note v-for="note in notesStore.notes" :key="note.id" :note="note" />
        <h4 v-if="notesStore.notes.length == 0" style="display: block;" >Escribe tu primera nota</h4>
    </div>

</template>

<style scoped>
.notes-board {
    background: #caa472 url('../assets/paper-fibers.png');
    background-size: auto;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 16px;
    padding: 16px;

    /* Ocupar toda la ventana excepto el header */
    height: calc(100vh - 90px);
    overflow-y: auto;
    /* Scroll interno si se llena */
    align-items: start;
    /* No estira las notas */
}
</style>
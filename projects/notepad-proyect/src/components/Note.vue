<script setup>

defineProps(
    {
        note: {
            id: Number,
            description: String,
            check: Boolean
        }
    }
)

</script>

<template>
    <article class="note">
        <input type="text" v-model="note.description" />
        <input type="checkbox" v-model="note.check" />
    </article>
</template>

<style scoped>

.note {
    background: #fff9c4 url('../assets/paper-fibers.png');
    border: 1px solid #f0e68c;
    border-radius: 8px;
    padding: 16px;
    max-width: 250px;
    box-shadow: 3px 3px 6px rgba(0, 0, 0, 0.2);
    font-family: "Segoe UI", Tahoma, sans-serif;
    position: relative;
    background-size: cover;
    background-blend-mode: multiply; /* Integra la textura con el color */
}

/* Efecto doblado en la esquina */
.note::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    border-width: 0 20px 20px 0;
    border-style: solid;
    border-color: transparent #f0e68c transparent transparent;
}

/* Estilos del título */
.note h2 {
    margin-top: 0;
    font-size: 1.1rem;
}

/* Inputs */
.note input[type="text"] {
    width: 100%;
    margin: 8px 0;
    padding: 6px;
    border: 1px solid #ccc;
    border-radius: 4px;
}

.note input[type="checkbox"] {
    margin-top: 8px;
}


</style>
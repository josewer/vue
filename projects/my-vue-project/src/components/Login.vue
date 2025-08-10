<script setup >
    import { ref } from 'vue';

    const name = ref()

    const emit = defineEmits(["login"])

    const login = () => {
        emit("login" , name.value)
    }

</script>

<template>

    <div>
        <input id="inputName" v-model="name" placeholder="Jose..."/>
        <button @click="login">Haz login</button>
    </div>

    <slot name="arriba"></slot>
    <slot name="abajo"></slot>

</template>

<style scoped>
    div {
        display: flex;
        flex-direction: column;
    }
</style>
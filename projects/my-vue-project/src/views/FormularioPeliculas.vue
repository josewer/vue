<script setup>
import HeaderComponent from '../components/HeaderComponent.vue';
import * as Yup from 'yup'
import { ErrorMessage, Field, Form } from 'vee-validate';

const schema = Yup.object({
    titulo: Yup.string().required("El titulo no puede ser vacio"),
    director: Yup.string().required("El director no puede ser vacio"),
    duracion: Yup.number().typeError("La duración debe ser un número").required("La duracion no puede ser vacio")
});



const handleSubmit = (values , { resetForm }) => {
    console.table(values);
    resetForm();
};

</script>

<template>

    <HeaderComponent />

    <div>
        <Form :validation-schema="schema" @submit="handleSubmit">
            <Field id="inputTitle" name="titulo" placeholder="Titulo" />
            <ErrorMessage name="titulo"/>
            <Field id="inputDuraction" name="duracion" placeholder="Duración" />
            <ErrorMessage name="duracion"/>
            <Field id="inputDirector" name="director" placeholder="Director" />
            <ErrorMessage name="director"/>
            <button>Enviar</button>
        </Form>
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
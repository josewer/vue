import axios from "axios";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useUserStore = defineStore("user" , () => {
    
    const user = ref();

/*
    const getUser = async () => {
        console.log("entro!")
        const URL_API = "https://jsonplaceholder.typicode.com/users/1";
        const response = await fetch(URL_API);
        const data = await response.json();
        user.value = data;
        console.log(user.value.name)
    }
*/

// Con AXIOS
    const getUser = async () => {
        console.log("entro!")
        const URL_API = "https://jsonplaceholder.typicode.com/users/1";
        const response = await axios.get(URL_API);
        user.value = response.data;
        console.log(user.value.name)
    }

    const closeSession = () => {
        user.value = null;
    }


    return {
        user, 
        getUser,
        closeSession
    }

});
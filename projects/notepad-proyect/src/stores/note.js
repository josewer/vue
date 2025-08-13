import { defineStore } from "pinia";
import { ref } from "vue";
import { Status } from "../enums/status";

export const useNotesStore = defineStore("notes", () => {

    const notes = ref([]);
    const status = ref();
    const URL_API = 'https://notes.free.beeceptor.com';

    const getNotes = async () => {
  
        try {
            status.value = Status.LOADING;

            const response = await fetch(URL_API, {
                method: "GET"
            });

            notes.value = await response.json();

            status.value = Status.SUCESS;
            console.table(notes.value)
        } catch (e) {
            console.error(e)
            status.value = Status.ERROR;
        }
    };

    /*
    const addNote = (description) => {
        notes.value.unshift({
            id: crypto.randomUUID(),
            description: description,
            check: false
        })
    };
    */

    const addNote = async (description) => {
        const note = {
            id: crypto.randomUUID(),
            description: description,
            check: false
        };

        try {
            status.value = Status.LOADING;

            const response = await fetch(URL_API , {
                method: "POST" ,
                body: JSON.stringify(note),
                headers: {  "Content-type": "application/json"  }
            });

            notes.value.push(note);

            status.value = Status.SUCESS;
        } catch (e) {
            console.error(e);
            status.value = Status.ERROR;
        }
    };

    return {
        notes,
        addNote,
        getNotes,
        status
    };

}, {
    //  persist: true
});
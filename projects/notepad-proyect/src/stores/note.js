import { defineStore } from "pinia";
import { ref } from "vue";

export const useNotesStore = defineStore("notes", () => {

    const notes = ref([]);

    const addNote = (description) => {
        notes.value.unshift({
            id: crypto.randomUUID(),
            description: description,
            check: false
        })
    };

    return {
        notes,
        addNote
    };

} , {
    persist : true
});
import { mount } from "@vue/test-utils";
import { describe, expect, it, vi } from "vitest";
import AnimalCard from "./AnimalCard.vue";


describe("AnimalCard" , () => {

    vi.mock("../stores/user.js" , () => ({
        useUserStore : () => ({
            user : "Jose",
            getUser : () => {},
            closeSession : () => {}
        })
    }));

    it ("Prueba carga ventana correcta" , () => {
        const animal = mount(AnimalCard);
        expect(animal.find("h1").text()).contain("El animal seleccionado es:");
    });


    it ("Prueba seleccionar animal" , async () => {
        const animal = mount(AnimalCard);
        await animal.find("#animal-2").trigger("click");
        expect(animal.find("#titleAnimal").text().toLowerCase()).toBe("El animal seleccionado es: pinguino".toLowerCase());
    });
})
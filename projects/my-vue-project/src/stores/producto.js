import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useProductoStore = defineStore("productoStore", () => {

    const products = ref([]);

    function addProduct(product) {
        products.value.push(product);
    }

    function removeProduct(index) {
        products.value.splice(index, 1);
    }

    const total = computed(() => {

        let sum = 0;

        for (let product of products.value) { sum += product.total; }

        return sum;
    });


    return {
        products,
        addProduct,
        removeProduct,
        total
    }
}, {
    persist: true
});
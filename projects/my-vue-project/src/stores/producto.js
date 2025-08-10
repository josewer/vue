import { defineStore } from "pinia";
import { reactive } from "vue";

export const useProductoStore = defineStore("productoStore", () => {

    const products = reactive([]);

    function addProduct(product) {
        products.push(product);
    }

    function removeProduct(index) {
        products.splice(index, 1);
    }

    const total = computed(() => {

        let sum = 0;

        for (let product of products) { sum += product.getTotalPrice(); }

        return sum;
    });


    return {
        products,
        addProduct,
        removeProduct,
        total
    }

});
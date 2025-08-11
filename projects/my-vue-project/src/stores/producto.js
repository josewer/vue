import { defineStore } from "pinia";

export const useProductoStore = defineStore("productoStore", {
    state: () => ({
        products: []
    }),

    getters: {
        total: (state) => state.products.reduce((sum, p) => sum + p.total, 0),

        getProduct: (state) => {
            return (id) => state.products.find((p) => p.id === id) ?? null;
        }
    },

    actions: {
        addProduct(product) {
            this.products.push(product);
        },

        removeProduct(index) {
            this.products.splice(index, 1);
        }
    },

    persist: true
});

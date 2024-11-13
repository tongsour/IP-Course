import axios from 'axios';
import { defineStore } from 'pinia';

export const useProductStore = defineStore('product', {
  state: () => ({
    selectedGroupName: '', // Initially, no group is selected
    groups: [],
    promotions: [],
    categories: [],
    products: [],
  }),

  getters: {
    // Getter to fetch filtered categories based on the selected group
    filteredCategories(state) {
      if (state.selectedGroupName === '') {
        return state.categories; // If no group is selected, show all categories
      }
      return state.categories.filter(category => category.group === state.selectedGroupName);
    },

    // Getter to fetch categories by group
    getCategoriesByGroup: (state) => (groupName) => {
      return state.categories.filter(category => category.group === groupName);
    },

    // Getter to fetch products by group
    getProductsByGroup: (state) => (groupName) => {
      return state.products.filter(product => product.group === groupName);
    },

    // Getter to fetch popular products
    getPopularProducts: (state) => {
      return state.products.filter(product => product.countSold > 10);
    },
  },

  actions: {
    // Setter for selected group
    setSelectedGroup(group) {
      this.selectedGroupName = group;
    },

    async fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3000/api/categories");
        this.categories = response.data;
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    },

    async fetchPromotions() {
      try {
        const response = await axios.get("http://localhost:3000/api/promotions");
        this.promotions = response.data;
      } catch (error) {
        console.error("Error fetching promotions:", error);
      }
    },

    async fetchProducts() {
      try {
        const response = await axios.get("http://localhost:3000/api/products");
        this.products = response.data;
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    },

    async fetchGroups() {
      try {
        const response = await axios.get("http://localhost:3000/api/groups");
        this.groups = response.data;
      } catch (error) {
        console.error("Error fetching groups:", error);
      }
    },
  },
});

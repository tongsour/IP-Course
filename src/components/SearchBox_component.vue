<template>
    <div class="search-box">
      <!-- Category Dropdown -->
      <div class="category-dropdown">
        <MenuItem
          isDropdown
          :selectedTitle="selectedCategory"
          :items="categories"
          placeholder="All Categories"
          @itemSelected="handleCategorySelection"
        />
      </div>
      |
      <!-- Search Input -->
      <div class="search-container">
        <input
          type="text"
          v-model="searchQuery"
          class="search-input"
          placeholder="Search for items"
          @input="onSearch"
        />
        <button class="search-btn" @click="onSearch">
          <span class="material-icons">search</span>
        </button>
      </div>
    </div>
  </template>
  <script>
  import MenuItem from "./MenuItem.vue";
  export default {
    name: "SearchBox",
    components: {
      MenuItem,
    },
    data() {
      return {
        categories: ["Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"],
        selectedCategory: "All Categories",
        searchQuery: "",
      };
    },
    methods: {
      onSearch() {
        console.log("Searching for:", this.searchQuery, "in category:", this.selectedCategory);
      },
    },
  };
  </script>
  <style scoped>
  .search-box {
    display: flex;
    align-items: center;
    border: 1px solid #BCE3C9; 
    border-radius: 6px;
    padding: 3px;
    background-color: white;
    gap: 10px;
    width: 100%; 
    max-width: 700px; 
  }
  .category-dropdown {
    position: relative;
  }
  .search-container {
    flex: 1;
    display: flex;
    align-items: center;
    gap: 150px;
  }
  .search-input {
    flex: 1;
    padding: 8px;
    border: none; 
    outline: none; 
    border-radius: 4px;
  }
  .search-btn {
    background-color: transparent;
    border: none;
    cursor: pointer;
    color: #444;
  }
  .search-btn .material-icons {
    font-size: 20px;
  }
  </style>
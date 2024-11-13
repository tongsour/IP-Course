<script setup>
import { onMounted, computed } from "vue"; // Add computed here
import { useProductStore } from "./stores/productStore"; // Import the store
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import FeatureCategory from "./components/FeatureCategory.vue";

// Initialize the product store
const productStore = useProductStore();

// Computed property to get filtered categories from store
const filteredCategories = computed(() => productStore.filteredCategories);

// Method to select a group and update the store state
const selectGroup = (group) => {
  productStore.setSelectedGroup(group);
};

// Fetch categories, promotions, and groups on component mount
onMounted(async () => {
  await productStore.fetchCategories();
  await productStore.fetchPromotions();
  await productStore.fetchGroups();
  console.log("Categories loaded:", productStore.categories);
  console.log("Promotions loaded:", productStore.promotions);
  console.log("Groups loaded:", productStore.groups);
});
</script>

<template>
  <div id="app">
    <div class="featured-categories">
      <h1 class="text-3xl">Selected Items</h1>
      <div class="button-group">
        <!-- Display group names as buttons -->
        <button
          v-for="(group, index) in productStore.groups"
          :key="index"
          @click="() => selectGroup(group)"
          class="feature-button"
        >
          {{ group }}
        </button>
      </div>
    </div>

    <div class="category-card">
      <!-- Use filteredCategories to show categories based on selected group -->
      <Category
        v-for="(f, index) in filteredCategories" 
        :key="index"
        :image="f.image"
        :name="f.name"
        :productCount="f.productCount"
        :color="f.color"
      />
    </div>

    <div class="promotion-section">
      <Promotion
        v-for="(promotion, index) in productStore.promotions" 
        :key="index"
        :title="promotion.title"
        :description="promotion.description"
        :image="promotion.image"
        :color="promotion.color"
        :width="promotion.width"
      />
    </div>
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
}

.featured-categories {
  margin-top: 20px;
  text-align: center;
}

.button-group {
  display: flex;
  gap: 10px;
  justify-content: center;
  margin-top: 10px;
}

.feature-button {
  padding: 8px 12px;
  background-color: #007bff; /* Primary color for button */
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

.feature-button:hover {
  background-color: #0056b3; /* Darker shade on hover */
}

.category-card {
  display: flex;
  justify-content: space-between;
  padding: 20px;
}

.promotion-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
}
</style>


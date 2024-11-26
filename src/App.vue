<script setup>
import { onMounted, computed, ref } from "vue"; // Add computed here
import { useProductStore } from "./stores/productStore"; // Import the store
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";
import Menu_component from "./components/Menu_component.vue";
import Product_component from "./components/Product_component.vue";

// Initialize the product store
const productStore = useProductStore();

// Computed property to get filtered categories from store
const filteredCategories = computed(() => productStore.filteredCategories);

// Method to select a group and update the store state
const selectGroup = (group) => {
  productStore.setSelectedGroup(group);
};

const categoryByGroup = (group) => {
  productStore.setSelectedGroup(group); 
  console.log("Selected group:", group);
};

const products = computed(() => {
  if (selectedGroup.value === "") {
    return productStore.products; // Show all products if no group is selected
  }
  return productStore.getProductsByGroup(selectedGroup.value); // Filtered products
});

const productByGroup = (group) => {
  selectedGroup.value = group;
  console.log("Selected group for products:", group);
};
const selectedGroup = ref("");

// Fetch categories, promotions, and groups on component mount
onMounted(async () => {
  await productStore.fetchCategories();
  await productStore.fetchPromotions();
  await productStore.fetchGroups();
  await productStore.fetchProducts();
  console.log("Categories loaded:", productStore.categories);
  console.log("Promotions loaded:", productStore.promotions);
  console.log("Groups loaded:", productStore.groups);
  console.log("Products loaded:", productStore.products);
});

const title = "feature categories";
const titles = "Popular Products";
</script>

<template>
  <div id="app">
    <div>
      <Menu_component
        :name = "title"
        :group = "productStore.groups"
        @group-select = categoryByGroup
      />
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

    <div>
      <Menu_component
        :name = "titles"
        :group = "productStore.groups"
        @group-select = productByGroup
      />
    </div>
    
    <div>
      <Product_component
        :products = "products"
      />
    </div>
    
  </div>
</template>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 2850px;
  height: auto;
  padding-bottom: 1000px;
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
  padding: 20px;
}

.promotion-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  margin-top: 20px;
}
</style>


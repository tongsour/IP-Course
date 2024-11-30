<script setup>
// Imports
import { onMounted, computed, ref } from "vue";
import Category from "@/components/Category.vue";
import Promotion from "@/components/Promotion.vue";
import Menu_component from "@/components/Menu_component.vue";
import Product_component from "@/components/Product_component.vue";
import { useProductStore } from "@/stores/productStore";

// Store Initialization
const productStore = useProductStore();

// Reactive Variables
const selectedGroup = ref("");

// Computed Properties
const filteredCategories = computed(() => productStore.filteredCategories);
const products = computed(() => {
  return selectedGroup.value === ""
    ? productStore.products // Show all products if no group is selected
    : productStore.getProductsByGroup(selectedGroup.value); // Filtered products
});

// Methods
const selectGroup = (group) => {
  productStore.setSelectedGroup(group);
};

const categoryByGroup = (group) => {
  productStore.setSelectedGroup(group);
  console.log("Selected group:", group);
};

const productByGroup = (group) => {
  selectedGroup.value = group;
  console.log("Selected group for products:", group);
};

// Lifecycle Hook
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

// Component Titles
const title = "Featured Categories";
const titles = "Popular Products";
</script>


<template>
  <div id="app">
    <!-- Menu Component for Category Selection -->
    <div>
      <Menu_component
        :name="title"
        :group="productStore.groups"
        @group-select="categoryByGroup"
      />
    </div>

    <!-- Category Cards -->
    <div class="category-card">
      <Category
        v-for="(f, index) in filteredCategories"
        :key="index"
        :image="f.image"
        :name="f.name"
        :productCount="f.productCount"
        :color="f.color"
      />
    </div>

    <!-- Promotions Section -->
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

    <!-- Menu Component for Product Selection -->
    <div>
      <Menu_component
        :name="titles"
        :group="productStore.groups"
        @group-select="productByGroup"
      />
    </div>

    <!-- Product Component -->
    <div>
      <Product_component :products="products" />
    </div>
  </div>
</template>


<style scoped>
#app {
  display: flex;
  flex-direction: column;
  width: 100%;
  align-content: start;
}

.categorie-card {
  display: inline-flex;
  gap: 15px;
  margin-top: 20px;
}

.promotion-section {
  display: flex;
  gap: 20px;
  margin-top: 30px;
}
</style>


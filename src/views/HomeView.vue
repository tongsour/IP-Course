<script setup>
// Imports
import { onMounted, computed, ref } from "vue";
import Category from "@/components/Category.vue";
import Promotion from "@/components/Promotion.vue";
import Menu_component from "@/components/Menu_component.vue";
import Product_component from "@/components/Product_component.vue";
import { useProductStore } from "@/stores/productStore";
import Showcase from "@/components/ShowCase_component.vue";

// Store Initialization
const productStore = useProductStore();

// Reactive Variables
const selectedCategoryGroup = ref("All");
const selectedProductGroup = ref("All");
const filteredCategories = ref([]);
const filteredProducts = ref([]);

// Computed Properties
const promotions = computed(() => productStore.promotions);
const allCategories = computed(() => productStore.categories);
const allProducts = computed(() => productStore.products);

// Methods
const filterCategories = (group) => {
  selectedCategoryGroup.value = group;
  filteredCategories.value =
    group === "All"
      ? allCategories.value
      : productStore.getCategoriesByGroup(group);
};

const filterProducts = (group) => {
  selectedProductGroup.value = group;
  filteredProducts.value =
    group === "All"
      ? allProducts.value
      : productStore.getProductsByGroup(group);
};

// Lifecycle Hook
onMounted(async () => {
  await productStore.fetchCategories();
  filteredCategories.value = allCategories.value;
  await productStore.fetchPromotions();
  await productStore.fetchProducts();
  filteredProducts.value = allProducts.value;
});

// Component Titles
const title = "Featured Categories";
const titles = "Popular Products";
</script>

<template>
<div id="app">
  <div>
    <!--Showcase Component-->
    <div>
      <Showcase/>
    </div>

    <!-- Menu Component for Category Selection -->
    <div>
      <Menu_component
        :name="title"
        :group="productStore.groups"
        @group-select="filterCategories"
      />
    </div>

    <!-- Category Cards -->
    <div class="category-card">
      <Category
        v-for="(category, index) in filteredCategories"
        :key="index"
        :image="category.image"
        :name="category.name"
        :productCount="category.productCount"
        :color="category.color"
      />
    </div>

    <!-- Promotions Section -->
    <div class="promotion-section">
      <Promotion
        v-for="(promotion, index) in promotions"
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
        @group-select="filterProducts"
      />
    </div>

    <!-- Product Component -->
    <div>
      <Product_component
        v-for="(product, index) in filteredProducts"
        :key="index"
        :productId="product.id"
      />
    </div>
  </div>
</div>
</template>

<style scoped>
#app {
  max-width: 100%;
}

.category-card {
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

<script setup>
import axios from "axios";
import { onMounted, ref } from "vue"; // Import required Vue functions
import Category from "./components/Category.vue";
import Promotion from "./components/Promotion.vue";

// import Promotion from './components/Promotion.vue'; // Uncomment if needed

const fruits = ref([]);
const promotions = ref([]);

// Fetching data when the component is mounted
const fetchCategoryData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/categories");
    fruits.value = response.data;
    console.log("Fetched category data:", response.data);
  } catch (error) {
    console.error("Error fetching category data:", error);
  }
};
const fetchPromotionsData = async () => {
  try {
    const response = await axios.get("http://localhost:3000/api/promotions");
    promotions.value = response.data;
    console.log("Fetched Promotions data:", response.data);
  } catch (error) {
    console.error("Error fetching Promotions data:", error);
  }
};

// Lifecycle hook to fetch data on component mount
onMounted(fetchCategoryData);
onMounted(fetchPromotionsData);
</script>

<template>
  <div id="app">
    <div class="category-card">
      <Category
        v-for="(f, index) in fruits"
        :key="index"
        :image="f.image"
        :name="f.name"
        :productCount="f.productCount"
        :color="f.color"
      />
    </div>

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
  </div>
</template>

<style scoped>
#app{
  display: flex;
  flex-direction: column;
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

<template>
  <div class="flex flex-col">
    <div
      class="grid grid-cols-2 gap-2 md:grid-cols-3 lg:grid-cols-10 mt-10 w-full h-auto m-auto items-center mx-2"
    >
      <Category
        v-for="(f, index) in fruits"
        :key="index"
        :name="f.name"
        :image="f.image"
        :productCount="f.productCount"
        :color="f.color"
      ></Category>
    </div>
    <div class="flex justify-center gap-2 mx-2">
      <Promotion
        v-for="(promotion, index) in promotions"
        :key="index"
        :title="promotion.title"
        :color="promotion.color"
        :buttonColor="promotion.buttonColor"
        :image="promotion.image"
      ></Promotion>
    </div>
  </div>
</template>

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
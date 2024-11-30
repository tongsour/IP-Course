<template> 
    <button class="category" :style="{ color: color }">
      <img :src="image" alt="category image" class="category-img" />
      <h3 class="name">{{ name }}</h3>
      <p class="productCount">{{ productCount }} items</p>
    </button>
</template> 
  <script>
  export default {
    props: {
      image: String,
      name: String,
      productCount: Number,
      color: String,
    },
  };
  </script>
  
  <style scoped>
  .category {
    border: none;
    width: 130px;
    height: auto;
    padding: 15px;
    border-radius: 12px;
    background-color: #f7f8fa;
    text-align: center;
    margin: 10px;
    transition: transform 0.3s, box-shadow 0.3s;
  }
  
  .category:hover {
    cursor: pointer;
    transform: translateY(-5px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .category-img {
    width: 60px;
    height: 60px;
    object-fit: contain;
    margin-bottom: 10px;
  }
  
  .name {
    color: #253d4e;
    font-size: 14px;
    font-weight: bold;
    margin-bottom: 8px;
  }
  
  .productCount {
    color: #b6b6b6;
    font-size: 14px;
  }

  </style>
  
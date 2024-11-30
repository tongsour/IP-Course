<template>
    <div class="promotion" :style="{ backgroundColor: color }">
      <div class="text">
        <h2 class="title">{{ title }}</h2>
        <button class="shop-now-btn" @click="ShopNow">Shop Now →</button>
      </div>
      <img :src="image" alt="promotion image" class="promotion-img" :style="{ width: width + 'px' }" />
    </div>
  </template>
  
  <script>
  export default {
    props: {
      title: String,
      image: String,
      color: String,
      width: Number,
    },
    methods: {
      ShopNow() {
        alert(`Let's go Shopping: ${this.title}`);
      },
    },
  };
  </script>
  
  <style scoped>
  .promotion {
    display: flex;
    align-items: center;
    padding: 20px;
    border-radius: 12px;
    color: white;
    height: 180px;
    position: relative;
  }
  
  .text {
    max-width: 250px;
  }
  
  .title {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 10px;
  }
  
  .shop-now-btn {
    background-color: #ffffff;
    color: #253d4e;
    border: none;
    padding: 8px 16px;
    border-radius: 20px;
    font-size: 14px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  .shop-now-btn:hover {
    background-color: hwb(137 28% 17%);
  }
  
  .promotion-img {
    position: absolute;
    bottom: 10px;
    right: 10px;
    max-height: 100px;
  }
  </style>
  
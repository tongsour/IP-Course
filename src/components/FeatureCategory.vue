<template>
    <div>
      <h3>{{ name }}</h3>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      name: {
        type: String,
        required: true,
      },
    },
  };
  </script>
  
  <style scoped>
  .featured-categories {
  display: flex;
  flex-direction: column;
  align-items: center; /* Center-align items horizontally */
  text-align: center; /* Center-align text inside elements */
  margin-top: 20px;
}

.category-item {
  margin: 5px 0;
  cursor: pointer;
}

.category-card {
  display: flex;
  justify-content: center; /* Center the category card section */
  padding: 20px;
}

.promotion-section {
  display: flex;
  justify-content: center; /* Center the promotion section */
  padding: 20px;
  margin-top: 20px;
}

  </style>
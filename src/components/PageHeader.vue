<template>
    <div class="page-header">
      <h1>Coke & Milk</h1>
      <p class="breadcrumb">Home › Categories › Coke & Milk</p>
    </div>
  </template>
  
  <script>
  export default {};
  </script>
  
  <style scoped>
  .page-header {
    background-color: #e3f6e4; 
    padding: 2rem;
    border-radius: 10px;
    text-align: left;
    position: relative;
    overflow: hidden;
  }
  
  .page-header::before {
    content: "";
    background-image: url("https://your-pattern-url.com"); 
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0.2; 
    z-index: 0;
  }
  
  h1 {
    color: #253d4e; 
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
    z-index: 1; 
    position: relative;
  }
  
  .breadcrumb {
    color: #7e7e7e; 
    font-size: 0.875rem;
    margin-top: 0.5rem;
    z-index: 1; 
    position: relative;
  }
  </style>
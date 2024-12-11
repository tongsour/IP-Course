<template>
    <header>
      <nav>
        <h2>Header</h2>
        <router-link to="/page1">Page 1</router-link> |
        <router-link to="/page2">Page 2</router-link> |
        <router-link to="/page3">Page 3</router-link>
      </nav>
    </header>
  </template>
  
  <script>
  export default {
    name: "NavBar",
  };
  </script>
  
  <style>
  nav {
    background-color: #f0f0f0;
    padding: 10px;
    display: flex;
    gap: 15px;
    justify-content: space-between;
  }
  </style>
  
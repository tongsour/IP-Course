<template>
    <aside>
      <ul>
        <router-link to="section1"><li>Section 1</li></router-link>
        <router-link to="section2"><li>Section 2</li></router-link>
        <router-link to="section3"><li>Section 3</li></router-link>
        <router-link to="section4"><li>Section 4</li></router-link>
      </ul>
    </aside>
  </template>
  
  <script>
  export default {
    name: "Menu",
  };
  </script>
  
  <style>
  aside {
    width: 200px;
    background-color: #e0e0e0;
    padding: 10px;
  }
  ul {
    list-style: none;
    padding: 0;
  }
  li {
    margin: 10px 0;
    cursor: pointer;
  }
  </style>
  
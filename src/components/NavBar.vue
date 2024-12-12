<template>
    <div>
      <!-- Navbar -->
      <nav class="navbar">
        <div class="navbar-container">
          <!-- Left side: Search Box and Logo -->
          <div class="left-nav">
            <router-link to="/">
            <img src="@/assets/images/logo.png" alt="Logo" class="logo" />
          </router-link>
            
            <SearchBox />
          </div>
          <!-- Right side: Account, Compare, Wishlist, Cart -->
          <div class="right-nav">
            <MenuItem
              icon="person"
              label="Account"
              :iconColor="'#253D4E'"
              :textColor="'#495057'"
              to="/account" 
            />
            <MenuItem
              icon="sync"
              label="Compare"
              :iconColor="'#253D4E'"
              :textColor="'#495057'"
              to="/compare"
            />
            <MenuItem
              icon="favorite_border"
              label="Wishlist"
              :iconColor="'#253D4E'"
              :textColor="'#495057'"
              to="/wishlist"
            />
            <MenuItem
              icon="shopping_cart"
              label="Cart"
              :iconColor="'#253D4E'"
              :textColor="'#495057'"
              to="/cart"
            />
          </div>
        </div>
      </nav>
      <!-- Sub Navbar -->
      <hr />
      <div class="sub-navbar">
        <MenuItem
          id="BrowseCate"
          isDropdown
          :icon="gridIcon"
          :iconColor="'#FFFFFF'"
          :textColor="'#FFFFFF'"
          :arrowColor="'#FFFFFF'"
          :selectedTitle="selectedTitle"
          :items="items"
          placeholder="Browse All Categories"
          :fontWeight="'600'"
          @itemSelected="handleItemSelected"
        />
        <MenuItem
          id="sub-menu"
          icon="local_fire_department"
          label="Hot Deals"
          :iconColor="'#3BB77E'"
          :textColor="'#253D4E'"
          :fontWeight="'600'"
          to="/pageHeader"
        />
        <MenuItem
          label="Home"
          :iconColor="'#3BB77E'"
          :textColor="'#253D4E'"
          :fontWeight="'600'"
          to="/pageHeader"
        />
        <MenuItem
          isDropdown
          :iconColor="'#27AE60'"
          :textColor="'#253D4E'"
          :arrowColor="'#7E7E7E'"
          :selectedTitle="'Food'"
          :items="foodItems"
          placeholder="Select Food"
          :fontWeight="'600'"
          @itemSelected="handleItemSelected"
        />
        <MenuItem
          label="Drink"
          :iconColor="'#3BB77E'"
          :textColor="'#253D4E'"
          :fontWeight="'600'"
          to="/pageHeader"
        />
        <MenuItem
          label="Cookies"
          :iconColor="'#3BB77E'"
          :textColor="'#253D4E'"
          :fontWeight="'600'"
          to="/pageHeader"
        />
        <MenuItem
          isDropdown
          :iconColor="'#2980B9'"
          :textColor="'#253D4E'"
          :arrowColor="'#7E7E7E'"
          :selectedTitle="'Vegetables'"
          :items="vegetableItems"
          placeholder="Select Vegetables"
          :fontWeight="'600'"
          @itemSelected="handleItemSelected"
        />
        <MenuItem
          isDropdown
          :iconColor="'#8E44AD'"
          :textColor="'#253D4E'"
          :arrowColor="'#7E7E7E'"
          :selectedTitle="'Meat & Seafood'"
          :items="meatSeafoodItems"
          placeholder="Select Meat & Seafood"
          :fontWeight="'600'"
          @itemSelected="handleItemSelected"
        />
        <MenuItem
          label="Bakery"
          :iconColor="'#3BB77E'"
          :textColor="'#253D4E'"
          :fontWeight="'600'"
          to="/pageHeader"
        />
        <img
          src="@/assets/images/hotline.png"
          alt="Hotline"
          class="hotline-image"
        />
      </div>
      <hr />
    </div>
  </template>
  <script>
  import SearchBox from "@/components/SearchBox.vue";
  import MenuItem from "@/components/MenuItem.vue";
  export default {
    name: "NavBar",
    components: {
      SearchBox,
      MenuItem,
    },
    data() {
      return {
        gridIcon: "grid_view",
        selectedTitle: "Browse All Categories",
        items: ["Milks & Diaries", "Coffees & Teas", "Pet Foods", "Meats", "Vegetables", "Fruits"],
        foodItems: ["Pizza", "Burger", "Pasta"],
        vegetableItems: ["Carrot", "Broccoli", "Spinach"],
        meatSeafoodItems: ["Chicken", "Salmon", "Shrimp"],
      };
    },
    methods: {
      handleItemSelected(item) {
        console.log(`Selected item: ${item}`);
        if (item === "Pizza") {
          this.$router.push("/food/pizza");
        } else if (item === "Carrot") {
          this.$router.push("/vegetables/carrot");
        }
      },
    },
  };
  </script>
  <style scoped>
  .navbar {
    background-color: white;
    padding: 10px 20px;
    color: #495057;
  }
  .navbar-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    background-color: white;
  }
  .left-nav {
    display: flex;
    align-items: center;
    gap: 10px;
  }
  .logo {
    width: 200px;
    height: auto;
    margin-right: 3em;
  }
  .right-nav {
    display: flex;
    gap: 16px;
    align-items: center;
  }
  .sub-navbar {
    display: flex;
    align-items: center;
    justify-content: space-around;
    background-color: white;
    padding: 10px;
    padding-top: 0px;
    padding-bottom: 0px;
    border-radius: 5px;
  }
  .hotline-image {
    width: auto;
    height: 44px;
    margin-left: 10em;
  }
  .hotline-image:hover {
    cursor: pointer;
  }
  #BrowseCate {
    width: fit-content;
    background-color: #3bb77e;
    border-radius: 5px;
    margin-left: 1.5em;
  }
  </style>
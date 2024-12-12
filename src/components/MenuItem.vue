<template>
  <div>
    <!-- Default button mode -->
    <button
  v-if="!isDropdown"
  class="menu-bt1"
  :aria-label="label"
  :title="label"
  @click="handleClick"
  :style="{ fontWeight }"
>
  <span v-if="icon" class="material-icons" :style="{ color: iconColor }">{{ icon }}</span>
  <slot name="label" :style="{ color: textColor, fontWeight }">{{ label }}</slot>
</button>
    <!-- Dropdown mode -->
    <div v-else class="dropdown-wrapper">
      <div class="select-wrapper">
        <div class="custom-dropdown" @click="toggleDropdown">
          <span class="selected-option" :style="{ fontWeight }">
            <span v-if="icon" class="material-icons restaurant-icon" :style="{ color: iconColor }">{{ icon }}</span>
            <span :style="{ color: textColor }">{{ selectedTitle || placeholder }}</span>
            <span class="material-icons dropdown-icon" :style="{ color: arrowColor }">arrow_drop_down</span>
          </span>
        </div>
        <div v-if="isDropdownOpen" class="dropdown-list">
          <div
            v-for="item in items"
            :key="item"
            class="dropdown-item"
            @click="handleItemClick(item)"
            :style="{ fontWeight }"
          >
            {{ item }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "MenuItem",
  props: {
    icon: {
      type: String,
      default: '',
    },
    label: {
      type: String,
      default: '',
    },
    isDropdown: {
      type: Boolean,
      default: false,
    },
    items: {
      type: Array,
      default: () => [],
    },
    selectedTitle: {
      type: String,
      default: '',
    },
    placeholder: {
      type: String,
      default: 'Select an option',
    },
    iconColor: {
      type: String,
      default: '#333',
    },
    textColor: {
      type: String,
      default: '#495057',
    },
    arrowColor: {
      type: String,
      default: '#333',
    },
    fontWeight: {
      type: String,
      default: 'normal',
    },
    to: {
      type: String,
      default: null, // Optional route path
    },
  },
  data() {
    return {
      isDropdownOpen: false,
    };
  },
  methods: {
    toggleDropdown() {
      this.isDropdownOpen = !this.isDropdownOpen;
    },
    handleItemClick(item) {
      this.isDropdownOpen = false;
      this.$emit('itemSelected', item);
    },
    handleClick() {
      if (this.to) {
        this.$router.push(this.to);
      } else {
        this.$emit('click');
      }
    },
  },
};
</script>
<style scoped>
/* Button styles */
.menu-bt1 {
  font-size: 16px;
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 6px;
  transition: color 0.3s;
}
.menu-bt1:hover {
  color: #1a73e8;
}
/* Dropdown styles */
.dropdown-wrapper {
  display: flex;
  align-items: center;
  position: relative;
}
.restaurant-icon {
  font-size: 20px;
  margin-right: 4px;
  vertical-align: middle;
}
.select-wrapper {
  position: relative;
  display: inline-block;
}
.custom-dropdown {
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  width: auto;
}
.selected-option {
  flex-grow: 1;
  display: flex;
  align-items: center;
  text-align: left;
  padding: 5px;
  background-color: transparent;
  gap: 4px;
}
.dropdown-icon {
  font-size: 16px;
  margin-left: 5px;
}
.dropdown-list {
  position: absolute;
  top: 100%;
  right: 0;
  width: 100%;
  border: 1px solid #ccc;
  background-color: white;
  z-index: 100;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}
.dropdown-item {
  padding: 5px 10px;
  cursor: pointer;
  transition: background-color 0.3s;
}
.dropdown-item:hover {
  background-color: #f0f0f0;
}
</style>
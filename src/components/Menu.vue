<template>
  <div class="menu-container">
    <aside class="menu-sidebar">
      <h3>Menu</h3>
      <ul>
        <li
          v-for="section in sections"
          :key="section.id"
          :class="{ active: section.id === activeSection }"
          @click="setActiveSection(section.id)"
        >
          {{ section.title }}
        </li>
      </ul>
    </aside>
    <main class="menu-content">
      <h1>Welcome to Page {{ page }}</h1>
      <hr />
      <p>This is Section {{ activeSection }} of Page {{ page }}</p>
    </main>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: {
    page: {
      type: Number,
      required: true, 
    },
  },
  data() {
    return {
      sections: [
        { id: 1, title: "Section 1" },
        { id: 2, title: "Section 2" },
        { id: 3, title: "Section 3" },
        { id: 4, title: "Section 4" },
      ],
      activeSection: 1, 
    };
  },
  methods: {
    setActiveSection(id) {
      this.activeSection = id;
    },
  },
};
</script>

<style scoped>
.menu-container {
  display: flex;
  height: 100vh; 
  width: 100%;
  border: black; 
  color: black;
}

.menu-sidebar {
  width: 20%;
  border: black;
  padding: 1rem;
  color: black;
}

.menu-sidebar h3 {
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 1.2rem;
}

.menu-sidebar ul {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #555;
}

.menu-sidebar li {
  padding: 0.75rem;
  text-align: center;
  cursor: pointer;
  transition: background 0.3s, color 0.3s;
}

.menu-sidebar li:hover {
  background-color: #2c3e50; 
}

.menu-sidebar li.active {
  background-color: #34495e; 
  font-weight: bold;
}

/* Main Content */
.menu-content {
  flex-grow: 1;
  padding: 2rem;
  text-align: center;
}

.menu-content h1 {
  font-size: 1.8rem;
  margin-bottom: 1rem;
}

.menu-content hr {
  margin: 1rem 0;
  border: 0;
  border-top: 1px solid #555;
}

.menu-content p {
  font-size: 1.2rem;
}
</style>

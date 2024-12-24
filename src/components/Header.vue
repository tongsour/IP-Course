<template>
  <nav class="header">
    <h1>Header</h1>
    <p>
      <router-link 
        v-for="page in pages" 
        :key="page.number" 
        :to="page.path" 
        class="router-link" 
        active-class="active"
        @click.native="setPage(page.number)"
      >
        {{ page.name }}
      </router-link>
    </p>
  </nav>
</template>

<script>
export default {
  name: "Header",
  data() {
    return {
      pages: [
        { number: 1, name: 'Page 1', path: '/page1' },
        { number: 2, name: 'Page 2', path: '/page2' },
        { number: 3, name: 'Page 3', path: '/page3' }
      ]
    };
  },
  methods: {
    setPage(pageNumber) {
      this.$emit('page-changed', pageNumber);
    }
  }
};
</script>

<style scoped>
.header {
  display: flex;
  border: 1px solid black;
  justify-content: space-between;
  align-items: center;
  padding: 1rem; 
  color: black;
}

.header p {
  display: flex;
  gap: 1.5rem; 
  margin: 0;
  padding: 0;
  font-size: 1.5em;
}

.router-link {
  text-decoration: none; 
  color: black; 
  font-size: 1rem;
  background: none; 
  transition: color 0.3s ease;
}

.router-link:hover {
  color: white; 
}

</style>

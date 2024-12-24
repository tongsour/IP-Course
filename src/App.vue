<template>
  <div id="app">
    <Header @page-changed="handlePageChanged" />
    <Menu :page="currentPage" />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import Menu from "./components/Menu.vue";

export default {
  name: "App",
  components: {
    Header,
    Footer,
    Menu,
  },
  data() {
    return {
      currentPage: 1,
    };
  },
  methods: {
    handlePageChanged(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>

<style scoped>
#app {
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
}

header {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 1000;
}

menu {
  position: fixed;
  top: 60px; /* Adjust based on the height of your header */
  width: 200px; /* Adjust based on your menu width */
  height: calc(100% - 60px); /* Adjust based on the height of your header */
  z-index: 1000;
}

.content {
  margin-top: 60px; /* Adjust based on the height of your header */
  margin-left: 200px; /* Adjust based on your menu width */
  flex: 1;
  overflow: auto;
}

footer {
  position: fixed;
  bottom: 0;
  width: 100%;
  z-index: 1000;
}
</style>
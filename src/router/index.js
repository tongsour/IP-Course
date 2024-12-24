import { createRouter, createWebHistory } from "vue-router";
import Page1 from '../components/pages/Page1.vue';
import Page2 from '../components/pages/Page2.vue';
import Page3 from '../components/pages/Page3.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/page1", 
      name: "page1", 
      component: Page1,
      props: { page: 1 },
    },

    {
      path: "/page2", 
      name: "page2", 
      component: Page2,
      props: { page: 2 },
    },

    {
      path: "/page3", 
      name: "page3", 
      component: Page3,
      props: { page: 3 },
    },
   
  ],
});

export default router;
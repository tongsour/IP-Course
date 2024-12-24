<template>
  <div>
    <h1>Page 3</h1>
    <p>Message from Page 2: {{ message }}</p>
  </div>
</template>

<script>
import { useMessageStore } from '@/stores/store';

export default {
  name: "Page3",
  setup() {
    const messageStore = useMessageStore();
    const message = computed(() => messageStore.message); // Retrieve message from Page2

    return { message };
  },
};
</script>
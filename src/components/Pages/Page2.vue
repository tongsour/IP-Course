<template>
  <div>
    <h1>Page 2</h1>
    <p>Message from Page 1: {{ message }}</p>
    <input v-model="newMessage" placeholder="Enter message for Page 3" />
    <button @click="sendMessage">Send Message to Page 3</button>
  </div>
</template>

<script>
import { useMessageStore } from '@/stores/store';

export default {
  name: "Page2",
  setup() {
    const messageStore = useMessageStore();
    const message = computed(() => messageStore.message); // Retrieve message from Page1
    const newMessage = ref('');

    const sendMessage = () => {
      messageStore.setMessage(newMessage.value); // Update the message in the store
      window.location.href = "/page3"; // Navigate to Page3
    };

    return { message, newMessage, sendMessage };
  },
};
</script>
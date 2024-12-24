<template>
  <div>
    <h1>Page 1</h1>
    <input v-model="message" placeholder="Enter message for Page 2" />
    <button @click="sendMessage">Send Message to Page 2</button>
  </div>
</template>

<script>
import { useMessageStore } from '@/stores/store'; // Import the Pinia store

export default {
  name: "Page1",
  setup() {
    const messageStore = useMessageStore(); // Access the Pinia store
    const message = ref(''); // Local state for the input message

    const sendMessage = () => {
      messageStore.setMessage(message.value); // Update the message in the store
      window.location.href = "/page2"; // Navigate to Page2
    };

    return { message, sendMessage };
  },
};
</script>

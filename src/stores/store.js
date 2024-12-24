import { defineStore } from 'pinia';

export const useMessageStore = defineStore('messageStore', {
  state: () => ({
    message: '', // Shared message state
  }),
  actions: {
    setMessage(newMessage) {
      this.message = newMessage;
    },
  },
});

<template>
  <div class="showcase">
    <div class="text-content">
      <h1 id="titleShowCase">Don’t miss amazing grocery deals</h1>
      <p>Sign up for the daily newsletter</p>
      <div class="input-container">
        <div class="input-wrapper">
          <i class="fa fa-paper-plane-o"></i>
          <input type="email" placeholder="Your email address" v-model="email" />
          <button @click="subscribe">Subscribe</button>
        </div>
      </div>
    </div>
    <div class="image-content">
      <img src="https://png.pngtree.com/png-clipart/20240418/original/pngtree-fabric-bags-for-storing-and-transporting-fruits-png-image_14882920.png" alt="Fabric bag with fruits" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: "",
    };
  },
  methods: {
    subscribe() {
      if (this.email) {
        alert(`Subscribed with: ${this.email}`);
        this.email = "";
      } else {
        alert("Please enter a valid email address.");
      }
    },
  },
};
</script>

<style scoped>
@import url("https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css");

.showcase {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2em;
  background-color: #fdf4e3;
  border-radius: 10px;
}

h1 {
  color: #253d4e;
  font-weight: bold;
}
#titleShowCase {
  font-size: 4rem;
}

p {
  color: #7e7e7e;
  font-size: 1em;
}

.text-content {
  max-width: 70%;
  margin-left: 3em;
}

.text-content h1 {
  font-size: 2,5em;
  color: #2c3e50;
  width: 80%;
  margin-bottom: 0.5rem;
}

.text-content p {
  font-size: 1rem;
  color: #7f8c8d;
  margin-bottom: 1rem;
}

.input-container {
  width: 100%;
}

.input-wrapper {
  display: flex;
  align-items: center;
  background-color: #ffffff;
  border-radius: 30px;
  height: auto;
  width: 50%;
}

.input-wrapper i.fa {
  margin-left: 1em;
  color: #7e7e7e;
  margin-right: 10px;
}

.input-wrapper input {
  border: none;
  outline: none;
  flex: 1;
  font-size: 1rem;
  color: #7e7e7e;
  background: transparent;
}

.input-wrapper button {
  background-color: #3BB77E;
  color: white;
  border: none;
  border-radius: 30px;
  padding: 0.5rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.input-wrapper button:hover {
  background-color: #219150;
}

.image-content img {
  max-width: 100%;
  height: 30em;
  border-radius: 10px;
  margin-right: 3em;
}
</style>
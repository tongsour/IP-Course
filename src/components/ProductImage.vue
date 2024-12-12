<template>
    <div class="product-image">
      <!-- Main Image -->
      <div class="main-image-wrapper">
        <div class="main-image">
          <img :src="currentImage" alt="Main Product Image" v-if="currentImage" />
          <p v-else>Loading...</p>
        </div>
      </div>
      <!-- Thumbnails Section -->
      <div class="bottom-thumbnails">
        <div class="image-thumbnails-wrapper">
          <button class="arrow left" @click="previousImage">&#8592;</button>
          <div class="image-thumbnails">
            <div
              v-for="(image, index) in images"
              :key="index"
              class="thumbnail"
              :class="{ active: currentImage === image }"
              @click="changeImage(image)"
            >
              <img :src="image" :alt="`Thumbnail ${index + 1}`" />
            </div>
          </div>
          <button class="arrow right" @click="nextImage">&#8594;</button>
        </div>
      </div>
    </div>
  </template>
  <script>
  import { useProductStore } from "../stores/productStore";
  import { computed, onMounted } from "vue";
  export default {
    name: "ProductImage",
    props: {
      productId: {
        type: Number,
        required: true,
      },
    },
    setup(props) {
      const productStore = useProductStore();
      // Fetch products
      onMounted(async () => {
        if (productStore.products.length === 0) {
          console.log("Fetching products...");
          await productStore.fetchProducts();
        }
      });
      // Get the product by productId
      const product = computed(() => {
        const productById = productStore.products.find(p => p.id === props.productId);
        return productById || {};
      });
      // Handle current image
      const currentImage = computed(() => {
        return product.value.image || null; 
      });
      // Handle multiple images 
      const images = computed(() => {
        return product.value.images && product.value.images.length > 0
          ? product.value.images
          : [product.value.image]; 
      });
      const changeImage = (image) => {
        currentImage.value = image;
      };
      const nextImage = () => {
        const currentIndex = images.value.indexOf(currentImage.value);
        const nextIndex = (currentIndex + 1) % images.value.length;
        currentImage.value = images.value[nextIndex];
      };
      const previousImage = () => {
        const currentIndex = images.value.indexOf(currentImage.value);
        const prevIndex = (currentIndex - 1 + images.value.length) % images.value.length;
        currentImage.value = images.value[prevIndex];
      };
      return {
        currentImage,
        images,
        changeImage,
        nextImage,
        previousImage,
      };
    },
  };
  </script>
  <style scoped>
  .product-image {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .main-image-wrapper {
    padding: 15px;
    border: 2px solid #ddd;
    border-radius: 12px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    width: fit-content;
  }
  .main-image {
    width: 25em;
    height: 25em;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: 10px;
  }
  .main-image img {
    width: 100%;
    height: fit-content;
    object-fit: cover;
  }
  .image-thumbnails-wrapper {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
  }
  .image-thumbnails {
    display: flex;
    gap: 10px;
  }
  .thumbnail {
    cursor: pointer;
    padding: 5px;
    border: 2px solid transparent;
    border-radius: 5px;
    transition: border-color 0.3s;
  }
  .thumbnail img {
    width: 50px;
    height: 50px;
    object-fit: cover;
    border-radius: 5px;
  }
  .thumbnail.active {
    border-color: #3bb77e;
  }
  .arrow {
    background: #f2f3f4;
    color: #7e7e7e;
    border: none;
    border-radius: 2em;
    padding: 10px;
    cursor: pointer;
    font-size: 1em;
    width: 4em;
    transition: background 0.3s;
  }
  .bottom-thumbnails {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }
  .arrow:hover {
    background: #3bb77e;
  }
  </style>
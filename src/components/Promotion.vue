<template>
  <div class="promotion" :style="{ backgroundColor: promotionColor }">
    <div class="text">
      <h2 class="title">{{ promotionTitle }}</h2>
      <router-link to="/productDetail" class="promotion-link">
        <button class="shop-now-btn" @click="shopNow(promotion)">Shop Now →</button>
      </router-link>
    </div>
    <img :src="promotionImage" alt="promotion image" class="promotion-img" :style="{ width: width + 'px' }" />
  </div>
</template>

<script>
export default {
  props: {
    promotionTitle: String,
    promotionImage: String,
    promotionColor: String,
    buttonColor: String,
    width: Number,
  },
  data() {
    return {
      promotion: {
        title: this.promotionTitle,
        color: this.promotionColor,
        image: this.promotionImage,
      },
    };
  },
  methods: {
    shopNow(promotion) {
      alert(`Let's shop: ${promotion.title}`);
    },
  },
};
</script>

<style scoped>
.promotion {
  display: flex;
  align-items: center;
  padding: 20px;
  border-radius: 12px;
  color: white;
  height: 180px;
  position: relative;
}

.text {
  max-width: 250px;
}

.title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}

.shop-now-btn {
  background-color: #ffffff;
  color: #253d4e;
  border: none;
  padding: 8px 16px;
  border-radius: 20px;
  font-size: 14px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.shop-now-btn:hover {
  background-color: hwb(137 28% 17%);
}

.promotion-img {
  position: absolute;
  bottom: 10px;
  right: 10px;
  max-height: 100px;
}

.promotion-link {
  text-decoration: none;
  display: block;
}
</style>
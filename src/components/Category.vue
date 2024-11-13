<template>
    <button class="category" :style="{ color: color }">
        <img :src="image" alt="promotion image" class="promotion-img">
        <h3 class="name">{{ name }}</h3>
        <p class="productCount">{{ productCount }} items</p>
    </button>
</template>

<script>
export default {
    props: {
        image: String,
        name: String,
        productCount: Number,
        color: String
    }
}
</script>

<style scoped>
.category {
    border: none;
    width: 125px;
    border-radius: 8px;
    text-align: center;
    margin: 5px;
    padding: 10px;
    /* box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1); */
}
.category :hover {
    cursor: pointer;
}

.promotion-img {
    width: 75px;
    height: 75px;
    object-fit: contain;
}
.name{
    color: #253D4E;
    margin-bottom: 12px;
}
.productCount{
    color:#B6B6B6;
}
</style>
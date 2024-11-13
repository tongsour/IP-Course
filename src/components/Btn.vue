<template>
    <button class="shop-btn">
        Shop Now →
    </button>
</template>

<script>
export default {
    data(){
        return{
        name: "ShopButton"
        }
    },
};


</script>

<style scoped>
.shop-btn {
    background-color: #001ec8;
    color: white;
    border: none;
    padding: 10px;
    border-radius: 5px;
    position: absolute;
    left: 35px;
    bottom: 50px;
}
</style>
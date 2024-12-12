<template>
    <div class="product-detail">
      <p class="breadcrumb">Home › Categories › <b>Coke & Milk</b></p>
  
      <div class="product-header">
        <ProductImage :productId="14" />
  
        <div class="product-info">
          <div class="stock-label">In Stock</div>
          <h1 class="product-title">Seeds of Change Organic Quinoa, Brown</h1>
          <div class="product-rating">
            <span class="stars">⭐⭐⭐⭐☆</span>
            <span class="rating">(4.0)</span>
          </div>
          <div class="product-pricing">
            <span class="current-price">$38</span>
            <span class="old-price">$42</span>
          </div>
          <p class="product-description">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit eius vel quasi voluptatibus quisquam quia laudantium? Expedita natus ad fuga deleniti dolores velit similique fugiat repellat, minus optio, non ipsum.
          </p>
          <br>
          <div class="product-actions">
            <div class="quantity-selector">
                <div>
  <input
    type="number"
    v-model="quantity"
    min="1"
    class="quantity-input"
  />
</div>
            </div>
            <button class="add-to-cart">Add to Cart</button>
            <button class="wishlist">♡</button>
            <button class="compare">⇆</button>
          </div>
          <div class="product-meta">
            <p><b>Vendor:</b> NestMart</p>
            <p><b>SKU:</b> FWM15VKT</p>
          </div>
        </div>
      </div>
  
      <!-- Tabs Section -->
      <div class="tabs">
        <div class="tab-headers">
          <button 
            class="tab-header" 
            :class="{ active: activeTab === 'description' }" 
            @click="activeTab = 'description'"
          >
            Description
          </button>
          <button 
            class="tab-header" 
            :class="{ active: activeTab === 'additionalInfo' }" 
            @click="activeTab = 'additionalInfo'"
          >
            Additional Info
          </button>
          <button 
            class="tab-header" 
            :class="{ active: activeTab === 'reviews' }" 
            @click="activeTab = 'reviews'"
          >
            Reviews (3)
          </button>
        </div>
  
        <div class="tab-content">
          <div v-if="activeTab === 'description'">
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque debitis voluptatibus ipsum rem labore, id dolorum illum aliquam quia, autem nobis deleniti. Culpa dolores veniam quo officiis rerum laborum architecto?</p>
          </div>
          <div v-if="activeTab === 'additionalInfo'">
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque omnis, reiciendis ipsum explicabo unde, voluptatum incidunt sapiente sint vero eveniet dolore excepturi doloribus repellat accusamus ad perspiciatis quod officia facilis!</p>
          </div>
          <div v-if="activeTab === 'reviews'">
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem fugiat nulla sint recusandae dolore harum et neque ea iusto eum, quia rerum exercitationem sunt dolorem corrupti maiores laboriosam ut doloremque.</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
 <script>
import ProductImage from '@/components/ProductImage.vue';
export default {
name: 'ProductDetail',
components: {
  ProductImage,
},
data() {
  return {
    activeTab: 'description', 
    quantity: 1,
  };
},
};
</script>
  
  <style>
  .breadcrumb {
    color: #3BB77E; 
    font-size: 0.875rem;
    margin-top: 0.5rem;
    z-index: 1; 
    position: relative;
  }
  .stock-label {
background-color: #E6F9F0;
color: #3BB77E;
font-size: 0.875rem;
font-weight: bold;
padding: 0.25rem 0.5rem;
border-radius: 4px;
display: inline-block;
margin-bottom: 0.5rem;
}
  
  .product-detail {
    font-family: Arial, sans-serif;
    color: #333;
    padding: 1.5rem;
    max-width: 100%;
  }
  
  .product-header {
    display: flex;
    flex-direction: rwo;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 1rem;
  }
  
  .product-info {
    flex: 1;
    margin-left: 1rem;
  }
  
  .product-title {
    font-size: 2rem;
    font-weight: bold;
    margin: 0;
  }
  
  .product-rating {
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    margin: 0.5rem 0;
  }
  
  .stars {
    color: #FFD700;
    margin-right: 0.5rem;
  }
  
  .product-pricing {
    display: flex;
    align-items: baseline;
    margin: 0.5rem 0;
  }
  
  .current-price {
    color: #3BB77E;
    font-size: 3.5rem;
    font-weight: bold;
    margin-right: 0.5rem;
  }
  
  .old-price {
    text-decoration: line-through;
    color: #999;
    font-size: 0.875rem;
  }
  
  .product-description {
    font-size: 0.875rem;
    color: #555;
  }
  
  .product-actions {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  
  .quantity-selector {
    margin-right: 1rem;
  }
  
  .quantity-input {
height: 2.5rem;
width: 6rem;
padding: 0.25rem;
font-size: 1rem;
text-align: center;
color: #3BB77E; 
font-weight: bold;
border: 2px solid #3BB77E;
border-radius: 4px;
appearance: none; 
-moz-appearance: textfield; 
}
.quantity-input:focus {
outline: none;
border-color: #2b9b67; 
}
.quantity-input::-webkit-input-placeholder {
color: #3BB77E; 
}
.quantity-input::-moz-placeholder {
color: #3BB77E; 
}
.quantity-input::-ms-input-placeholder {
color: #3BB77E; 
}
.quantity-input:-ms-input-placeholder {
color: #3BB77E; 
}
  
  .add-to-cart {
    background-color: #3BB77E;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    height: 2.5rem;
    border-radius: 4px;
    cursor: pointer;
    margin-right: 1rem;
  }
  
  .wishlist, .compare {
    height: 2.5rem;
    width: 2.5rem;
    background-color: #fff;
    color: #3BB77E;
    border: 1px solid #3BB77E;
    border-radius: 4px;
    padding: 0.5rem;
    cursor: pointer;
    margin-right: 0.5rem;
  }
  
  .product-meta {
    font-size: 0.875rem;
    color: #777;
    margin-top: 1rem;
  }
  .tabs {
margin-top: 2rem;
}
.tab-headers {
display: flex;
justify-content: start;
gap: 1rem;
}
.tab-header {
padding: 0.75rem 1.5rem;
background-color: #f9f9f9; 
border: 1px solid #ddd; 
border-radius: 50px; 
cursor: pointer;
font-size: 1rem;
font-weight: bold;
color: #555;
transition: all 0.3s ease; 
}
.tab-header:hover {
background-color: #e6f9f0; 
color: #3bb77e; 
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
}
.tab-header.active {
background-color: #3bb77e; 
color: #fff; 
border: 1px solid #3bb77e; 
box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); 
}
.tab-content {
margin-top: 1.5rem;
font-size: 0.875rem;
color: #555;
padding: 1rem;
border-radius: 8px;
}
  </style>
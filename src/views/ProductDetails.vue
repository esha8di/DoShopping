<template>
  <div
    v-if="product"
    class="card bg-base-100 md:w-[50vw] mx-auto shadow-sm p-3"
  >
    <figure class="px-10 pt-10">
      <img
        :src="product.image"
        :alt="product.title"
        class="rounded-xl md:h-[300px]"
      />
    </figure>
    <div class="card-body items-center text-center">
      <h2 class="card-title">Card Title</h2>
      <p>
        A card component has a figure, a body part, and inside body there are
        title and actions parts
      </p>
      <p class="font-bold">Price : {{ product.price }}</p>
      <div class="card-actions">
        <button @click="addtoMyProducts" class="btn btn-primary">
          ADD to LIST
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../piniaStore/piniaStore.js";
const product = ref(null);
const route = useRoute();
const productId = route.params.id;
const productStore = useProductStore();

console.log("pinia", productStore.myProducts);

const fetchData = async () => {
  const response = await fetch(
    `https://fakestoreapi.com/products/${productId}`,
  );
  const data = await response.json();
  product.value = data;
};
onMounted(() => {
  fetchData();
});

const addtoMyProducts = () => {
  productStore.addProduct(product.value);
};
</script>

<style scoped>
/* styles here */
</style>

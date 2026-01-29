<template>
  <div
    v-if="product"
    class="bg-white md:w-[50vw] mx-auto shadow-md rounded-xl p-5"
  >
    <!-- Image -->
    <div class="flex justify-center mb-5">
      <img
        :src="product.image"
        :alt="product.title"
        class="rounded-xl md:h-[300px] object-contain"
      />
    </div>

    <!-- Title & Description -->
    <div class="text-center mb-4">
      <h2 class="text-2xl font-semibold mb-2">{{ product.title }}</h2>
      <p class="text-gray-600 mb-3">{{ product.description }}</p>
    </div>

    <!-- Price & Rating -->
    <div class="flex justify-center items-center gap-6 mb-5">
      <p class="text-lg font-bold">Price: 💸 {{ product.price }}</p>
      <div class="flex items-center gap-1">
        <span class="font-semibold">{{ product.rating.rate }}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-yellow-400"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.957a1 1 0 00.95.69h4.178c.969 0 1.371 1.24.588 1.81l-3.39 2.462a1 1 0 00-.364 1.118l1.286 3.957c.3.921-.755 1.688-1.54 1.118l-3.39-2.462a1 1 0 00-1.175 0l-3.39 2.462c-.784.57-1.838-.197-1.539-1.118l1.285-3.957a1 1 0 00-.364-1.118L2.046 9.384c-.783-.57-.38-1.81.588-1.81h4.178a1 1 0 00.951-.69l1.286-3.957z"
          />
        </svg>
      </div>
    </div>

    <!-- Add Button -->
    <div class="flex justify-center">
      <button
        @click="addtoMyProducts"
        class="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        ADD to LIST
      </button>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import { useProductStore } from "../piniaStore/piniaStore.js";
import { toast } from "vue3-toastify";

const product = ref(null);
const route = useRoute();
const productId = route.params.id;
const productStore = useProductStore();

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
  toast.success("Product added to cart!");
  productStore.addProduct(product.value);
};
</script>

<style scoped>
/* Optional: you can add subtle hover/shadow effects */
</style>

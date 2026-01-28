<template>
  <div class="max-w-6xl mx-auto p-4">
    <h1 class="text-2xl font-bold mb-6">My Favourite Products</h1>

    <p v-if="MyFavProducts.myProducts.length === 0" class="text-gray-500">
      No favourite products yet.
    </p>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      <div
        v-for="product in MyFavProducts.myProducts"
        :key="product.id"
        class="relative bg-white shadow-md rounded-lg p-4"
      >
        
        <button
          @click="MyFavProducts.removeProduct(product.id)"
          class="absolute top-2 right-2 text-red-500 hover:text-red-700 text-xl"
        >
          ✕
        </button>

        <!-- Image -->
        <img
          :src="product.image"
          alt=""
          class="h-40 w-full object-contain mb-4"
        />

        <h2 class="font-semibold text-sm line-clamp-2 mb-2">
          {{ product.title }}
        </h2>

        <p class="font-bold text-lg">${{ product.price }}</p>

        <div class="text-sm text-gray-600">
         

          <span v-if="product.quantity > 5" class="text-red-500 text-lg">
            ❤️❤️❤️❤️❤️
          </span>

          <span
            v-else
            v-for="n in product.quantity"
            :key="n"
            class="text-red-500 text-lg"
          >
            ❤️
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useFavStore } from "../piniaStore/favStore.js";

const MyFavProducts = useFavStore();

const removeFav = (id) => {
  MyFavProducts.removeProduct(id);
};

console.log(MyFavProducts.myProducts);
</script>

<style scoped>
/* styles here */
</style>

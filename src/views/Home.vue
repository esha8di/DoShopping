<template>
  <div class="max-w-[1300px] mx-auto px-4 py-10">
    <div class="text-center mb-10">
      <h1 class="text-4xl md:text-5xl font-bold mb-3">Welcome to My Shop</h1>
      <p class="text-gray-600 text-lg md:text-xl">
        Discover amazing products at the best prices
      </p>
      <button class="btn btn-primary mt-5">
        <router-link to="/products">View All Products</router-link>
      </button>
    </div>

    <!-- Products Section -->
    <div class="grid md:grid-cols-3 gap-10">
      <div
        v-for="d in data"
        :key="d.id"
        class="bg-white rounded-xl group shadow-sm hover:shadow-lg transition-shadow duration-300 p-4 flex flex-col h-full"
      >
        <div
          class="transition-all group duration-300 ease-out hover:-translate-y-2 overflow-hidden flex flex-col flex-grow"
        >
          <figure
            class="flex justify-center items-center bg-gray-50 rounded-lg overflow-hidden"
          >
            <img
              class="h-[200px] object-contain transition-transform duration-300 group-hover:scale-105"
              :src="d.image"
              :alt="d.title"
            />
          </figure>

          <div class="flex flex-col gap-3 text-left pt-4 flex-grow">
            <div class="flex justify-between items-start">
              <h2
                class="font-semibold text-sm text-gray-800 line-clamp-2 w-[80%]"
              >
                {{ d.title }}
              </h2>
              <p class="font-bold text-indigo-600">
                {{ d.price }}<span class="text-sm">TK</span>
              </p>
            </div>

            <div
              class="flex justify-between items-center text-sm text-gray-600"
            >
              <p class="flex items-center gap-1">⭐ {{ d.rating.rate }}</p>
              <p class="text-xl cursor-pointer hover:text-red-500 transition">
                ♡
              </p>
            </div>

            <!-- Button -->
            <div class="mt-auto">
              <router-link :to="`/productdetails/${d.id}`">
                <button
                  class="w-full py-2 rounded-lg bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition"
                >
                  Product Details
                </button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, toRaw } from "vue";

// reactive variables
const data = ref([]);
const loading = ref(true);
const error = ref(null);

// function to fetch API data
const fetchData = async () => {
  loading.value = false;
  const response = await fetch("https://fakestoreapi.com/products");
  const json = await response.json();
  data.value = json.slice(0, 6);
};

// fetch data when component mounts
onMounted(() => {
  fetchData();
});
</script>

<style scoped></style>

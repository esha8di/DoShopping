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
    <p v-if="loading" class="flex justify-center items-center h-64">
      <span class="loading loading-ball loading-xs text-blue-700"></span>
      <span class="loading loading-ball loading-sm text-blue-700"></span>
      <span class="loading loading-ball loading-md text-blue-700"></span>
      <span class="loading loading-ball loading-lg text-blue-700"></span>
      <span class="loading loading-ball loading-xl text-blue-700"></span>
    </p>
    <div  
     v-else
    class="grid md:grid-cols-3 gap-10">
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

          <div class="flex justify-between items-center text-sm text-gray-600">
            <div class="flex items-center gap-1">
              <span v-for="n in Math.floor(d.rating.rate)" :key="n">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-fill text-yellow-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"
                  />
                </svg>
              </span>

              <span v-if="!Number.isInteger(d.rating.rate)">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-star-half text-yellow-500"
                  viewBox="0 0 16 16"
                >
                  <path
                    d="M5.354 5.119 7.538.792A.52.52 0 0 1 8 .5c.183 0 .366.097.465.292l2.184 4.327 4.898.696A.54.54 0 0 1 16 6.32a.55.55 0 0 1-.17.445l-3.523 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256a.5.5 0 0 1-.146.05c-.342.06-.668-.254-.6-.642l.83-4.73L.173 6.765a.55.55 0 0 1-.172-.403.6.6 0 0 1 .085-.302.51.51 0 0 1 .37-.245zM8 12.027a.5.5 0 0 1 .232.056l3.686 1.894-.694-3.957a.56.56 0 0 1 .162-.505l2.907-2.77-4.052-.576a.53.53 0 0 1-.393-.288L8.001 2.223 8 2.226z"
                  /></svg
              ></span>
            </div>

            <p @click="addtoFav(d)" class="text-xl cursor-pointer transition">
              {{ MyFavProducts.myProducts.find(p => p.id === d.id)?.loveReact ? "❤️" : "♡" }}
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
import { useFavStore } from "../piniaStore/favStore.js";
const MyFavProducts = useFavStore();


const data = ref([]);
const loading = ref(false);
const error = ref(null);

// function to fetch API data
const fetchData = async () => {
  loading.value = true;
  const response = await fetch("https://fakestoreapi.com/products");
  const json = await response.json();
  data.value = json.slice(0, 6);
   loading.value = false;
};

// fetch data when component mounts
onMounted(() => {
  fetchData();
});
const addtoFav = (d) => {
  MyFavProducts.addProduct(d);
};
</script>

<style scoped></style>

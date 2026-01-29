<template>
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

          <div class="flex justify-between items-center text-sm text-gray-600">
            <div class="flex items-center gap-1">
              <span v-for="n in Math.floor(d.rating.rate)" :key="n"> ⭐ </span>

              <span v-if="!Number.isInteger(d.rating.rate)"> ✩ </span>
            </div>

            <p
              @click="addtoFav(d)"
              class="text-xl cursor-pointer hover:text-red-500 transition"
              :class="MyFavProducts.favButton(d.id)"
            >
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
</template>

<script setup>
import { ref, watch } from "vue";
import { useFavStore } from "../piniaStore/favStore.js";
const MyFavProducts = useFavStore();
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

watch(
  () => props.data,
  (newVal) => {
    if (!newVal) return;
    console.log("Data arrived:", newVal);
  },
  { immediate: true },
);

const addtoFav = (d) => {
  MyFavProducts.addProduct(d);
};
</script>

<style scoped>
/* styles here */
</style>

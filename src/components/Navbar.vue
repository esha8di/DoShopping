<template>
  <div class="bg-white shadow-sm px-4 py-2 flex justify-between items-center">
    <!-- Logo -->
    <a class="text-xl font-bold">DoShopping</a>

   
    <ul class="hidden lg:flex space-x-4 bg-white">
      <li><RouterLink to="/" class="hover:underline">Home</RouterLink></li>
      <li><RouterLink to="/products" class="hover:underline">Products</RouterLink></li>
      <li>
        <RouterLink to="/myproducts" class="hover:underline">
          My Products
          <span class="bg-red-500 text-white rounded-full px-2 ml-1">
            {{ productStore.myProducts.length }}
          </span>
        </RouterLink>
      </li>
    </ul>

    <!-- Login/Logout button -->
    <button
      @click="toggle"
      class="border px-3 py-1 rounded"
      :class="buttonClass"
    >
      {{ loggedIn ? "Logout" : "Login" }}
    </button>

    <!-- Mobile dropdown -->
    <!-- <div class="lg:hidden relative">
      <button @click="open = !open" class="p-2 border rounded">
        ☰
      </button>
      <ul
        v-if="open"
        class="absolute right-0 mt-2 w-40 bg-white shadow rounded"
      >
        <li><RouterLink to="/" class="block px-4 py-2 hover:bg-gray-100">Home</RouterLink></li>
        <li><RouterLink to="/products" class="block px-4 py-2 hover:bg-gray-100">Products</RouterLink></li>
        <li>
          <RouterLink to="/myproducts" class="block px-4 py-2 hover:bg-gray-100">
            My Products
            <span class="bg-red-500 text-white rounded-full px-2 ml-1">
              {{ productStore.myProducts.length }}
            </span>
          </RouterLink>
        </li>
      </ul>
    </div> -->
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useProductStore } from "../piniaStore/piniaStore.js";

const productStore = useProductStore();
const loggedIn = ref(false);
const open = ref(false);

const toggle = () => {
  loggedIn.value = !loggedIn.value;
};

const buttonClass = computed(() =>
  loggedIn.value ? "text-blue-500" : "text-red-500"
);
</script>

<style scoped>
.router-link-active {
  text-decoration: underline;
}
</style>

<template>
  <div class="overflow-x-auto bg-white">
    <select v-model="selectedData" class="border rounded p-1" name="" id="">
      <option value="">Sort by Quanity</option>
      <option value="asc">Low to High</option>
      <option value="dsc">High to low</option>
    </select>
  <div class="overflow-x-auto">
     <table class="table border p-1">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th class="hidden md:block">Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody v-for="(p, index) in sortData" :key="p.id">
        <!-- row 1 -->
        <tr class="p-2">
          <th>{{ index + 1 }}</th>
          <td class="hidden md:block">{{ p.title }}</td>
          <td>{{ p.quantity }}</td>
          <td>{{ (p.price * p.quantity).toFixed(2) }} TK</td>
          <td>{{ p.category }}</td>
          <button @click="increaseQuantity(p)" class="mx-2 btn">✚</button>
          <button @click="deleteProduct(p.id)" class="border btn my-auto mx-2">
            ─
          </button>
          <button
            @click="productStore.deleteProduct(p.id)"
            class="border btn my-auto text-red-600"
          >
            Delete
          </button>
        </tr>
      </tbody>
    </table>

  </div>
   
    <div class="mt-6 text-left font-bold text-lg">
      Total: {{ Math.ceil(productStore.totalPrice) }} TK
    </div>
    <div class="flex gap-3 mt-10 mx-auto">
      <button class="btn btn-primary">Porceed to Checkout</button>
      <router-link to="/products">
        <button class="btn bg-red-400 hover:bg-red-600">
          Go Shopping
        </button></router-link
      >
    </div>
  </div>
</template>

<script setup>
// logic here
import { useProductStore } from "../piniaStore/piniaStore.js";
import { ref, computed } from "vue";
const productStore = useProductStore();
const selectedData = ref("");
const sortedData = ref([]);
const deleteProduct = (id) => {
  productStore.removeProduct(id);
};

const increaseQuantity = (p) => {
  productStore.addProduct(p);
};

const sortData = computed(() => {
  const products = [...productStore.myProducts];

  if (selectedData.value == "asc") {
    return products.sort((a, b) => a.quantity - b.quantity);
  } else if (selectedData.value == "dsc") {
    return products.sort((a, b) => b.quantity - a.quantity);
  } else {
    return products;
  }
});
</script>

<style scoped>
/* styles here */
</style>

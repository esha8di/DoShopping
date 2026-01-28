<template>
  <div class="overflow-x-auto bg-white">
    <table class="table">
      <!-- head -->
      <thead>
        <tr>
          <th></th>
          <th>Product Name</th>
          <th>Quantity</th>
          <th>Price</th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody v-for="(p, index) in productStore.myProducts" :key="p.id">
        <!-- row 1 -->
        <tr class="p-2">
          <th>{{ index + 1 }}</th>
          <td>{{ p.title }}</td>
          <td>{{ p.quantity }}</td>
          <td>{{ Math.round(p.price * p.quantity) }} TK</td>
          <td>{{ p.category }}</td>
          <button @click="increaseQuantity(p)" class="mx-2 btn">✚</button>
          <button @click="deleteProduct(p.id)" class="border btn my-auto">
            ─
          </button>
        </tr>
      </tbody>
    </table>
    <div class="mt-6 text-left font-bold text-lg">
      Total: {{ Math.round(productStore.totalPrice) }} TK
    </div>
    <div class="flex gap-3 mt-10 mx-auto">
      <button class="btn btn-primary">Porceed to Checkout</button>
      <router-link to="/products">
        <button class="btn bg-red-400 hover:bg-red-600">Go Shopping</button></router-link
      >
    </div>
  </div>
</template>

<script setup>
// logic here
import { store } from "../piniaStore/store.js";
import { useProductStore } from "../piniaStore/piniaStore.js";

const productStore = useProductStore();
const deleteProduct = (id) => {
  productStore.removeProduct(id);
};

const increaseQuantity = (p) => {
  productStore.addProduct(p);
};
</script>

<style scoped>
/* styles here */
</style>

<template>
  <div>
    <select
      v-model="selectedCategory"
      @change="filterByCategory"
      class="border border-black p-2 rounded mb-4"
    >
      <option value="">All Categories</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="jewelery">Jewellery</option>
      <option value="electronics">Electronics</option>
    </select>

    <Card v-if="filterData.length" :data="filterData"></Card>
    <p v-else>loading ...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, toRaw, onBeforeMount } from "vue";
import Card from "./Card.vue";
const data = ref([]);
const loading = ref(true);
const filterData = ref([]);
const selectedCategory = ref("");
const error = ref(null);

// function to fetch API data
const fetchData = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const json = await response.json();
  console.log(json);
  data.value = json;
   filterData.value = data.value;
   loading.value = false;
};

// fetch data when component mounts
onBeforeMount(() => {
  fetchData();
});

// search with category
const filterByCategory = () =>{
  if(!selectedCategory.value){
    filterData.value = data.value;
    console.log("length",filterData.length)
  }
  else{
    filterData.value = data.value.filter(
      d => d.category.toLowerCase() == selectedCategory.value.toLocaleLowerCase()
    )
  }
}



</script>

<style scoped>
/* styles here */
</style>

<template>
  <div>
    <select
      v-model="selectedCategory"
      @change="filterByCategory"
      class="border border-black p-2 rounded mb-4 mr-2"
    >
      <option value="">All Categories</option>
      <option value="men's clothing">Men's Clothing</option>
      <option value="women's clothing">Women's Clothing</option>
      <option value="jewelery">Jewellery</option>
      <option value="electronics">Electronics</option>
    </select>

    <input
      v-model="search"
      @change="searchByTitle"
      class="border border-black p-2 rounded mb-4"
      type="text"
      name=""
      id=""
      placeholder="Search by Title"
    />

    <p v-if="noapptext" class="text-center text-red-500 mb-4">
      ❌ No product found.
    </p>

    <Card v-if="filterData.length" :data="filterData"></Card>
    <p v-else-if="loading" class="flex justify-center items-center h-64">
      <span class="loading loading-ball loading-xs text-blue-700"></span>
      <span class="loading loading-ball loading-sm text-blue-700"></span>
      <span class="loading loading-ball loading-md text-blue-700"></span>
      <span class="loading loading-ball loading-lg text-blue-700"></span>
      <span class="loading loading-ball loading-xl text-blue-700"></span>
    </p>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useRouter } from "vue-router";
import Card from "./Card.vue";
const data = ref([]);
const loading = ref(false);
const filterData = ref([]);
const selectedCategory = ref("");
const error = ref(null);
const search = ref("");
const router = useRouter();
let noapptext = ref(false);

// function to fetch API data
async function fetchData() {
  loading.value = false;
  const response = await fetch("https://fakestoreapi.com/products");
  const json = await response.json();
  console.log(json);
  data.value = json;
  filterData.value = data.value;
  loading.value = false;
}

// fetch data when component mounts
onMounted(() => {
  fetchData();
});

// filter with category
const filterByCategory = () => {
  if (!selectedCategory.value) {
    filterData.value = data.value;
    console.log("length", filterData.length);
  } else {
    filterData.value = data.value.filter(
      (d) =>
        d.category.toLowerCase() == selectedCategory.value.toLocaleLowerCase(),
    );
  }
};

// Search By Title
const searchByTitle = () => {
  const keyword = search.value.toLowerCase().trim();

  if (!keyword) {
    noapptext.value = false;
    filterData.value = data.value;
  } else {
    noapptext.value = false;
    const checkAbolTabol = data.value.filter((product) =>
      product.title.toLocaleLowerCase().includes(keyword),
    );
    if (checkAbolTabol.length > 0) {
      filterData.value = data.value.filter((product) =>
        product.title.toLowerCase().includes(keyword),
      );
    } else {
      // router.push("/noApp");
      filterData.value = [];
      noapptext.value = true;
    }
  }
  console.log("ok", noapptext);
};
</script>

<style scoped>
/* styles here */
</style>

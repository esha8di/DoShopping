<template>
  <div>
   <Card v-if="data.length" :data="data"></Card>
   <p v-else>loadin ...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, toRaw , onBeforeMount } from "vue";
import Card from "./Card.vue"
// reactive variables
const data = ref([]);
const loading = ref(true);
const error = ref(null);

// function to fetch API data
const fetchData = async () => {
  loading.value = false;
  const response = await fetch("https://fakestoreapi.com/products");
  const json = await response.json();
  console.log(json)
  data.value = json;

};

// fetch data when component mounts
onBeforeMount(() => {
  fetchData();
});
</script>

<style scoped>
/* styles here */
</style>

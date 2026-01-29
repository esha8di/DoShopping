<template>
  <div class="flex flex-col justify-center items-center text-center">
    <h1 class="text-2xl font-bold text-red-600">
      No product found 😢
    </h1>
    <p class="mt-2 text-gray-600">
      Try searching with a different keyword.
    </p>

    <RouterLink
      to="/products"
      class="mt-4 text-blue-600 underline"
    >
      Go back to Products
    </RouterLink>
  </div>
</template>

<script setup>
// logic here
</script>

<style scoped>
/* styles here */
</style>

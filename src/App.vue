<script setup>
import HelloWorld from "./components/HelloWorld.vue";

import Navbar from "./components/Navbar.vue";
</script>

<template>
  <div class="mx-auto max-w-[1300px] text-center py-5">
    <Navbar></Navbar>
    <!-- on top -->

    <div class="mt-5">
      <RouterView />
      <!-- content below -->
    </div>
  </div>
</template>

<style scoped></style>

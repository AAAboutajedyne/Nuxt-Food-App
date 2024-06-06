<script setup>
import { useMainStore } from '#imports';

const mainStore = useMainStore()
await callOnce(mainStore.fetchFoodData)
</script>

<template>
  <NuxtLayout>       
    <NuxtPage />
  </NuxtLayout>
</template>

<style>
html {
  font-family: 'Mulish';
  font-weight: 300;
  font-size: 16px;
  word-spacing: 1px;
  box-sizing: border-box;
}

*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
}

h1, h2, h3, h4 {
  font-family: "Poppins";
  font-weight: 600;
}
</style>

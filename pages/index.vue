<script setup lang="ts">
import { useMainStore } from '#imports';
import { AppHeader } from '#components';

const foodData = useMainStore().foodData;

</script>

<template>
  <main>
    <AppHeader />
    <AppRestaurantInfo :datasource="foodData"/>
  </main>
</template>

<style scoped>

</style>
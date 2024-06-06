<script setup lang="ts">
import { useMainStore } from '#imports';
import { AppRestaurantInfo } from '#components';

const foodData = useMainStore().foodData;

const selectedRestaurant = ref("");

const filteredRestaurants = computed(() => {
  if(selectedRestaurant.value) {
    return foodData.filter((store: any) => 
      (store.name as string).toLowerCase().includes(selectedRestaurant.value)
    )
  }
  return foodData
})

</script>

<template>
  <main class="container restaurant">
    <div class="restaurantheading">
      <h1>Restaurants</h1>
      <AppSelect @change="selectedRestaurant = $event" class="filter" />
    </div>
    <AppRestaurantInfo :datasource="filteredRestaurants" />
  </main>
</template>

<style scoped>

</style>
<script setup lang="ts">
import { useMainStore } from '#imports';
const { cartItemsCount } = storeToRefs(useMainStore())

watchEffect(() => {
  console.log("[AppMenu] cartItemsCount:", cartItemsCount.value)
})

</script>

<template>
  <nav>
    <ul>
      <li><NuxtLink exact to="/"><AppLogo /></NuxtLink></li>
      <li><NuxtLink to="/restaurants">Restaurants</NuxtLink></li>
    </ul>
    <section>
      <NuxtLink to="/cart">Cart</NuxtLink>
      <div v-if="cartItemsCount > 0" class="smallnum">{{ cartItemsCount }}</div>
    </section>
  </nav>
</template>

<style scoped>

</style>
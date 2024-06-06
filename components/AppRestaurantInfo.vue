<script setup lang="ts">
import { AppHeader } from '#components';

defineProps<{
  datasource: object[]
}>()


// function priceFormatting(price: number) {
//   return "$" + price.toFixed(2)
// }

</script>

<template>
  <section class="restaurantinfo">
    <div v-for="store in datasource" :key="store.id">
      <h2>{{ store.name }}</h2>
      <p>Delivery Time {{ store.deliveryTime }}</p>
      <p>Rating {{ store.rating }}</p>
      <p v-if="store.freeDelivery" class="label">
        <span>Free Delivery</span>
      </p>

      <div class="row">
        <div v-for="menuitem in store.menu" :key="menuitem.id"
          class="items"
          :style="{ background: `url(/${menuitem.img}) no-repeat center center` }"
        >
          <div class="iteminfo">
            <div>
              <h4>{{  menuitem.item  }}</h4>
              <p>{{ priceFormatting(menuitem.price) }}</p>
            </div>
            <nuxt-link :to="`/items/${menuitem.id}`">
              <button class="ghost">View item ></button>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>

</style>
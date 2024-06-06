<script setup lang="ts">
import { useMainStore } from '#imports';
import { useVuelidate } from '@vuelidate/core'
import { required } from '@vuelidate/validators'

const currentRoute = useRoute()
const id = currentRoute.params.id as string;

const mainStore = useMainStore();
const menuItem: any = mainStore.getMenuById(id)
console.log("menuItem:", menuItem)

type FormState = {
  count: number; 
  option: string | null; 
  addons: string[]
}
const formState = reactive<FormState>({
  count: 1,
  option: null,
  addons: []
})
const formValidationRules = {
  ...(menuItem.options && { option: { required } }),  //<== add validator when menuItem (currentItem) has options
  addons: { required }, 
}
const v$ = useVuelidate(formValidationRules, formState, { 
  $autoDirty: true,   //<== to not use v$.option.$model/v$.addons.$model instead of 
                      //    formState.option & formState.addons on input v-model
})
watchEffect(() => {
  console.log("v$: ", v$.value)
})

const totalPrice = computed(() => 
  formState.count * menuItem.price
)

const orderSubmitted = ref(false)

async function addToCart() {
  if(await v$.value.$validate()) {
    orderSubmitted.value = true;
    const rawFormState = toRaw(formState)
    mainStore.addToCart({
      item: toRaw(menuItem.item),
      count: rawFormState.count,
      option: rawFormState.option,
      addons: rawFormState.addons,
      totalPrice: toValue(totalPrice)
    })
  } else {
    console.log("[items/[id] page] order not submitted, cause form not valid!")
  }
}
watch(mainStore.cart, newCart => {
  console.log("[items/[id] page] Cart: ", newCart)
}, { immediate: true })

</script>

<template>
  <div>
    <main :class="['w-full', 'my-[50px]',
      'flex justify-center items-center gap-10',
      'leading-loose'
    ]">
      <!-- image & description -->
      <section class="flex flex-col gap-4">
        <div class="w-[400px] h-[400px]" 
          :style="`background:url(/${menuItem.img}) no-repeat center center`"
        />
        <div>
          <h3>Description</h3>
          <div>{{ menuItem.description }}</div>
        </div>
      </section>
      
      <!-- details -->
      <section class="flex flex-col">
        <!-- taco & price & quantity  -->
        <div class="flex items-center gap-5">
          <div>
            <h1>{{ menuItem.item }}</h1>
            <h3>Price: {{ priceFormatting(menuItem.price) }}</h3>
            <div class="flex items-center gap-4 mt-5">
              <input type="number" min="1" v-model="formState.count"
                class="border-2 pl-1 border-black/25 rounded"
              />
              <button @click="addToCart" class="primary">
                Add to Cart - {{ priceFormatting(totalPrice) }}
              </button>
            </div>
          </div>
          <!-- toast placeholder -->
          <AppToast v-if="orderSubmitted">
            Order submitted <br/>
            Check out more <nuxt-link to="/restaurants">restaurants</nuxt-link>!
          </AppToast>
          <AppToast v-else-if="v$.$error">
            Please select addons (and option) before continuing.
          </AppToast>
        </div>
        <!-- options -->
        <div v-if="menuItem.options">
          <fieldset>
            <legend>
              <h3>Options</h3>
            </legend>
            <div v-for="option in menuItem.options" class="flex gap-2 ml-1">
              <input type="radio" name="option" 
                :id="option" :value="option" v-model="formState.option" />
              <label :for="option">{{ option }}</label>
            </div>
          </fieldset>
        </div>
        <!-- Addons -->
        <div>
          <fieldset>
            <legend>
              <h3>Addons</h3>
            </legend>
            <div v-for="addon in menuItem.addOns" class="flex gap-2 ml-1">
              <input type="checkbox" name="addon" 
                :id="addon" :value="addon" v-model="formState.addons"/>
              <label :for="addon">{{ addon }}</label>
            </div>
          </fieldset>
        </div>
      </section>
    </main>
    <DevOnly>
      Options - {{ formState.option }}
      Addons - {{ formState.addons.join(",") }}
    </DevOnly>
  </div>
</template>

<style scoped>

</style>
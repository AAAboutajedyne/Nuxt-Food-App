import { defineStore } from 'pinia'
import { v4 as uuid } from 'uuid';

export const useMainStore = defineStore('mainStore', {
  state: () => ({
    foodData: [
      /*
      {
        name: "Taco bout Eating Tacos",
        deliveryTime: 25,
        meal: ["lunch", "dinner"],
        rating: 4.7,
        freeDelivery: true,
        id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
        menu: [{
            item: "Taco",
            img: "taco-taco.jpg",
            price: 3.45,
            id: "e85dbacc-f721-44e6-af8c-eda2835e2e50",
            options: ["Al Pastor", "Carnitas", "Lengua", "Carne Asada", "Pollo"],
            addOns: ["none", "sour cream", "avocado", "pico de gallo", "queso"],
            description: "Soft tortilla, your choice of meat, onions, cilantro & salsa"
          },
          {
            item: "Quesadilla",
            img: "taco-quesadilla.png",
            price: 7.0,
            id: "e956a779-941f-41ef-874e-d5f6a6c6e0cb",
            options: ["Plain", "Carne Asada", "Pollo"],
            addOns: ["none", "sour cream", "guacamole", "pico de gallo"],
            description: "Flour tortilla, melted cheese & optional meat choice"
          },
          {
            item: "Burrito",
            img: "taco-burrito.jpg",
            price: 6.59,
            id: "ecd7c207-acd7-4b58-8685-894ba622949e",
            options: ["Al Pastor", "Carnitas", "Lengua", "Carne Asada", "Pollo"],
            addOns: ["none", "sour cream", "avocado", "pico de gallo", "queso"],
            description: "Any meat, rice, beans, onions, cilantro & salsa"
          }
        ]
      },
      {
        name: "A Real Pizza Work",
        deliveryTime: 40,
        meal: ["lunch", "dinner"],
        rating: 4.5,
        freeDelivery: false,
        id: "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
        menu: [{
            item: "Build Your Own",
            img: "pizza-plain.jpg",
            addOns: [
              "None",
              "Sausage",
              "Pepperoni",
              "Tomatoes",
              "Mushrooms",
              "Onion",
              "Green Pepper",
              "Extra Cheese"
            ],
            price: 17.99,
            id: "7644eba9-d6a8-466f-bd49-781bc005cfe5",
            description: "Design your own pizza"
          },
          {
            item: "MeatLovers",
            img: "pizza-meat.jpg",
            price: 17.99,
            addOns: [
              "None",
              "Sausage",
              "Pepperoni",
              "Tomatoes",
              "Mushrooms",
              "Onion",
              "Green Pepper",
              "Extra Cheese"
            ],
            id: "70ceec44-3ccb-4f92-b149-0ebe2c10704b",
            description: "A Carnivore’s delight. Pepperoni, Sausage, Salami & Canadian Bacon."
          },
          {
            item: "Veggie",
            img: "pizza-veggie.jpg",
            price: 17.99,
            addOns: [
              "None",
              "Sausage",
              "Pepperoni",
              "Tomatoes",
              "Mushrooms",
              "Onion",
              "Green Pepper",
              "Extra Cheese"
            ],
            id: "b27f4d8e-7235-42f9-b0a7-98e76a1afaf0",
            description: "Tomatoes, Olives, Garlic, Onions, Mushrooms & Bells."
          }
        ]
      },
      {
        name: "All that and Dim Sum",
        deliveryTime: 35,
        meal: ["breakfast", "lunch", "dinner"],
        rating: 4.9,
        freeDelivery: true,
        id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
        menu: [{
            item: "Shrimp Dumplings",
            img: "dimsum-shrimp.jpg",
            price: 6.49,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
            description: "Whole shrimp in a translucent wrapper."
          },
          {
            item: "Soup Dumplings",
            img: "dimsum-soup.jpg",
            price: 9.99,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
            description: "Dumplings filled with pork, crab meat and broth."
          },
          {
            item: "Stuffed Eggplant",
            img: "dimsum-eggplant.jpg",
            price: 5.59,
            addOns: [
              "None",
              "Steamed Sesame Ball",
              "Mango Pudding",
              "Sweet Tofu"
            ],
            id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
            description: "Chinese eggplant filled with ground shrimp in sauce"
          }
        ]
      }
      */
    ],
    cart: [] as any[]
  }),

  getters: {
    getMenuById(state) {
      console.log(state.foodData)
      return (id: string) => (
        state.foodData.reduce((acc, store: any) => 
          acc ?? store.menu.find(menuItem => menuItem.id === id)
        , undefined)
      )
    },
    cartItemsCount(state) {
      return state.cart.reduce((acc, cartEntry) => acc + cartEntry.count, 0)  
    }
  },

  actions: {
    addToCart(cartEntry) {
      this.cart.push({ id: uuid(), ...cartEntry })
    },
  
    async fetchFoodData() {
      //1. using $fetch
      // await $fetch("https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants", {
      //   headers: {
      //     'Content-type': "application/json",
      //     'x-api-key': process.env.AWS_API_KEY as string
      //   },
      // })
      // .then(data => {
      //   console.log("[fetchFoodData] ", data)
      //   this.foodData = data as any
      // })
      await new Promise(res => {
        const result = [
          {
            name: "Taco bout Eating Tacos",
            deliveryTime: 25,
            meal: ["lunch", "dinner"],
            rating: 4.7,
            freeDelivery: true,
            id: "f71400ed-26b1-43d0-940c-7cabd3546dc6",
            menu: [{
                item: "Taco",
                img: "taco-taco.jpg",
                price: 3.45,
                id: "e85dbacc-f721-44e6-af8c-eda2835e2e50",
                options: ["Al Pastor", "Carnitas", "Lengua", "Carne Asada", "Pollo"],
                addOns: ["none", "sour cream", "avocado", "pico de gallo", "queso"],
                description: "Soft tortilla, your choice of meat, onions, cilantro & salsa"
              },
              {
                item: "Quesadilla",
                img: "taco-quesadilla.png",
                price: 7.0,
                id: "e956a779-941f-41ef-874e-d5f6a6c6e0cb",
                options: ["Plain", "Carne Asada", "Pollo"],
                addOns: ["none", "sour cream", "guacamole", "pico de gallo"],
                description: "Flour tortilla, melted cheese & optional meat choice"
              },
              {
                item: "Burrito",
                img: "taco-burrito.jpg",
                price: 6.59,
                id: "ecd7c207-acd7-4b58-8685-894ba622949e",
                options: ["Al Pastor", "Carnitas", "Lengua", "Carne Asada", "Pollo"],
                addOns: ["none", "sour cream", "avocado", "pico de gallo", "queso"],
                description: "Any meat, rice, beans, onions, cilantro & salsa"
              }
            ]
          },
          {
            name: "A Real Pizza Work",
            deliveryTime: 40,
            meal: ["lunch", "dinner"],
            rating: 4.5,
            freeDelivery: false,
            id: "e1e569e5-7b75-42cf-8fc3-7638d6c940f8",
            menu: [{
                item: "Build Your Own",
                img: "pizza-plain.jpg",
                addOns: [
                  "None",
                  "Sausage",
                  "Pepperoni",
                  "Tomatoes",
                  "Mushrooms",
                  "Onion",
                  "Green Pepper",
                  "Extra Cheese"
                ],
                price: 17.99,
                id: "7644eba9-d6a8-466f-bd49-781bc005cfe5",
                description: "Design your own pizza"
              },
              {
                item: "MeatLovers",
                img: "pizza-meat.jpg",
                price: 17.99,
                addOns: [
                  "None",
                  "Sausage",
                  "Pepperoni",
                  "Tomatoes",
                  "Mushrooms",
                  "Onion",
                  "Green Pepper",
                  "Extra Cheese"
                ],
                id: "70ceec44-3ccb-4f92-b149-0ebe2c10704b",
                description: "A Carnivore’s delight. Pepperoni, Sausage, Salami & Canadian Bacon."
              },
              {
                item: "Veggie",
                img: "pizza-veggie.jpg",
                price: 17.99,
                addOns: [
                  "None",
                  "Sausage",
                  "Pepperoni",
                  "Tomatoes",
                  "Mushrooms",
                  "Onion",
                  "Green Pepper",
                  "Extra Cheese"
                ],
                id: "b27f4d8e-7235-42f9-b0a7-98e76a1afaf0",
                description: "Tomatoes, Olives, Garlic, Onions, Mushrooms & Bells."
              }
            ]
          },
          {
            name: "All that and Dim Sum",
            deliveryTime: 35,
            meal: ["breakfast", "lunch", "dinner"],
            rating: 4.9,
            freeDelivery: true,
            id: "1f9500d2-fd27-422e-acc6-48198d0de5c2",
            menu: [{
                item: "Shrimp Dumplings",
                img: "dimsum-shrimp.jpg",
                price: 6.49,
                addOns: [
                  "None",
                  "Steamed Sesame Ball",
                  "Mango Pudding",
                  "Sweet Tofu"
                ],
                id: "22672b93-2c65-4fd9-b151-683f7eb7df4a",
                description: "Whole shrimp in a translucent wrapper."
              },
              {
                item: "Soup Dumplings",
                img: "dimsum-soup.jpg",
                price: 9.99,
                addOns: [
                  "None",
                  "Steamed Sesame Ball",
                  "Mango Pudding",
                  "Sweet Tofu"
                ],
                id: "3a6da02c-2354-4eb8-af07-f9f2d26fa7c2",
                description: "Dumplings filled with pork, crab meat and broth."
              },
              {
                item: "Stuffed Eggplant",
                img: "dimsum-eggplant.jpg",
                price: 5.59,
                addOns: [
                  "None",
                  "Steamed Sesame Ball",
                  "Mango Pudding",
                  "Sweet Tofu"
                ],
                id: "cadd2903-b9cb-4053-9720-c096cc95e8a5",
                description: "Chinese eggplant filled with ground shrimp in sauce"
              
              }
            ]
          }
        ]
        setTimeout(() => res(result), /*1000*/ 100)
      })
      .then(data => {
        console.log("[fetchFoodData] ", data)
        this.foodData = data as any
      })

      //2. using useFetch
      // const { data } = await useFetch("https://dva9vm8f1h.execute-api.us-east-2.amazonaws.com/production/restaurants", {
      //   headers: {
      //     'Content-type': 'application/json',
      //     'x-api-key': process.env.AWS_API_KEY as string
      //   },
      //   deep: false
      // })
      // console.log(data.value)
      // this.foodData = data.value as any
    }
  },
})



//-- vuex soluion -----------------
function vuex_Solution() {
  /**
   * [USAGE] in components
   * export default {
   *   computed: {
   *     ...mapState(["foodData", "cart"])
   *   }
   * }
   * 
   * <pre>{{ foodData }}</pre>
   */
  /*export*/ const state = () => ({
    foodData: [/*...*/],
    cart: []
  })

    /**
   * [USAGE] in components
   * export default {
   *   computed: {
   *     ...mapGetters(["cartCount"])
   *   }
   * }
   * 
   * <pre>{{ cartCount }}</pre>
   */
  /*export*/ const getters = {
    getterFoodDate: state => {
      return state.foodData
    },
    cartCount: state => 
      state.cart.reduce((acc, cartEntry) => acc + cartEntry.count, 0)
  }

  // mutations change the state by committing changes
  //  ..[USAGE] this.$store.commit('updateFoodData', your_payload)
  /*export*/ const mutations = {
    updateFoodData: (state, payload) => {
      return state.foodData = payload
    },

    addToCart: (state, payload) => {
      state.cart.push({ id: uuid(), ...payload })
    }
  }

  // actions can be async and call mutations to update state
  //  ..[USAGE] this.$store.dispatch('getFoodData')
  /*export*/ const actions = {
    async getFoodData({ state, commit }) {
      try {
        await fetch("...")
          .then(res => res.json())
          .then(data => {
            console.log(data);
            commit('updateFoodData', data)
          })
      } catch(err) {
        console.log(err);
      }
    } 
  }
}





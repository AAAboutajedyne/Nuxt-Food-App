# Nuxt Food App
## About project
Nuxt Food app is an application to order some food using:
  - Vue3 (composition API), 
  - Nuxt 3 features (Universal rendering mode, Static mode to put the app on CDN/Edge server,...), 
  - Pinia for state management (and some notes on Vuex solution),
  - Vuelidate for form validation
### Features
- view restaurants with their menus
- filter restaurants
- view a menu item
- make order
- handle cart logic
- and more ...

## Rendering Mode
The app is using by default Universal rendering (SSR + CSR), but you can switch to SSG (Static Site Generation) or Incremental Static Regeneration (ISR)

## Fetching food data
Getting food data and set it into the main store:
  - fetchFoodData action can be called:
      1. in "app.vue" using "callOnce" to be sure to be called only once (on the server) during universal rendering (SSR + CSR)
      2. or using a Nuxt plugin with suffix `.server` to be sure to only be called on server `~/plugins/getFood.server.ts` when generating a static site with `prerender=true` / `> npx nuxi generate`.
  
  - fetchFoodData action is mocked to not call AWS severless backend (shout out to [Sarah Drasner](https://github.com/sdras))

## Pages & App structure
  + Pages
    - /
      - show a header <AppHeader />
      - uses <AppRestaurantInfo />
      
    - /restaurants
      - uses <AppSelect /> to filter by cuisine (pizza, tacos, ...)
      - uses <AppRestaurantInfo />
      

    - /items/[id].vue
      - represents an item of a store's menu

    - ...

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install

# pnpm
pnpm install

# yarn
yarn install

# bun
bun install
```

## Development Server

Start the development server on `http://localhost:3000`:

```bash
# npm
npm run dev

# pnpm
pnpm run dev

# yarn
yarn dev

# bun
bun run dev
```

## Credits:
Thanks to:
  - [Nuxt official doc](https://nuxt.com/docs/api).
  - [Vue **Great** doc](https://vuejs.org/api/).
  - [Pinia doc](https://pinia.vuejs.org/ssr/nuxt.html).
  - [Sarah Drasner](https://github.com/sdras) for her courses on FrontEndMasters and Materials for this project.

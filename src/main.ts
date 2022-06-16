import { createApp } from "vue"
import App from "./App.vue"
import "@unocss/reset/tailwind.css"
import "./app.css"
import "uno.css"

// Router initialization
import generatedRoutes from "virtual:generated-pages"
import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
})

// App creation
createApp(App).use(router).mount("#app")

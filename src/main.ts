import { createApp } from "vue"
import App from "./App.vue"
import { createHead } from "@vueuse/head"
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
// Head initialization
const head = createHead()

// App creation
createApp(App).use(router).use(head).mount("#app")

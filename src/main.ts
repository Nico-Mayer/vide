import { createApp } from "vue"
import App from "./App.vue"
import { createHead } from "@vueuse/head"
import "@unocss/reset/tailwind.css"

import "uno.css"
import "./styles/app.css"

// Layouts initialization
import { setupLayouts } from "virtual:generated-layouts"

// Router initialization
import generatedRoutes from "virtual:generated-pages"
import { createRouter, createWebHistory } from "vue-router"
const routes = setupLayouts(generatedRoutes)

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
})
// Head initialization
const head = createHead()

// App creation
createApp(App).use(router).use(head).mount("#app")

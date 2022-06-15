import { createApp } from "vue"
import App from "./App.vue"
import "./app.css"
import "virtual:windi.css"

import generatedRoutes from "virtual:generated-pages"
import { createRouter, createWebHistory } from "vue-router"
const router = createRouter({
  history: createWebHistory(),
  routes: generatedRoutes,
})
createApp(App).use(router).mount("#app")

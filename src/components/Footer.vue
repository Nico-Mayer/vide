<script setup lang="ts">
import { Icon } from "@iconify/vue"
const router = useRouter()

function go(url: string) {
  router.push(url)
}
</script>

<template>
  <div class="space-x-5">
    <button @click="go('/')">
      <Icon icon="clarity:home-line" width="24" height="24" />
    </button>
    <button @click="toggleDarkMode">
      <Icon icon="carbon:moon" dark="hidden" width="24" height="24" />
      <Icon
        class="hidden"
        dark="flex"
        icon="carbon:sun"
        width="24"
        height="24"
      />
    </button>
    <a href="https://github.com/Nico-Mayer/vide" target="_blank">
      <Icon icon="carbon:logo-github" width="24" height="24" />
    </a>
    <button @click="go('/about')">
      <Icon icon="bi:card-text" width="24" height="24" />
    </button>
  </div>
</template>

<style scoped>
button,
a {
  @apply hover:text-accent0;
  @apply transition-all
  @apply duration-100;
}
</style>

<script setup lang="ts">
import { Icon } from "@iconify/vue"
</script>

<template>
  <div class="space-x-3">
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
    <a href="https://github.com/Nico-Mayer/vide" target="_blank"
      ><Icon icon="carbon:logo-github" width="24" height="24"
    /></a>
  </div>
</template>

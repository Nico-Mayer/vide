<script setup lang="ts">
const router = useRouter()

function go(url: string) {
  router.push(url)
}
</script>

<template>
  <nav space="x5">
    <button class="icon-btn" @click="go('/')">
      <div class="i-clarity-home-line" />
    </button>
    <button class="icon-btn" @click="toggleDark()">
      <div class="i-carbon-moon dark:i-carbon-sun" />
    </button>
    <a
      class="icon-btn"
      href="https://github.com/Nico-Mayer/vide"
      target="_blank"
    >
      <div class="i-carbon-logo-github" />
    </a>
    <button class="icon-btn" @click="go('/about')">
      <div class="i-bi-card-text" />
    </button>
  </nav>
</template>

<script setup lang="ts"></script>

<template>
  <div flex="~" w="screen" justify="center" p="y20 x4">
    <div flex="~ col" items="center" class="max-w-2xl">
      <div class="i-bi-card-text" text="40px accent" m="b4"></div>
      <h1 class="mb-4" font="semibold" text="2xl">About</h1>
      <p class="mb-2">
        <a
          class="link"
          target="_blank"
          href="https://github.com/Nico-Mayer/vide"
          >Vide</a
        >
        is an
        <a class="link" target="_blank" href="https://vitejs.dev/">Vite</a> +
        <a class="link" target="_blank" href="https://vuejs.org/">Vue 3</a>
        starter template made by
        <a class="link" target="_blank" href="https://github.com/Nico-Mayer"
          >@nico-mayer</a
        >.
      </p>
      <p class="mb-10">
        The Goal was to create a super lightweight Vite Starter template with as
        few dependencies as possible, but at the same time provide a good amount
        of utility. To deliver a clean entry point for newcomers and advanced
        Vue + Vite users.
      </p>
      <Footer />
    </div>
  </div>
</template>

<style scoped>
.link {
  @apply underline;
  @apply hover:text-accent0;
  @apply transition-all
  @apply duration-100;
}
</style>

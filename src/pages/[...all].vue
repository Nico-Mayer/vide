<script setup lang="ts">
import { Icon } from "@iconify/vue"
const router = useRouter()
</script>

<template>
  <div
    class="flex flex-col justify-center items-center w-screen py-20 px-4 space-y-6"
  >
    <Icon icon="uiw:stop-o" width="48" height="48" />
    <p>Page not Found</p>
    <button
      bg="accent0/90 hover:accent0"
      class="rounded px-4 py-1 transition-all duration-100"
      text="text0D/80 hover:text0D"
      @click="router.back()"
    >
      Back
    </button>
  </div>
</template>

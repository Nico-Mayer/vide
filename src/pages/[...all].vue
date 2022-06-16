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
    <button bg="accent0" p="y-1 p-4" rounded="~" @click="router.back()">
      Back
    </button>
  </div>
</template>

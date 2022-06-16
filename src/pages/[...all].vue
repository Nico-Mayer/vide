<script setup lang="ts">
const router = useRouter()
</script>

<template>
  <div flex="~ col" w="screen" items="center" p="y20 x4" space="y6">
    <div class="i-carbon:warning-alt" text="40px red-400"></div>
    <p>Page not Found</p>
    <button class="btn" @click="router.back()">Back</button>
  </div>
</template>

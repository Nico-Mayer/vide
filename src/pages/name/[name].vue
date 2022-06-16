<script setup lang="ts">
import { Icon } from "@iconify/vue"
const props = defineProps({ name: String })
const router = useRouter()
</script>

<template>
  <main class="flex flex-col justify-center items-center w-screen py-20 px-4">
    <section flex="~ col" items="center" m="b-10">
      <Icon icon="ph:finn-the-human-thin" width="48" height="48" m="b-4" />
      <h3 text="lg">
        Hey <span font="bold" text="accent0">{{ name }}</span> !
      </h3>
      <p font="italic" text="xs" opacity="50">[Demo of dynamic route]</p>
      <button
        m="t-10"
        bg="accent0/50 hover:accent0"
        class="rounded px-4 py-1 transition-all duration-100"
        text="text0D/80 hover:text0D"
        @click="router.back()"
      >
        Back
      </button>
    </section>
    <Footer />
  </main>
</template>

<style></style>

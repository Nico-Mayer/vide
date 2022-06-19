<script setup lang="ts">
const props = defineProps({ name: String })
const router = useRouter()
</script>

<template>
  <main flex="~ col" items="center" m="b10">
    <section flex="~ col" items="center">
      <div class="i-ph-finn-the-human-thin" text="40px" m="b4"></div>
      <h3 text="lg">
        Hey <span font="bold" text="accent">{{ name }}</span> !
      </h3>
      <p font="italic" text="xs" opacity="50">[Demo of dynamic route]</p>
      <button m="t-10" class="btn" @click="router.back()">Back</button>
    </section>
  </main>
</template>

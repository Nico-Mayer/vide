<script setup lang="ts">
const router = useRouter()
const name = ref()

function go() {
  if (name.value) {
    router.push(`/name/${name.value}`)
  }
}
</script>

<template>
  <div>
    <section flex="~ col" items="center">
      <img class="w-40" src="../assets/logo.svg" alt="" />
      <h1 font="semibold" text="2xl">Vide</h1>
      <p font="italic" opacity="60" m="t1">
        Vite superlight Beginner Starter Template
      </p>
    </section>
    <section m="y10" flex="~ col" items="center" space="y3">
      <input
        bg="lightbg dark:darkbg"
        border="~ zinc-300 dark:textl rounded"
        text="center"
        outline="none"
        p="x4 y2"
        type="text"
        @keydown.enter="go"
        v-model="name"
        placeholder="What`s your name?"
      />
      <button class="btn" @click="go">GO</button>
    </section>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
</route>

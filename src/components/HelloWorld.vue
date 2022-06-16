<script setup lang="ts">
const router = useRouter()
const name = ref("")

function go() {
  if (name) {
    router.push(`/name/${name.value}`)
  }
}
</script>

<template>
  <div class="flex flex-col justify-center items-center w-screen py-20 px-4">
    <section class="flex flex-col items-center">
      <img class="w-40" src="../assets/logo.svg" alt="" />
      <h1 font="semibold" text="2xl">Vide</h1>
      <p opacity="60" font="italic" m="t-1">
        Vite superlight Beginner Starter Template
      </p>
    </section>
    <section m="y-10" class="flex flex-col items-center">
      <input
        bg="bg0L dark:bg0D"
        class="mb-3 outline-none text-center"
        p="x-4 y-2"
        border="~ text0L/20 dark:text0D/20 rounded"
        type="text"
        @keydown.enter="go"
        v-model="name"
        placeholder="What`s your name?"
      />
      <button
        bg="accent0/90 hover:accent0"
        class="rounded px-4 py-1 transition-all duration-100"
        text="text0D/80 hover:text0D"
        @click="go"
      >
        GO
      </button>
    </section>
    <Footer />
  </div>
</template>

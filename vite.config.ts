import { defineConfig } from "vite"
import Pages from "vite-plugin-pages"
import vue from "@vitejs/plugin-vue"
import Unocss from "unocss/vite"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/unocss/unocss
    Unocss(),
    // https://github.com/antfu/unplugin-vue-components
    Components(),
    // https://github.com/antfu/unplugin-auto-import
    AutoImport({
      imports: [
        "vue",
        "vue-router",
        "vue/macros",
        "@vueuse/head",
        "@vueuse/core",
      ],
      dts: "src/auto-imports.d.ts",
      dirs: ["src/composables"],
      vueTemplate: true,
    }),
    // https://github.com/hannoeru/vite-plugin-pages
    Pages(),
  ],
})

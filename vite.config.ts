import { defineConfig } from "vite"

import vue from "@vitejs/plugin-vue"
import WindiCSS from "vite-plugin-windicss"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import Pages from "vite-plugin-pages"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // https://github.com/windicss/windicss
    WindiCSS(),
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

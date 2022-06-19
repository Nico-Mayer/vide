import { defineConfig } from "vite"
import Pages from "vite-plugin-pages"
import Layouts from "vite-plugin-vue-layouts"
import vue from "@vitejs/plugin-vue"
import Components from "unplugin-vue-components/vite"
import AutoImport from "unplugin-auto-import/vite"
import Markdown from "vite-plugin-md"
import Prism from "markdown-it-prism"
import LinkAttributes from "markdown-it-link-attributes"
import Unocss from "unocss/vite"
const markdownWrapperClasses = "prose prose-sm m-auto text-left"

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
      reactivityTransform: true,
    }),
    // https://github.com/unocss/unocss
    Unocss(),
    // https://github.com/antfu/unplugin-vue-components
    Components({
      extensions: ["vue", "md"],
      // allow auto import and register components used in markdown
      include: [/\.vue$/, /\.vue\?vue/, /\.md$/],
      dts: "src/components.d.ts",
    }),
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
    Pages({ extensions: ["vue", "md"] }),
    Layouts(),
    Markdown({
      wrapperClasses: markdownWrapperClasses,
      headEnabled: true,
      markdownItSetup(md) {
        // https://prismjs.com/
        md.use(Prism)
        md.use(LinkAttributes, {
          matcher: (link: string) => /^https?:\/\//.test(link),
          attrs: {
            target: "_blank",
            rel: "noopener",
          },
        })
      },
    }),
  ],
})

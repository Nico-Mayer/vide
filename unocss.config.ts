// This is the unocss config file, check out this links to get more information
// https://uno.antfu.me/
// https://github.com/unocss/unocss

import {
  defineConfig,
  presetUno,
  presetAttributify,
  transformerDirectives,
  transformerVariantGroup,
  presetWebFonts,
  presetIcons,
  presetTypography,
} from "unocss"

export default defineConfig({
  // Here u can customize ur colors for light and dark mode
  theme: {
    colors: {
      // Accent colors
      accent: "#0f766e",
      // Light mode
      lightbg: "#ffffff",
      textl: "#374151",
      // Dark mode
      darkbg: "#22272E",
      textd: "#E0EDEE",
    },
  },
  // Here you can declare custom classes which u can use in every component
  shortcuts: [
    [
      "btn",
      "bg-accent/90 hover:bg-accent rounded px-4 py-1 transition-all duration-200 text-textd/80 hover:text-textd",
    ],
    [
      "icon-btn",
      "inline-block text-xl cursor-pointer select-none opacity-75 transition duration-200 ease-in-out hover:opacity-100 hover:text-accent",
    ],
  ],
  presets: [
    presetWebFonts(
      // Here you can add custom fonts they get imported automatically
      {
        provider: "google",
        fonts: {
          sans: "Roboto",
          mono: ["Fira Code", "Fira Mono:400,700"],
        },
      }
    ),
    presetUno(),
    presetIcons({ scale: 1.2 }),
    presetAttributify(),
    presetTypography(),
  ],
  transformers: [transformerDirectives(), transformerVariantGroup()],
  safelist: "prose prose-sm m-auto text-left".split(" "),
})

import { defineConfig } from "windicss/helpers"

export default defineConfig({
  attributify: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Accent colors
        accent0: "#0f766e",
        // Light Theme colors
        bg0L: "#ffffff",
        text0L: "#374151",

        // Dark Theme colors
        bg0D: "#22272E",
        text0D: "#E0EDEE",
      },
    },
  },
})

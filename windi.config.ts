import { defineConfig } from "windicss/helpers"

export default defineConfig({
  attributify: true,
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light Theme colors
        bg0L: "#ffffff",
        text0L: "#1A202C",

        // Dark Theme colors
        bg0D: "#22272E",
        text0D: "#E0EDEE",
      },
    },
  },
})

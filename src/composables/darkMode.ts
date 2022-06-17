// This Function Toggels the dark mode and can be accessed in every component
function toggleDarkMode() {
  if (document.documentElement.classList.contains("dark")) {
    document.documentElement.classList.remove("dark")
    localStorage.setItem("theme", "light")
  } else {
    document.documentElement.classList.add("dark")
    localStorage.setItem("theme", "dark")
  }
}

// This is returns true id dark mode is enabled
const isDark = () => {
  const userTheme = localStorage.getItem("theme")
  const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  if (userTheme === "dark" || (!userTheme && systemTheme)) {
    return true
  } else {
    return false
  }
}

export { toggleDarkMode, isDark }

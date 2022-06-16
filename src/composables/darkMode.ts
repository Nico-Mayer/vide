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

export { toggleDarkMode }

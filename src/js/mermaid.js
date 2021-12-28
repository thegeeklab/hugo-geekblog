import { DARK_MODE, THEME, AUTO_MODE } from "./app.js"

document.addEventListener("DOMContentLoaded", function (event) {
  let currentMode = localStorage.getItem(THEME)
  let darkModeQuery = window.matchMedia("(prefers-color-scheme: dark)")
  let primaryColor = "#ececff"
  let darkMode = false

  if (currentMode === DARK_MODE || (currentMode === AUTO_MODE && darkModeQuery.matches)) {
    primaryColor = "#6C617E"
    darkMode = true
  }

  import("mermaid")
    .then(({ default: Swal }) => {
      Swal.initialize({
        flowchart: { useMaxWidth: true },
        theme: "base",
        themeVariables: {
          darkMode: darkMode,
          primaryColor: primaryColor
        }
      })
    })
    .catch((error) => console.error(error))
})

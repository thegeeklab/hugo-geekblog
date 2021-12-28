import { TOGGLE_MODES, THEME, AUTO_MODE } from "./app.js"

document.addEventListener("DOMContentLoaded", (event) => {
  const darkModeToggle = document.getElementById("gblog-dark-mode")

  darkModeToggle.onclick = function () {
    let currentMode = localStorage.getItem(THEME)
    let nextMode = toggle(TOGGLE_MODES, currentMode)

    localStorage.setItem(THEME, TOGGLE_MODES[nextMode])
    applyTheme(false)
  }
})

export function applyTheme(init = true) {
  let html = document.documentElement
  let currentMode = TOGGLE_MODES.includes(localStorage.getItem(THEME))
    ? localStorage.getItem(THEME)
    : AUTO_MODE

  html.setAttribute("class", "color-toggle-" + currentMode)
  localStorage.setItem(THEME, currentMode)

  if (currentMode === AUTO_MODE) {
    html.removeAttribute("color-mode")
  } else {
    html.setAttribute("color-mode", currentMode)
  }

  if (!init) {
    // Reload required to re-initialise e.g. Mermaid with the new theme and re-parse the Mermaid code blocks.
    location.reload()
  }
}

function toggle(list = [], value) {
  console.log(list)
  let current = list.indexOf(value)
  let max = list.length - 1
  let next = 0

  if (current < max) {
    next = current + 1
  }

  return next
}

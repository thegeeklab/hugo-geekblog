import "core-js/stable"
import "regenerator-runtime/runtime"

import { applyTheme } from "./darkmode"
import { createCopyButton } from "./copycode.js"

import Clipboard from "clipboard"

export const DARK_MODE = "dark"
export const LIGHT_MODE = "light"
export const AUTO_MODE = "auto"
export const THEME = "hugo-geekblog"
export const TOGGLE_MODES = [AUTO_MODE, DARK_MODE, LIGHT_MODE]
;(() => {
  applyTheme()
})()

document.addEventListener("DOMContentLoaded", function (event) {
  var clipboard = new Clipboard(".clip")

  clipboard.on("success", function (e) {
    const trigger = e.trigger

    if (trigger.hasAttribute("data-copy-feedback")) {
      trigger.classList.add("gblog-post__codecopy--success")
      trigger.querySelector(".icon.copy").classList.add("hidden")
      trigger.querySelector(".icon.check").classList.remove("hidden")

      setTimeout(function () {
        trigger.classList.remove("gblog-post__codecopy--success")
        trigger.querySelector(".icon.copy").classList.remove("hidden")
        trigger.querySelector(".icon.check").classList.add("hidden")
      }, 3000)
    }

    e.clearSelection()
  })

  document.querySelectorAll(".highlight").forEach((highlightDiv) => createCopyButton(highlightDiv))
})

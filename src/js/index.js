import Clipboard from "clipboard"

document.addEventListener("DOMContentLoaded", function () {
  let clipboard = new Clipboard(".clip")

  clipboard.on("success", function (e) {
    const trigger = e.trigger

    if (trigger.hasAttribute("data-copy-feedback")) {
      trigger.classList.add("gblog-post__codecopy--success", "gblog-post__codecopy--out")
      trigger.querySelector(".gblog-icon.copy").classList.add("hidden")
      trigger.querySelector(".gblog-icon.check").classList.remove("hidden")

      setTimeout(function () {
        trigger.classList.remove("gblog-post__codecopy--success", "gblog-post__codecopy--out")
        trigger.querySelector(".gblog-icon.copy").classList.remove("hidden")
        trigger.querySelector(".gblog-icon.check").classList.add("hidden")
      }, 3000)
    }

    e.clearSelection()
  })

  document.querySelectorAll(".highlight").forEach((highlightDiv) => createCopyButton(highlightDiv))
})

function createCopyButton(highlightDiv) {
  const button = document.createElement("span")

  let codeSelector = "pre > code"
  if (highlightDiv.querySelector(".lntable")) {
    codeSelector = ".lntable .lntd:last-child pre > code"
  }

  const codeContainer = highlightDiv.querySelector(codeSelector)
  if (codeContainer !== null) {
    const codeContent = codeContainer.innerText.trim()

    button.classList.add("flex", "align-center", "justify-center", "clip", "gblog-post__codecopy")
    button.type = "button"
    button.innerHTML =
      '<svg class="gblog-icon copy"><use xlink:href="#gblog_copy"></use></svg>' +
      '<svg class="gblog-icon check hidden"><use xlink:href="#gblog_check"></use></svg>'
    button.setAttribute("data-clipboard-text", codeContent)
    button.setAttribute("data-copy-feedback", "Copied!")
    button.setAttribute("role", "button")
    button.setAttribute("aria-label", "Copy")

    highlightDiv.classList.add("gblog-post__codecontainer")
    highlightDiv.insertBefore(button, highlightDiv.firstChild)
  }
}

export function createCopyButton(highlightDiv) {
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

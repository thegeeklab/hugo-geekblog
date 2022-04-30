export function createCopyButton(highlightDiv) {
  const button = document.createElement("span")
  let selector = "pre > code"

  if (highlightDiv.querySelector(".lntable")) {
    selector = ".lntable .lntd:last-child pre > code"
  }

  const codeToCopy = highlightDiv.querySelector(selector).innerText.trim()

  button.classList.add("flex", "align-center", "justify-center", "clip", "gblog-post__codecopy")
  button.type = "button"
  button.innerHTML =
    '<svg class="gblog-icon copy"><use xlink:href="#gblog_copy"></use></svg>' +
    '<svg class="gblog-icon check hidden"><use xlink:href="#gblog_check"></use></svg>'
  button.setAttribute("data-clipboard-text", codeToCopy)
  button.setAttribute("data-copy-feedback", "Copied!")
  button.setAttribute("role", "button")
  button.setAttribute("aria-label", "Copy")

  highlightDiv.classList.add("gblog-post__codecontainer")
  highlightDiv.insertBefore(button, highlightDiv.firstChild)
}

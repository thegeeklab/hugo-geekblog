document.addEventListener("DOMContentLoaded", function (event) {
  let primaryColor = "#ececff";
  let darkMode = false;

  mermaid.initialize({
    flowchart: { useMaxWidth: true },
    theme: "base",
    themeVariables: {
      darkMode: darkMode,
      primaryColor: primaryColor,
    },
  });
});

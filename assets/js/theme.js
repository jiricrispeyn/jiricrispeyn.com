(function () {
  var root = document.documentElement;
  var toggle = document.getElementById("theme-toggle");
  var yearEl = document.getElementById("year");

  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  if (!toggle) return;

  function currentTheme() {
    return (
      root.getAttribute("data-theme") ||
      (window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark")
    );
  }

  // The button names the theme it switches to.
  function syncToggle() {
    var isDark = currentTheme() === "dark";
    toggle.textContent = isDark ? "Light" : "Dark";
    toggle.setAttribute("aria-label", isDark ? "Switch to light theme" : "Switch to dark theme");
  }

  toggle.addEventListener("click", function () {
    var next = currentTheme() === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch (e) {}
    syncToggle();
  });

  syncToggle();
})();

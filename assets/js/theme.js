(function(){
  const key = "theme";
  const root = document.documentElement;
  const btn = document.getElementById("theme-toggle");
  const saved = localStorage.getItem(key);
  if (saved) root.setAttribute("data-theme", saved);
  btn && btn.addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", cur);
    localStorage.setItem(key, cur);
  });
})();

// =====================
// DARK / LIGHT MODE
// =====================
const toggleThemeBtn = document.createElement("button");
toggleThemeBtn.innerText = "🌙";
toggleThemeBtn.style.position = "fixed";
toggleThemeBtn.style.bottom = "20px";
toggleThemeBtn.style.right = "20px";
toggleThemeBtn.style.padding = "10px 15px";
toggleThemeBtn.style.border = "none";
toggleThemeBtn.style.borderRadius = "50%";
toggleThemeBtn.style.fontSize = "1.2rem";
toggleThemeBtn.style.cursor = "pointer";
toggleThemeBtn.style.boxShadow = "0 4px 12px rgba(0,0,0,0.2)";
toggleThemeBtn.style.zIndex = "2000";
document.body.appendChild(toggleThemeBtn);

// Load theme from local storage
if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  toggleThemeBtn.innerText = "☀️";
}

// Toggle theme
toggleThemeBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  if (document.body.classList.contains("dark")) {
    toggleThemeBtn.innerText = "☀️";
    localStorage.setItem("theme", "dark");
  } else {
    toggleThemeBtn.innerText = "🌙";
    localStorage.setItem("theme", "light");
  }
});

// =====================
// SMOOTH SCROLL (optional, for future navbar links)
// =====================
document.querySelectorAll("a[href^='#']").forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});

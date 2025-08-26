// ==========================
// Mobile Menu Toggle
// ==========================
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  const isActive = navLinks.classList.toggle("active");
  menuToggle.setAttribute("aria-expanded", isActive);
});

// ==========================
// Theme Toggle with Persistence
// ==========================
const themeToggle = document.getElementById("theme-toggle");

// Load theme from localStorage
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.body.classList.remove("light", "dark");
  document.body.classList.add(savedTheme);
  themeToggle.textContent = savedTheme === "dark" ? "☀️" : "🌙";
} else {
  document.body.classList.add("light"); // default
}

themeToggle.addEventListener("click", () => {
  const isDark = document.body.classList.contains("dark");
  document.body.classList.toggle("dark", !isDark);
  document.body.classList.toggle("light", isDark);
  themeToggle.textContent = isDark ? "🌙" : "☀️";

  // Save preference
  localStorage.setItem("theme", isDark ? "light" : "dark");
});

// ==========================
// Smooth Scroll for Nav Links
// ==========================
document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    const targetId = link.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60,
        behavior: "smooth"
      });
      navLinks.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
});

// ==========================
// Reveal Sections on Scroll (IntersectionObserver)
// ==========================
const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  { threshold: 0.15 }
);

reveals.forEach(reveal => observer.observe(reveal));

// ==========================
// Resume Button (Open in New Tab)
// ==========================
document.addEventListener("DOMContentLoaded", () => {
  const resumeBtn = document.getElementById("resume-btn");
  if (resumeBtn) {
    resumeBtn.addEventListener("click", e => {
      e.preventDefault();
      window.open("Resume.pdf", "_blank");
    });
  }
});

// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const body = document.body;
  const toggleBtn = document.createElement("button");
  toggleBtn.id = "darkToggle";
  toggleBtn.innerText = "🌙 Dark Mode";
  document.querySelector("header").appendChild(toggleBtn);

  toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");
    if (body.classList.contains("dark")) {
      toggleBtn.innerText = "☀ Light Mode";
    } else {
      toggleBtn.innerText = "🌙 Dark Mode";
    }
  });
});

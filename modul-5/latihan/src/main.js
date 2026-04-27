import "./style.css";

const toggleDark = document.getElementById("toggleDark");
const html = document.documentElement;

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
  html.classList.add("dark");
} else if (savedTheme === "light") {
  html.classList.remove("dark");
} else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
  html.classList.add("dark");
}

toggleDark?.addEventListener("click", () => {
  html.classList.toggle("dark");
  localStorage.setItem("theme", html.classList.contains("dark") ? "dark" : "light");
});
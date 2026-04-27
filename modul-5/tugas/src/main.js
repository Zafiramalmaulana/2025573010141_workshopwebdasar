import "./style.css";

const toggleDark = document.getElementById("toggleDark");
const html = document.documentElement;

if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
  toggleDark.textContent = "Light Mode";
}

toggleDark.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    toggleDark.textContent = "Light Mode";
  } else {
    localStorage.setItem("theme", "light");
    toggleDark.textContent = "Dark Mode";
  }
});
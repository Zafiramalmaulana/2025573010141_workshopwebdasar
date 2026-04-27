import "./style.css";

const toggleDark = document.getElementById("toggleDark");
const html = document.documentElement;

// cek mode tersimpan
if (localStorage.getItem("theme") === "dark") {
  html.classList.add("dark");
}

toggleDark.addEventListener("click", () => {
  html.classList.toggle("dark");

  if (html.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});
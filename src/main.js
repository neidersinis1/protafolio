import { ContactPage } from "./components/ContactProject.js";

const htmlDom = document.querySelector("html");
const lightMode = document.getElementById("lightMode1");
const darkMode = document.getElementById("darkMode2");

const mainMobile = document.getElementById("main-mobile");
const openMobile = document.getElementById("open-mobile");
const closeMenuMobile = document.getElementById("close");

const navMobile = document.getElementById("nav-mobile");

const html = document.getElementById("html");

lightMode.addEventListener("click", lightMode1);
darkMode.addEventListener("click", darkMode2);

openMobile.addEventListener("click", () => {
  mainMobile.classList.remove("hidden");
  openMobile.classList.add("hidden");
});

closeMenuMobile.addEventListener("click", () => {
  mainMobile.classList.add("hidden");
  openMobile.classList.remove("hidden");
});

navMobile.addEventListener("click", () => {
  mainMobile.classList.add("hidden");
  openMobile.classList.remove("hidden");
});

// let ContactProject = 10;
// console.log(ContactPage);

function lightMode1() {
  htmlDom.classList.remove("dark");
  lightMode.classList.add("hidden");
  darkMode.classList.remove("hidden");
}

function darkMode2() {
  htmlDom.classList.add("dark");
  darkMode.classList.add("hidden");
  lightMode.classList.remove("hidden");
}
// htmlDom.value;
// console.log(htmlDom);
// console.log(documentElement);
if (htmlDom == "dark") {
  darkMode.classList.add("hidden");
} else {
}

// On page load or when changing themes, best to add inline in `head` to avoid FOUC

document.addEventListener("DOMContentLoaded", () => {
  document.documentElement.classList.add("scroll-smooth");
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
});

document.addEventListener("DOMContentLoaded", () => {
  if (
    localStorage.theme === "dark" ||
    (!("theme" in localStorage) &&
      window.matchMedia("(prefers-color-scheme: dark)").matches)
  ) {
    darkMode.classList.add("hidden");
  } else {
    lightMode.classList.add("hidden");
  }

  // Whenever the user explicitly chooses light mode
  // localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  // localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
});

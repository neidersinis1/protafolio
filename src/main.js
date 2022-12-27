import { ContactPage } from "./components/ContactProject.js";

// DARK-MODE

const htmlDom = document.querySelector("html");
const lightMode = document.getElementById("lightMode1");
const darkMode = document.getElementById("darkMode2");

lightMode.addEventListener("click", () => {
  htmlDom.classList.remove("dark");
  lightMode.classList.add("hidden");
  darkMode.classList.remove("hidden");
});
darkMode.addEventListener("click", () => {
  htmlDom.classList.add("dark");
  darkMode.classList.add("hidden");
  lightMode.classList.remove("hidden");
});

// MENU-MOBILE

const mainMobile = document.getElementById("main-mobile");
const openMobile = document.getElementById("open-mobile");
const closeMenuMobile = document.getElementById("close");

openMobile.addEventListener("click", () => {
  mainMobile.classList.remove("hidden");
  openMobile.classList.add("hidden");
});
closeMenuMobile.addEventListener("click", () => {
  mainMobile.classList.add("hidden");
  openMobile.classList.remove("hidden");
});

// CONTAINER DE LA NAVEGACION MOBILE

const navMobile = document.getElementById("nav-mobile");

navMobile.addEventListener("click", () => {
  mainMobile.classList.add("hidden");
  openMobile.classList.remove("hidden");
});

const html = document.getElementById("html-imagen");
const css = document.getElementById("css");
const js = document.getElementById("js");
const node = document.getElementById("node");
const react = document.getElementById("react");
const tailwind = document.getElementById("tailwind");
const git = document.getElementById("git");
const github = document.getElementById("github");

document.addEventListener("click", (e) => {
  console.log("click en ", e.target);
  if (e.target.matches("div .html")) {
    // alert("Hola, Mundo");
    html.classList.toggle("hidden");
    css.classList.add("hidden");
    js.classList.add("hidden");
    node.classList.add("hidden");
    react.classList.add("hidden");
    tailwind.classList.add("hidden");
    git.classList.add("hidden");
    github.classList.add("hidden");
  }
  if (e.target.matches("div .css")) {
    css.classList.toggle("hidden");
    html.classList.add("hidden");
    js.classList.add("hidden");
    node.classList.add("hidden");
    react.classList.add("hidden");
    tailwind.classList.add("hidden");
    git.classList.add("hidden");
    github.classList.add("hidden");
  }
  if (e.target.matches("div .js")) {
    // alert("Hola, Mundo");
    js.classList.toggle("hidden");
    html.classList.add("hidden");
    css.classList.add("hidden");
    node.classList.add("hidden");
    react.classList.add("hidden");
    tailwind.classList.add("hidden");
    git.classList.add("hidden");
    github.classList.add("hidden");
  }
  if (e.target.matches("div .node")) {
    node.classList.toggle("hidden");
    html.classList.add("hidden");
    css.classList.add("hidden");
    js.classList.add("hidden");
    react.classList.add("hidden");
    tailwind.classList.add("hidden");
    git.classList.add("hidden");
    github.classList.add("hidden");
  }
  if (e.target.matches("div .react")) {
    // alert("Hola, Mundo");
    react.classList.toggle("hidden");
    html.classList.add("hidden");
    css.classList.add("hidden");
    js.classList.add("hidden");
    node.classList.add("hidden");
    tailwind.classList.add("hidden");
    git.classList.add("hidden");
    github.classList.add("hidden");
  }
  if (e.target.matches("div .tailwind")) {
    tailwind.classList.toggle("hidden");
    html.classList.add("hidden");
    css.classList.add("hidden");
    js.classList.add("hidden");
    node.classList.add("hidden");
    react.classList.add("hidden");
    git.classList.add("hidden");
    github.classList.add("hidden");
  }
  if (e.target.matches("div .git")) {
    // alert("Hola, Mundo");
    git.classList.toggle("hidden");
    html.classList.add("hidden");
    css.classList.add("hidden");
    js.classList.add("hidden");
    node.classList.add("hidden");
    react.classList.add("hidden");
    tailwind.classList.add("hidden");
    github.classList.add("hidden");
  }
  if (e.target.matches("div .github")) {
    github.classList.toggle("hidden");
    html.classList.add("hidden");
    css.classList.add("hidden");
    js.classList.add("hidden");
    node.classList.add("hidden");
    react.classList.add("hidden");
    tailwind.classList.add("hidden");
    git.classList.add("hidden");
  }
});

// PROJECT

const spanQr = document.getElementById("hover-Qr");
const parrafoQr = document.getElementById("parrafo-Qr");
const spanNo = document.getElementById("hover-notification");
const parrafoNo = document.getElementById("parrafo-notification");
const spanCa = document.getElementById("hover-calification");
const parrafoCa = document.getElementById("parrafo-calification");
const spanTou = document.getElementById("hover-tourism");
const parrafoTou = document.getElementById("parrafo-tourism");

spanQr.addEventListener("mouseover", (e) => {
  console.log("click en mouse ", e.target);
  if (e.target.matches("span ", spanQr)) {
    parrafoQr.classList.remove("hidden");
  }
});

spanQr.addEventListener("mouseleave", () => {
  parrafoQr.classList.add("hidden");
});

spanNo.addEventListener("mouseover", (e) => {
  console.log("click en mouse ", e.target);
  if (e.target.matches("span ", spanNo)) {
    parrafoNo.classList.remove("hidden");
  }
});

spanNo.addEventListener("mouseleave", () => {
  parrafoNo.classList.add("hidden");
});

spanCa.addEventListener("mouseover", (e) => {
  console.log("mouseover en mouse ", e.target);
  if (e.target.matches("span ", spanCa)) {
    parrafoCa.classList.remove("hidden");
  }
});

spanCa.addEventListener("mouseleave", () => {
  parrafoCa.classList.add("hidden");
});

spanTou.addEventListener("mouseover", (e) => {
  console.log("mouseover en mouse ", e.target);
  if (e.target.matches("span ", spanTou)) {
    parrafoTou.classList.remove("hidden");
  }
});

spanTou.addEventListener("mouseleave", () => {
  parrafoTou.classList.add("hidden");
});

// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

// const css = document.getElementById("css");
// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

// const html = document.getElementById("html-imagen");
// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

// const html = document.getElementById("html-imagen");
// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

// const html = document.getElementById("html-imagen");
// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

// const html = document.getElementById("html-imagen");
// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

// const html = document.getElementById("html-imagen");
// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

// const html = document.getElementById("html-imagen");
// const openHtml = document.getElementById("open-html");

// openHtml.addEventListener("click", () => {
//   html.classList.toggle("hidden");
// });

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

// import contactProject from "./components/contactProject";

const htmlDom = document.querySelector("html");
const darkMode1 = document.getElementById("darkMode");
// const dark = document.documentElement.classList.add("dark");

darkMode1.addEventListener("click", darkMode);

function darkMode() {
  htmlDom.classList.toggle("dark");
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
  //   localStorage.theme = "light";

  // Whenever the user explicitly chooses dark mode
  localStorage.theme = "dark";

  // Whenever the user explicitly chooses to respect the OS preference
  // localStorage.removeItem("theme");
});

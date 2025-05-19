import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";
import "./styles.css";

loadHome();

document.addEventListener("DOMContentLoaded", () => {
  const homeLink = document.getElementById("home");
  const menuLink = document.getElementById("menu");
  const aboutLink = document.getElementById("about");

  homeLink.addEventListener("click", (e) => {
    e.preventDefault();
    loadHome();
  });
  menuLink.addEventListener("click", (e) => {
    e.preventDefault();
    loadMenu();
  });
  aboutLink.addEventListener("click", (e) => {
    e.preventDefault();
    loadAbout();
  });
});

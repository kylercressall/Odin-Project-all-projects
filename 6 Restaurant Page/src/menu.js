import mealsImage from "./assets/images/meals.jpg";

function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Menu";
  content.appendChild(heading);

  const image = document.createElement("img");
  image.src = mealsImage;
  content.appendChild(image);

  const menu = document.createElement("p");
  menu.textContent = `Teriyaki Chicken Bowl
  Kung Pau Chicken Bowl 
  Korean Beef Barbeque Bowl
  Bacon and Egg Burrito
  Buffalo Chicken Burrito
  Hawiian Katsu Chicken Plate`;
  menu.style = "white-space:pre-line";
  content.appendChild(menu);
}

export default loadMenu;

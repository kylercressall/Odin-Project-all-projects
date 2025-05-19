import restImage from "./assets/images/restaurant.jpg";

function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const heading = document.createElement("h3");
  heading.textContent = "This is a fancy restaurant";

  const image = document.createElement("img");
  image.src = restImage;

  content.appendChild(heading);
  content.appendChild(image);
}

export default loadHome;

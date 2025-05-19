import restImage from "./assets/images/restaurant.jpg";

function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "Kyler's Meal Prep Convenience Store";
  content.appendChild(heading);

  const image = document.createElement("img");
  image.src = restImage;
  content.appendChild(image);

  const description = document.createElement("p");
  description.textContent =
    "Kyler's specializes in low-cost, high protein, and convenient to eat meals. Enjoy from our list of healthy meals and enjoy the food.";
  content.appendChild(description);

  const infoTitle = document.createElement("h3");
  infoTitle.textContent = "Location and Hours:";
  content.appendChild(infoTitle);

  const info = document.createElement("p");
  info.textContent = `Monday: 9am-6pm
  Tuesday: 9am-6pm
  Wednesday: 9am-6pm
  Thursday: 9am-6pm
  Friday: 9am-6pm`;
  info.style = "white-space: pre-line;";
  content.appendChild(info);

  const hoursDescription = document.createElement("p");
  hoursDescription.textContent = "Located at 648 E 800 S, Orem, UT 84097";
  content.appendChild(hoursDescription);
}

export default loadHome;

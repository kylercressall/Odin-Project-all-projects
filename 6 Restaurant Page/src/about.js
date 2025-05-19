function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const heading = document.createElement("h1");
  heading.textContent = "About Kyler's";
  content.appendChild(heading);

  const description = document.createElement("p");
  description.textContent =
    "The goal of Kyler's is to make eating healthy food tasty and convenient.";
  content.appendChild(description);
}

export default loadMenu;

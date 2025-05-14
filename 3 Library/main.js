const myLibrary = [
  new Book("title1", "author1", "2000-01-01"),
  new Book("titl2", "autor2", "2000-01-02"),
  new Book("tle3", "auor3", "2000-01-03"),
  new Book("le4", "aur4", "2000-01-04"),
];

const container = document.getElementById("container");

const form = document.getElementById("input");
const titleInput = document.getElementById("title");
const authorInput = document.getElementById("author");
const dateInput = document.getElementById("date");

function Book(title, author, publication_date) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.author = author;
  this.publication_date = publication_date;
  this.read = false;
}

function addBookToLibrary(title, author, publication_date) {
  myLibrary.push(new Book(title, author, publication_date));
}

function readLibrary() {
  container.innerHTML = "";
  myLibrary.forEach((book, index) => {
    const div = document.createElement("div");
    div.textContent = `Title ${book.title}, Author ${book.author}, Publication Date ${book.publication_date}, Read ${book.read}`;

    const toggleBtn = document.createElement("button");
    toggleBtn.textContent = book.read ? "Mark Unread" : "Mark Read";
    toggleBtn.addEventListener("click", () => {
      myLibrary[index].read = !myLibrary[index].read;
      readLibrary();
    });

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "Remove Book";
    removeBtn.addEventListener("click", () => {
      myLibrary.splice(index, 1);
      readLibrary();
    });

    div.appendChild(toggleBtn);
    div.appendChild(removeBtn);
    container.appendChild(div);
  });
}

readLibrary();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const author = authorInput.value.trim();
  const date = dateInput.value.trim();

  myLibrary.push(new Book(title, author, date));

  readLibrary();
});

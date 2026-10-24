// 1. Books saved to an object
const books = {
  1: { title: "Sample Book One", author: "Author A", price: 12.99 },
  2: { title: "Sample Book Two", author: "Author B", price: 9.5 },
  3: { title: "Sample Book Three", author: "Author C", price: 15.0 }
};

// 2. Update the existing title on the page
const storeTitle = document.querySelector("#store-title"); // match your template's selector
storeTitle.textContent = "Flatbooks";


// Step 3: update the title
const bookStoreTitle = document.getElementById("header");
bookStoreTitle.textContent = bookStore.name;

// Step 4: create and append elements for every book
bookStore.books.forEach((book) => {
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.imgSrc;

  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);
  bookList.appendChild(bookContainer);
});
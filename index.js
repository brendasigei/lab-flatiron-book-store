// 1. Books saved to an object
const books = {
  1: { title: "Sample Book One", author: "Author A", price: 12.99 },
  2: { title: "Sample Book Two", author: "Author B", price: 9.5 },
  3: { title: "Sample Book Three", author: "Author C", price: 15.0 }
};

// 2. Update the existing title on the page
const storeTitle = document.querySelector("#store-title"); // match your template's selector
storeTitle.textContent = "Flatbooks";

// 3. Add an element for every book in the catalog
const bookList = document.querySelector("#book-list"); // match your template's container

Object.values(books).forEach((book) => {
  const card = document.createElement("div");
  card.className = "book";

  const title = document.createElement("h2");
  title.textContent = book.title;

  const author = document.createElement("p");
  author.textContent = `by ${book.author}`;

  const price = document.createElement("p");
  price.textContent = `$${book.price.toFixed(2)}`;

  card.append(title, author, price);
  bookList.appendChild(card);
});

// If the header has an id
const header = document.querySelector("#store-title");

// If it's the main heading tag
const header = document.querySelector("h1");

// If it has a class
const header = document.querySelector(".header");

// 1. Select the title element and save it as bookStoreTitle
const bookStoreTitle = document.getElementById("header");

// 2. Change its text to the name property of the bookStore variable
bookStoreTitle.textContent = bookStore.name;

bookStore.books.forEach((book) => {
  // 1. Create elements for each book
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  // 2. Match the elements to the book object
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.imgSrc;

  // 3. Append book elements to bookList
  bookContainer.append(bookTitle, bookAuthor, bookImage);
  bookList.appendChild(bookContainer);
});
  const bookList = document.getElementById("book-list");

 console.log(bookStoreTitle);      // should print the <h1>, not null
console.log(bookStore.books);     // confirms the books are an array and shows the property names

bookStore.books.forEach((book) => {
  console.log(book);              // shows the exact image property name
  // ...rest of your code
}); 
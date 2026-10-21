// Step 3: Catalog of books saved to an object array
const bookCatalog = [
  {
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    price: "$10.99",
    image: "https://via.placeholder.com/150?text=The+Great+Gatsby"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    price: "$12.50",
    image: "https://via.placeholder.com/150?text=To+Kill+a+Mockingbird"
  },
  {
    title: "1984",
    author: "George Orwell",
    price: "$9.99",
    image: "https://via.placeholder.com/150?text=1984"
  }
];

// -------------------------------------------------------------
// STEP 1: Update the existing title on the page
// -------------------------------------------------------------
const titleElement = document.querySelector("#store-title");
titleElement.textContent = "Welcome to Flatbooks Bookstore";

// -------------------------------------------------------------
// STEP 2 & 4: Add elements for every book using DOM manipulation
// -------------------------------------------------------------
const catalogContainer = document.querySelector("#book-catalog");

// Loop through each book object in the catalog
bookCatalog.forEach((book) => {
  // Create a container card for the book
  const bookCard = document.createElement("div");
  bookCard.classList.add("book-card");

  // Create image element
  const img = document.createElement("img");
  img.src = book.image;
  img.alt = book.title;

  // Create title element
  const h3 = document.createElement("h3");
  h3.textContent = book.title;

  // Create author element
  const authorP = document.createElement("p");
  authorP.textContent = `By: ${book.author}`;

  // Create price element
  const priceP = document.createElement("p");
  priceP.textContent = `Price: ${book.price}`;

  // Append all details to the book card
  bookCard.appendChild(img);
  bookCard.appendChild(h3);
  bookCard.appendChild(authorP);
  bookCard.appendChild(priceP);

  // Append the book card to the main catalog container
  catalogContainer.appendChild(bookCard);
});

// Step 1: Select the DOM element with the id of 'header' and save it to 'bookStoreTitle'
const bookStoreTitle = document.querySelector("#header");

// Step 2: Change the textContent of bookStoreTitle to match the name property of bookStore
bookStoreTitle.textContent = bookStore.name;

// Select the container where all books will be added
const bookList = document.querySelector("#book-list"); // or whatever selector your lab uses for bookList

// Loop through the array of books (e.g., bookStore.inventory or bookStore.books)
bookStore.inventory.forEach((book) => {
  // 1. Create elements for each book
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  // 2. Change textContent / src of each element to match book object
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image; // or book.imageUrl / book.cover depending on your object properties

  // 3. Append book elements to bookContainer
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append bookContainer element to bookList
  bookList.appendChild(bookContainer);
});

bookStore.inventory.forEach((book) => {
  // Debugging Tip: Check what 'book' looks like in each iteration
  console.log("Current book object:", book);

  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  
  bookTitle.textContent = book.title;

  // Debugging Tip: Verify the created element and its content
  console.log("Created h3 element:", bookTitle);
});

// Complete DOM Lab Solution Overview

// 1. SELECT HEADER & UPDATE STORE TITLE
const bookStoreTitle = document.querySelector("#header");
bookStoreTitle.textContent = bookStore.name;

// 2. SELECT CATALOG CONTAINER
const bookList = document.querySelector("#book-list");

// 3. DYNAMICALLY CREATE & APPEND BOOK ELEMENTS
bookStore.inventory.forEach((book) => {
  // Create HTML structure elements
  const bookContainer = document.createElement("li");
  const bookTitle = document.createElement("h3");
  const bookAuthor = document.createElement("p");
  const bookImage = document.createElement("img");

  // Populate node content from data source
  bookTitle.textContent = book.title;
  bookAuthor.textContent = book.author;
  bookImage.src = book.image;

  // Append leaf nodes into container node
  bookContainer.appendChild(bookTitle);
  bookContainer.appendChild(bookAuthor);
  bookContainer.appendChild(bookImage);

  // Append container node into document tree
  bookList.appendChild(bookContainer);
});

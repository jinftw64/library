// implement a library that will display books and add/remove books

// store book objects
const myLibrary = [];


// constructor
function Book(author, title, pages, read) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}


function displayBooks(array) {
  // display all books in array
}


function createBookElement(book) {
  // create html element of book and its properties
}


// sample books to seed library shelves
const alice = new Book('Lewis Carroll', 'Alice in Wonderland', 70, true);
const hobbit = new Book('J. R. R. Tolkien', 'The Hobbit', 800, true);
const warandpeace = new Book('Leo Tolstoy', 'War and Peace', 2130, false);
const assassin = new Book('Robin Hobb', 'Assassin\'s Apprentice', 400, true);

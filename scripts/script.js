// implement a library that will display books and add/remove books

// store book objects
const myLibrary = [];


// constructor
function Book(author, title, pages, read, isbn) {
  this.author = author
  this.title = title
  this.pages = pages
  this.read = read
  this.isbn = isbn
}


function addBookToLibrary(book) {
  myLibrary.push(book);
}


function displayBooks(library) {
  // display all books in array
  const bookshelf = document.getElementsByClassName('bookshelf')[0]

  library.forEach(book => {
    const bookDiv = createBookElement(book)
    bookshelf.appendChild(bookDiv)
  });
}


function createBookElement(book) {
  // create html element of book and its properties
  const newBook = document.createElement('div')
  newBook.classList.add('book')

  const newImg = document.createElement('img')
  newImg.src = getCoverArt(book)

  newBook.appendChild(newImg)

  return newBook
}


function getCoverArt(book) {
  // use Open Library Covers API to retrieve cover art
  return `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
}


// sample books to seed library shelves
const alice = new Book('Lewis Carroll', 'Alice in Wonderland', 70, true, '9781841353463');
const hobbit = new Book('J. R. R. Tolkien', 'The Hobbit', 800, true, '9780458920303');
const warandpeace = new Book('Leo Tolstoy', 'War and Peace', 2130, false, '9780007488315');
const assassin = new Book('Robin Hobb', 'Assassin\'s Apprentice', 400, true, '055357339X');


addBookToLibrary(alice)
addBookToLibrary(hobbit)
addBookToLibrary(warandpeace)
addBookToLibrary(assassin)

displayBooks(myLibrary)

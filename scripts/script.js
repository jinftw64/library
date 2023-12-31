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


function addToLibrary(book) {
  myLibrary.push(book);
}


function removeFromLibrary(bookIndex) {
  myLibrary.splice(bookIndex, 1);
}


// remove all books from shelf and then populate books from library onto shelf
function displayBooks(library) {
  // display all books in array
  const bookshelf = document.querySelector('.bookshelf')
  let childBook = bookshelf.lastElementChild

  while (childBook) {
    bookshelf.removeChild(childBook);
    childBook = bookshelf.lastElementChild
  }

  for (let i = 0; i < library.length; i++) {
    const currentBook = library[i]
    const bookDiv = createBookElement(currentBook)
    bookDiv.dataset.location = i
    bookshelf.appendChild(bookDiv)
  }

  setDeleteButtons();
  setToggles();
}


// create html element of book and its properties
function createBookElement(book) {
  const newBook = document.createElement('div')
  newBook.classList.add('book')

  const newImg = document.createElement('img')
  newImg.src = getCoverArt(book)

  const bookButtonsDiv = document.createElement('div')
  const readToggle = createReadToggle(book.read)
  const deleteBook = document.createElement('button')
  bookButtonsDiv.classList.add('bookButtons')

  readToggle.setAttribute('id', 'toggle-read')

  deleteBook.setAttribute('class', 'deleteBook')
  deleteBook.textContent = 'Delete'
  bookButtonsDiv.appendChild(readToggle)
  bookButtonsDiv.appendChild(deleteBook)

  newBook.appendChild(newImg)
  newBook.appendChild(bookButtonsDiv)

  return newBook
}


function createReadToggle(read) {
  const label = document.createElement('label')
  const input = document.createElement('input')
  const span = document.createElement('span')

  label.setAttribute('class', 'switch')
  input.setAttribute('type', 'checkbox')
  span.setAttribute('class', 'slider round')

  input.checked = read

  label.appendChild(input)
  label.appendChild(span)

  return label
}


// use Open Library Covers API to retrieve cover art
function getCoverArt(book) {
  return `https://covers.openlibrary.org/b/isbn/${book.isbn}-M.jpg`
}


// create array of the current delete buttons and apply event listener
function setDeleteButtons() {
  const deleteBookButtons = document.querySelectorAll('.deleteBook')
  deleteBookButtons.forEach(button => {
    button.addEventListener('click', function(event) {
      const index = event.target.parentElement.parentElement.dataset.location;
      removeFromLibrary(index);
      displayBooks(myLibrary);
    })
  })
}


function setToggles() {
  const readToggleSwitches = document.querySelectorAll('.switch > input');
  readToggleSwitches.forEach(checkbox => {
    checkbox.addEventListener('change', function(event) {
      const index = event.target.parentElement.parentElement.parentElement.dataset.location;
      const book = myLibrary[index]
      book.read = checkbox.checked
    })
  })
}


// sample books to seed library shelves
const alice = new Book('Lewis Carroll', 'Alice in Wonderland', 70, true, '9781841353463');
const hobbit = new Book('J. R. R. Tolkien', 'The Hobbit', 800, true, '9780458920303');
const warandpeace = new Book('Leo Tolstoy', 'War and Peace', 2130, false, '9780007488315');
const assassin = new Book('Robin Hobb', 'Assassin\'s Apprentice', 400, true, '055357339X');

const dialog = document.querySelector('dialog')
const addBookButton = document.querySelector('.container > button')
const cancelAddBookButton = document.querySelector('#cancel')
const submitAddBookButton = document.querySelector('#submit')


addBookButton.addEventListener('click', () => {
  dialog.showModal();
})

cancelAddBookButton.addEventListener('click', () => {
  dialog.close();
  // clear the fields
})

// get values from inputs, instantiate new book object, add book to library,
// display library, and finally reset dialog form
submitAddBookButton.addEventListener('click', (event) => {
  event.preventDefault();

  const author = document.getElementById('author').value
  const title = document.getElementById('title').value
  const pages = document.getElementById('pages').value
  const isbn = document.getElementById('isbn').value
  const read = document.querySelector('input[name="readOrUnread"]:checked').value === 'read' ? true : false

  const book = new Book(author, title, pages, read, isbn)

  addToLibrary(book);
  displayBooks(myLibrary);

  document.querySelector('form').reset();
})


// seed the shelf with some sample books
addToLibrary(alice)
addToLibrary(hobbit)
addToLibrary(warandpeace)
addToLibrary(assassin)

displayBooks(myLibrary)

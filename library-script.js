let Library = [];

const submitButton = document.getElementById("submit-button");
const bookTitle = document.getElementById("Book-Title");
const author = document.getElementById("Author");
const pages = document.getElementById("Pages");
const raed = document.getElementById("read");
const inputs = document.querySelectorAll("#Book-Title, #Author, #Pages")
const form = document.getElementById("form");
let libraryCounter = 0;
let counter = 0;
let count = 0;

form.addEventListener("submit", addBookToLibrary);

class Book{
    constructor(nameOfBook, nameOfAuthor, pageNumber, count, read) {
    this.nameOfBook = nameOfBook;
    this.nameOfAuthor = nameOfAuthor;
    this.pageNumber = pageNumber;
    this.count = count;
    this.read = read;
    }
}
function addBookToLibrary(e) {
    e.preventDefault();
    console.log(Library)
    let bookName = bookTitle.value;
    let authorName = author.value;
    let page = pages.value;
    let hasRead = raed.checked;
    let book = new Book(bookName, authorName, page, counter, hasRead);
    Library.push(book);
    createBookDiv();
    

    bookTitle.value = "";
    author.value = "";
    pages.value = "";
    raed.checked = false;
}

function createBookDiv() {
    let bookDiv = document.createElement("div");
    bookDiv.id = counter;
    bookDiv.className = "book";
    divBooks(bookDiv);
    document.getElementById("books").appendChild(bookDiv);
    libraryCounter++
    counter++;
    count++;
    if(count > 2){
        count = 0;
    }
}

function divBooks(bookDiv) {
    let auth = document.createElement("div");
    let bookTit = document.createElement("div");
    let pag = document.createElement("div");
    let del = document.createElement("button");
    let read = document.createElement("div");
    let readContainer = document.createElement("div");
    let readButton = document.createElement("button");
    let unreadButton = document.createElement("button");
    
    read.id = "read";
    auth.innerText = "author: " + Library[libraryCounter].nameOfAuthor;
    bookTit.innerText = "Title: " + Library[libraryCounter].nameOfBook;
    pag.innerText = "Pages: " + Library[libraryCounter].pageNumber;
    del.innerText = "delete";
    readButton.innerText = "read";
    unreadButton.innerText = "unread";
    if(Library[libraryCounter].read == true){
        read.innerText = "read";
    }
    else{
        read.innerText = "not read";
    }
    
    del.onclick = removeDiv;
    readButton.onclick = (e) => {
        targetNode = e.target.parentNode.parentNode.querySelector("#read")
        targetNode.innerText = "read";
    }
    unreadButton.onclick = (e) => {
        targetNode = e.target.parentNode.parentNode.querySelector("#read")
        targetNode.innerText = "not read";
    }

    readContainer.appendChild(readButton);
    readContainer.appendChild(unreadButton);

    bookDiv.appendChild(bookTit);
    bookDiv.appendChild(auth);
    bookDiv.appendChild(pag);
    bookDiv.appendChild(del);
    bookDiv.appendChild(read);
    bookDiv.appendChild(readContainer);
}

function removeDiv(e){
    removeBookNumber = e.target.parentNode.id;
        for (let i = 0; i < Library.length; i++){
        if (Library[i].count == removeBookNumber){
            Library.splice(i, 1);
        }
    }
    e.target.parentNode.remove();
    libraryCounter--;
}


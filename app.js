let myLibrary = [];
let id = 0;

class Book{
    constructor(name, author, pages, read) {
        this.name = name;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

function addBookToLibrary(book) {
    myLibrary[myLibrary.length-1] = book;
}

const openForm = document.querySelector('.formButton');
const form = document.querySelector('.bookForm');
const actualForm = document.getElementById('theForm')
const submission = document.querySelector('.submitButton');
let bookName = actualForm.elements['name'];
let bookAuthor = actualForm.elements['author'];
let bookPages = actualForm.elements['pages'];
let bookRead = actualForm.elements['reading'];
//for delete: document.querySelectorAll
let deleteButtons = document.querySelectorAll('.deleter')


openForm.onclick = () => {
    if (form.classList.contains('closed')){
        form.classList.remove('closed');
    } else {
        form.classList.add('closed');
        actualForm.reset();

    }
};

actualForm.addEventListener( "submit", (e) => {
    e.preventDefault();
    let haveRead = bookRead.value;
    console.log(haveRead)
    let thisBook = new Book(bookName, bookAuthor, bookPages, haveRead);
    myLibrary.push(thisBook);
    id += 1;
    addBookToDiv(bookName, bookAuthor, bookPages, haveRead);
    form.classList.add('closed');
    actualForm.reset();
})



function addBookToDiv (currentName, currentAuthor, currentPages, currentRead) {
    const booksDiv = document.querySelector('.bookList')
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('aBook'); 
    bookDiv.setAttribute('data-index',id);
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('bookName'); 
    nameDiv.textContent = 'Book Name: ';
    nameDiv.append(currentName.value);
    //nameDiv.setAttribute('id', id);
    const authorDiv = document.createElement('div');
    authorDiv.classList.add('authorName'); 
    authorDiv.textContent = 'Author: ';
    authorDiv.append(currentAuthor.value);
    //authorDiv.setAttribute('id', id);
    const pagesDiv = document.createElement('div');
    pagesDiv.classList.add('pagesName'); 
    pagesDiv.textContent = 'Pages: ';
    pagesDiv.append(currentPages.value);
    //pagesDiv.setAttribute('id', id);
    const readDiv = document.createElement('div');
    readDiv.classList.add('readName'); 
    readDiv.textContent = 'Status: ';
    readDiv.append(currentRead);
    //readDiv.setAttribute('id', id);
    const deleteDiv = document.createElement('button');
    deleteDiv.textContent = 'delete'
    deleteDiv.classList.add('deleter')
    deleteDiv.setAttribute('id', id)
    deleteDiv.addEventListener('click', (e) => {
        console.log(e)
        //deleteButton.onClick = function(e) {
        let target = e.target.id;
        console.log(target);
        let deletable = document.querySelector(`[data-index="${id}"]`);
        let host = document.querySelector('.bookList')
        host.remove(deletable)
        //use a for each loop to remove them all?
    //};
    });
    //in delete div must have value as the index (length variable right now)

    //From stack overflow:
    //$("#exportValueDiv").text(exportValue); //Replaces text of #exportValueDiv
    //$("#exportValueDiv").html('<span>'+exportValue+'</span>'); //Replaces inner html of #exportValueDiv
    //$("#exportValueDiv").append('<span>'+exportValue+'</span>'); //Adds to the inner html of #exportValueDiv
    bookDiv.appendChild(nameDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);
    bookDiv.appendChild(deleteDiv);
    booksDiv.appendChild(bookDiv);
}


function deleteBook(deleteButton) {
    console.log('gother')
    deleteButton.onClick = function(e) {
        let target = e.target.id;
        console.log(target);
        //querySelectorAll with this id number
        //use a for each loop to remove them all?
    };
}
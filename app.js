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
    id = id + 1;
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
    readDiv.setAttribute('data-change-index',id);
    readDiv.append(currentRead);
    console.log(id);
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
        let deletable = document.querySelector(`[data-index="${target}"]`);
        console.log(deletable);
        let host = document.querySelector('.bookList')
        host.remove(deletable)
        //use a for each loop to remove them all?
    //};
    });

    const changeDiv = document.createElement('button');
    changeDiv.textContent = 'change status';
    changeDiv.classList.add('changer');
    changeDiv.setAttribute('id',id);
    changeDiv.addEventListener('click', (e) => {
        let target = e.target.id;
        let changable = document.querySelector(`[data-change-index="${target}"]`);
        if (changable.textContent == 'Status: read') {
            changable.textContent = 'Status: unread'
        } else {
            changable.textContent = 'Status: read'
        }
    })

    // This change function only changes div, nothing in the array. lol. I don't think we ever add
    // to or use the array


    //From stack overflow:
    //$("#exportValueDiv").text(exportValue); //Replaces text of #exportValueDiv
    //$("#exportValueDiv").html('<span>'+exportValue+'</span>'); //Replaces inner html of #exportValueDiv
    //$("#exportValueDiv").append('<span>'+exportValue+'</span>'); //Adds to the inner html of #exportValueDiv
    bookDiv.appendChild(nameDiv);
    bookDiv.appendChild(authorDiv);
    bookDiv.appendChild(pagesDiv);
    bookDiv.appendChild(readDiv);
    bookDiv.appendChild(deleteDiv);
    bookDiv.appendChild(changeDiv);
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


/*

This is pretty inefficient, in real life you would want to check through the array everytime a new
book is created, because of this:
when a user deletes a book, it goes to the book with the same id or index (id would be easier and 
you should probably add that to the book object if real life) and replace it with "empty" or something
if it's index based, or just delete it if it's id based (another reason id would be good).
Actually doing it ID based is way better than index and just need the book objects to have an id property
so you can just remove it from the array when you delete the div. This also allows you to not care about
the index in the array at all. When you remove something from the webpage, remove the book with that id
from the array. 

one small thing, I have it arranged as rows so the change and delete buttons work out, but if u put them
as boxes, in this javascript dom you need to create a div and put both buttons in that div, and then add
that div to the bookDiv because then you can have them in a row or whatever because you can deal with them
independantly of the other stuff.

*/
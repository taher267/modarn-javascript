//Get the UI Element
let form = document.querySelector('#book-form');
let booklist = document.querySelector('#book-list');

//Book Class
class Book{
    constructor(title, author, isbn ){
        this.title = title;
        this.author = author;
        this.isbn = isbn;
    }
}
//UI Class
class UI{
    static addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a href="#" class="text-danger fa fa-times"></a></td>`;
        list.appendChild(row);
        
        
    }
    static clearFields(){
        
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value='';
    }
    //Alert Message
    static showAlert(message, classname='success'){
        let div = document.createElement('div');
        div.className = `alert alert-${classname}`;
        div.appendChild(document.createTextNode(message));
        let container = document.querySelector('.container');
        let form = document.querySelector('#book-form');

        if(document.querySelector('.container .alert') == null){
            container.insertBefore(div, form);
            if(document.querySelector('.container .alert') !== null){
                setTimeout(() => {
                    document.querySelector('.container .alert').remove();
                }, 2500);
            }
        }   
    }
    //Book list Delete
    static deleteFromBook(target){
        if(target.hasAttribute('href')){
            let ele = target.parentElement;
            ele.parentElement.remove();
            Store.removeBook(ele.previousElementSibling.textContent.trim());
        }
    }

}

//Book Store in local Storage
class Store{
    static getBooks(){
        let books;
        if (localStorage.getItem('books')===null) {
            books =[];
        }else{
            books = JSON.parse(localStorage.getItem('books'));
        }
        return books;
    }
    static addBook(book){
        let books = this.getBooks();
        books.push(book);
        localStorage.setItem('books', JSON.stringify(books));

    }
    static displayBooks() {
        let books = Store.getBooks();
        books.forEach(book =>{
            UI.addToBookList(book);
        });
    }

    static removeBook(isbn) {
        let books = Store.getBooks();
        books.forEach((book, index)=>{
            if(  book.isbn === isbn){
                books.splice(index, 1);
                UI.showAlert("Book has been deleted!");                
            }
        });
        localStorage.setItem('books', JSON.stringify(books));
    }
}
//Add Event Listener

form.addEventListener('submit',newBook);
booklist.addEventListener('click',removeBook);
document.addEventListener('DOMContentLoaded', Store.displayBooks());

//define Function

function newBook(e) {
    let title = document.querySelector('#title').value, author = document.querySelector('#author').value, isbn = document.querySelector('#isbn').value;
    if( !title =="" && !author =="" && !isbn == "" ){
        let book =new Book(title, author, isbn);
        
        UI.addToBookList(book);
        Store.addBook(book);
        UI.clearFields();
        UI.showAlert('Book list has been added succefully');
        
    }else{
        UI.showAlert('Please fill all the fields', 'warning');
    }
    e.preventDefault();
}
function removeBook(e) {
    UI.deleteFromBook(e.target);
    e.preventDefault();
}



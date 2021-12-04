//Get the UI Element
let form = document.querySelector('#book-form');

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
    constructor(){}
    addToBookList(book){
        let list = document.querySelector('#book-list');
        let row = document.createElement('tr');
        row.innerHTML = `
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.isbn}</td>
            <td><a class="text-danger fa fa-times"></a></td>`;
        list.appendChild(row);  
    }
    clearFields(){
        
        document.querySelector('#title').value = '';
        document.querySelector('#author').value = '';
        document.querySelector('#isbn').value='';
    }
}
//Add Event Listener

form.addEventListener('submit',newBook);

//define Function

function newBook(e) {
    let ui = new UI();
    let title = document.querySelector('#title').value, author = document.querySelector('#author').value, isbn = document.querySelector('#isbn').value;
    if( !title =="" && !author =="" && !isbn == "" ){
        let book =new Book(title, author, isbn);
        
        ui.addToBookList(book);
        ui.clearFields();
        
    }else{ alert('Fill up those fields!');}
    e.preventDefault();
}
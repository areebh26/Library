let myLibrary=[];
function Book(title,author,pages,status){
    this.title=title;
    this.author=author;
    this.pages=pages;
    this.status=status;
    this.ID=crypto.randomUUID();
}
function addBookToLibrary(title,author,pages,status){
    let myBook = new Book(title,author,pages,status);
    myLibrary.push(myBook);
}
let addNewBookButton = document.querySelector(".addNewBookButton");
let dialog = document.querySelector("dialog");
addNewBookButton.addEventListener("click",()=>{
    dialog.showModal();
});

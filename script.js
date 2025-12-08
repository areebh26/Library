class Book {
  constructor(title, author, pages, status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.status = status;
  }
  display() {
    let tr = document.createElement("tr");
    tableBody.appendChild(tr);
    let td1 = document.createElement("td");
    td1.innerText = this.title;
    tr.appendChild(td1);
    let td2 = document.createElement("td");
    td2.innerText = this.author;
    tr.appendChild(td2);
    let td3 = document.createElement("td");
    td3.innerText = this.pages;
    tr.appendChild(td3);
    let td4 = document.createElement("td");
    td4.innerText = this.status;
    tr.appendChild(td4);
    let td5 = document.createElement("td");
    tr.appendChild(td5);
    let button1 = document.createElement("button");
    td5.appendChild(button1);
    button1.innerText = "📖";
    button1.classList.add("table-action-button-1");
    button1.setAttribute("title", "Toggle Read Status");
    let button2 = document.createElement("button");
    td5.appendChild(button2);
    button2.innerText = "🗑️";
    button2.classList.add("table-action-button-2");
    button2.setAttribute("title", "Delete Book");
    button1.addEventListener("click", () => {
      if (this.status === "Read") {
        this.status = "Unread";
      } else if (this.status === "Unread") {
        this.status = "Read";
      }
      td4.innerText = this.status;
    });
    button2.addEventListener("click", () => {
      let i = myLibrary.indexOf(this.Book);
      myLibrary.splice(i, 1);
      tableBody.removeChild(tr);
    });
  }
}
function addBookToMyLibraryArray(title, author, pages, status) {
  let myBook = new Book(title, author, pages, status);
  myLibrary.push(myBook);
}
function show() {
  for (let i = 0; i < myLibrary.length; i++) {
    myLibrary[i].display();
  }
}
let addNewBookButton = document.querySelector(".addNewBookButton");
let dialog = document.querySelector("dialog");
let addButtonInDialogBox = document.querySelector("#add-button-in-dialogBox");
let cancelButtonInDialogBox = document.querySelector(
  "#cancel-button-in-dialogBox"
);
let deleteBookButton = document.querySelector(".table-action-button-2");
let toggleBookButton = document.querySelector(".table-action-button-1");
let bookTitle = document.querySelector("#title");
let bookAuthor = document.querySelector("#author");
let bookPages = document.querySelector("#pages");
let bookStatus = document.querySelector("#status");
let tableBody = document.querySelector("tbody");

addNewBookButton.addEventListener("click", () => {
  dialog.showModal();
});
cancelButtonInDialogBox.addEventListener("click", () => {
  dialog.close();
  bookStatus.value = "";
  bookPages.value = "";
  bookAuthor.value = "";
  bookTitle.value = "";
});
addButtonInDialogBox.addEventListener("click", () => {
  addBookToMyLibraryArray(
    bookTitle.value,
    bookAuthor.value,
    bookPages.value,
    bookStatus.value
  );
  tableBody.innerHTML = "";
  show();
  dialog.close();
  bookStatus.value = "";
  bookPages.value = "";
  bookAuthor.value = "";
  bookTitle.value = "";
});
let book1 = new Book("Naruto", "Masashi Kishimoto", 5152, "Read");
let book2 = new Book("Attack on Titan", "Hajime Isayama", 4000, "Read");
let book3 = new Book("Black Clover", "Yūki Tabata", 2000, "Read");

let myLibrary = [book1, book2, book3];
show();

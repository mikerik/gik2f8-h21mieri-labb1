"use strict";

let bookList = [];

window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

function filterBookList(bookList, searchTerm) {
  return bookList.filter(({ title, author }) => {
    return (
      title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      author.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
}

searchField.addEventListener("keyup", (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const filteredBookList = filterBookList(bookList, searchTerm);
  renderBookList(filteredBookList);
});


function renderBookList(bookList) {
  const root = document.getElementById("root");
  const existingElement = document.querySelector(".book-list");

  if (existingElement) {
    root.removeChild(existingElement);
  }

  if (bookList.length === 0 || !searchField.value) {
    return;
  }

  root.insertAdjacentHTML("beforeend", BookList(bookList));
  addEventListeners(bookList);
}

function addEventListeners(bookList) {
  Array.from(document.getElementsByClassName("book-list__item")).forEach(
    (element) => {
      element.addEventListener("mouseover", (e) => {
        const card = createCardElement(e);
        root.insertAdjacentHTML("afterbegin", card);
        const currentBook = getOne(e.target.id);
        currentBook.then((result) => renderBookItem(result));
      });

      element.addEventListener("mouseout", (e) => {
        removeCardElement();
      });
    }
  );
}

function createCardElement(event) {
  const x_pos = event.pageX;
  const y_pos = event.pageY;
  return `<div id="card" class="absolute top-[${y_pos}px] left-[${x_pos}px]"></div>`;
}

function removeCardElement() {
  const card = document.getElementById("card");
  card.remove();
}

function renderBookItem(book) {
  const card = document.getElementById("card");
  const existingElement = document.querySelector(".book-info");
  if (card) {
    existingElement && card.removeChild(existingElement);
    card.insertAdjacentHTML("afterbegin", InfoCard(book));
  }
}

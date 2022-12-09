"use strict";

let bookList = [];
window.addEventListener("load", () => {
  getAll().then((apiBooks) => (bookList = apiBooks));
});

searchField.addEventListener("keyup", (e) =>
  renderBookList(
    bookList.filter(({ title, author }) => {
      const searchTerm = e.target.value.toLowerCase();
      return (
        title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        author.toLowerCase().includes(searchTerm.toLowerCase())
      );
    })
  )
);

function renderBookList(bookList) {
  const existingElement = document.querySelector(".book-list");
  const root = document.getElementById("root");
  existingElement && root.removeChild(existingElement);
  bookList.length > 0 &&
    searchField.value &&
    root.insertAdjacentHTML("beforeend", BookList(bookList));

  Array.from(document.getElementsByClassName("book-list__item")).forEach(
    (element) => {
      element.addEventListener("mouseover", (e) => {
        var e = window.event;
        const x_pos = e.pageX;
        const y_pos = e.pageY;
        const card = `<div id="card" class="absolute top-[${y_pos}px] left-[${x_pos}px]"></div>`;
        root.insertAdjacentHTML("afterbegin", card);

        const currentBook = getOne(e.target.id);
        currentBook.then((result) => renderBookItem(result));
      });

      element.addEventListener("mouseout", (e) => {
        const card = document.getElementById("card");
        card.remove();
      });
    }
  );
}

function renderBookItem(book) {
  const existingElement = document.querySelector(".book-info");
  if (document.getElementById("card")) {
    existingElement &&
      document.getElementById("card").removeChild(existingElement);
    document
      .getElementById("card")
      .insertAdjacentHTML("afterbegin", InfoCard(book));
  }
}

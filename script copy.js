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

  let elements = document.getElementsByClassName("book-list__item");
  for (let i = 0; i < elements.length; i++) {
    elements[i].addEventListener("mouseover", (e) => {
      var e = window.event;
      let x_pos = e.clientX + 30;
      let y_pos = e.clientY - 60;
      const card = `<div id="card" class="position absolute top-500px"  style="position: absolute; top: ${y_pos}px; left: ${x_pos}px; opacity: 0.9;"></div>`;
      root.insertAdjacentHTML("afterbegin", card);

      let currentBook = getOne(e.target.id);
      currentBook.then(function (result) {
        renderBookItem(result);
      });
    });
    elements[i].addEventListener("mouseout", (e) => {
      const card = document.getElementById("card");
      card.remove();
    });
  }
}

function renderBookItem(book) {
  const existingElement = document.querySelector(".book-info");
  const insert = document.getElementById("card");
  if (insert != null) {
    existingElement && insert.removeChild(existingElement);
    let minhtml = InfoCard(book);
    insert.insertAdjacentHTML("afterbegin", minhtml);
  }
}

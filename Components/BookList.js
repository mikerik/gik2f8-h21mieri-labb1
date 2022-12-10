const BookList = (bookList) => {
  let html = `<ul class="ring-4 bg-slate-100 w-1/2 place-self-center rounded-md p-2 mx-auto text-center test book-list">`;
  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem(bookList[i]);
  }
  html += `</ul>`;

  return html;
};

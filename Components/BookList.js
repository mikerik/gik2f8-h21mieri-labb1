const BookList = (bookList) => {
  let html = `<ul class="ring-4 bg-slate-200 w-1/2 place-self-center rounded-md p-2 text-center test book-list mx-auto">`;
  for (let i = 0; i < bookList.length; i++) {
    html += BookListItem(bookList[i]);
  }
  html += `</ul>`;

  return html;
};

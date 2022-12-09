const BookListItem = (book) => {
  let html = `<li
                class="book-list__item ring-4 bg-slate-400 p-3 m-3 rounded-md hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/40 transition delay-100 ease-in-out cursor-pointer" id="${book.id}">
                ${book.author} - ${book.title} 
              </li>`;
  return html;
};

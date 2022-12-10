const InfoCard = (book) => {
  // Create the HTML for an info card
  let html = `
    <div
      class="info-card rounded-[1rem] overflow-hidden text-white bg-cover pt-[10rem] pb-0 pl-0 pr-0 max-w-[35ch]"
      style="background-image: url('${book.coverImage}'), linear-gradient(to bottom right, indigo, black)"
    >
      <div
        class="card-content p-[1.5rem] bg-gradient-to-t from-black via-black/80 to-black/0"
      >
        <h2
          class="font-black uppercase tracking-widest card-title relative w-max after:absolute after:h-[4px] after:left-0 after:bottom-0 after:w-full after:bg-green-300"
        >
          ${book.title}
        </h2>
        <p
          class="card-body text-white/85 pt-[0.5rem] pb-[0.5rem]"
        >
          ${book.title} was written by ${book.author} in ${book.releaseDate}.
        </p>
        <div
          class="button cursor-pointer inline-block no-underline text-black bg-green-300 py-[0.5em] px-[1.5em]"
        >
          Length: ${book.pages} pages
        </div>
      </div>
    </div>
  `;

  // Return the HTML for the info card
  return html;
};

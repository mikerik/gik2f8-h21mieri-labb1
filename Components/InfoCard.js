const InfoCard = (book) => {
  let html = `
              <div class="info-card"> 
                <div class="rounded-md border-2 border-black bg-gray-400 w-full mx-auto w-60">
                 <div class="p-3">
                  <img src= "${book.coverImage}"/>
                    <div>----------------------------------</div>
                      <div>Author: ${book.author}</div>
                        <div>Title: ${book.title}</div>
                          <div>Pages: ${book.pages}</div>
                            <div>Release Date: ${book.releaseDate}</span>
                          <div>
                        <div>
                      </div> 
                    </div>
                  </div>
                  </div>
              </div>`;
  return html;
};

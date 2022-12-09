const BookPopup = (popup) => {
  let html = `<div class="popup">
      <div className="popup__content">
        <div className="popup__left">
          <img src={book.image} alt={book.title} className="popup__img" />

          <h2 className="heading-secondary u-margin-bottom-small">
            {book.title}
          </h2>
          <h3 className="heading-tertiary u-margin-bottom-small">
            {book.author}
          </h3>
          <p className="popup__text">{book.description}</p>
        </div>
        <div className="popup__right">
          <a href="#section-tours" className="btn btn--green">
            Book now!
          </a>
        </div>
      </div>
      <a href="#section-tours" className="popup__close">
        &times;
      </a>
    </div>`;
  return html;
};

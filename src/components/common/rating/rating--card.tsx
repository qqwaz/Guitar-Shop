

function RatingCard() {
  return (
    <div className="rate product-card__rate" aria-hidden="true">
      <span className="visually-hidden">Рейтинг:</span>
      <svg width="12" height="11" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="12" height="11" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="12" height="11" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="12" height="11" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="12" height="11" aria-hidden="true">
        <use xlinkHref="#icon-star"></use>
      </svg>
      <span className="rate__count">9</span>
      <span className="rate__message"></span>
    </div>
  );
}

export default RatingCard;

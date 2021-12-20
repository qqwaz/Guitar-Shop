

function RatingComment() {
  return (
    <div className="rate review__rating-panel" aria-hidden="true">
      <span className="visually-hidden">Рейтинг:</span>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-full-star"></use>
      </svg>
      <svg width="16" height="16" aria-hidden="true">
        <use xlinkHref="#icon-star"></use>
      </svg>
      <span className="rate__count"></span>
      <span className="rate__message"></span>
    </div>
  );
}

export default RatingComment;

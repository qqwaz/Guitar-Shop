import { MAX_RATING_VALUE, RatingComponentVariant } from '../../../const';

type RatingProps = {
  variant: RatingComponentVariant,
  rating: number,
  comments?: number,
};

const Param = {
  [RatingComponentVariant.Card]: {
    class: 'rate product-card__rate',
    width: 12,
    height: 11,
  },
  [RatingComponentVariant.Comment]: {
    class: 'rate review__rating-panel',
    width: 16,
    height: 16,
  },
  [RatingComponentVariant.Product]: {
    class: 'rate product-container__rating',
    width: 14,
    height: 14,
  },
};

function Rating(props: RatingProps) {
  const {
    variant,
    rating,
    comments,
  } = props;

  const roundedRating = Math.round(rating);

  const stars = Array.from({ length: MAX_RATING_VALUE }, (_, i) => i)
    .map((rate) => (
      <svg key={`star-${rate}`} width={Param[variant].width} height={Param[variant].height} aria-hidden="true">
        <use xlinkHref={rate < roundedRating ? '#icon-full-star' : '#icon-star'}></use>
      </svg>
    ));

  return (
    <div className={Param[variant].class} aria-hidden="true">
      <span className="visually-hidden">Рейтинг:</span>
      {stars}
      <span className="rate__count">{comments || ''}</span>
      <span className="rate__message"></span>
    </div>
  );
}

export default Rating;

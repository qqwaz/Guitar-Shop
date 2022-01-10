import { RatingComponentVariant } from '../../../const';
import { formatPrice } from '../../../services/utils';
import { ProductType } from '../../../types/product-type';
import Rating from '../../common/rating/rating';

type CardProps = {
  item: ProductType,
}

function Card(props: CardProps) {
  const {
    item,
  } = props;

  return (
    <div className="product-card">
      <img src={item.previewImg} width="75" height="190" alt={item.name} />
      <div className="product-card__info">
        <Rating variant={RatingComponentVariant.Card} rating={item.rating} comments={item.comments.length} />
        <p className="product-card__title">{item.name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {formatPrice(item.price)}
        </p>
      </div>
      <div className="product-card__buttons">
        <a className="button button--mini" href="#">Подробнее</a>
        <a className="button button--red button--mini button--add-to-cart" href="#">Купить</a>
      </div>
    </div>
  );
}

export default Card;

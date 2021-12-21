import { GuitarType } from '../../../types/guitar-type';
import RatingCard from '../../common/rating/rating--card';

type CardProps = {
  item: GuitarType,
}

function Card(props: CardProps) {
  const {
    item,
  } = props;

  return (
    <div className="product-card">
      <img src={item.previewImg} width="75" height="190" alt={item.name} />
      <div className="product-card__info">
        <RatingCard />
        <p className="product-card__title">{item.name}</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          {item.price}
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

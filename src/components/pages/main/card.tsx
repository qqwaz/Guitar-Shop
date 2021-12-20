import RatingCard from '../../common/rating/rating--card';

function Card() {
  return (
    <div className="product-card">
      <img src="img/content/guitar-2.jpg" width="75" height="190" alt="СURT Z30 Plus Acoustics" />
      <div className="product-card__info">
        <RatingCard />
        <p className="product-card__title">СURT Z30 Plus Acoustics</p>
        <p className="product-card__price">
          <span className="visually-hidden">Цена:</span>
          129 500 ₽
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

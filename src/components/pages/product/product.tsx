import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppRoute, RatingComponentVariant } from '../../../const';
import { formatPrice } from '../../../services/utils';
import { fetchProductAction } from '../../../store/api-actions';
import { getIsWaitingSelector, getProductSelector } from '../../../store/selectors';
import Rating from '../../common/rating/rating';
import Waiting from '../../common/waiting/waiting';
import Review from './review';

function Product() {
  const dispatch = useDispatch();
  const { id } = useParams<{id: string}>();
  const product = useSelector(getProductSelector);
  const isWaiting = useSelector(getIsWaitingSelector);

  useEffect(() => {
    dispatch(fetchProductAction(id));
  }, [dispatch, id]);

  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">Товар</h1>
        <ul className="breadcrumbs page-content__breadcrumbs">
          <li className="breadcrumbs__item">
            <Link className="link" to={AppRoute.Main}>Главная</Link>
          </li>
          <li className="breadcrumbs__item">
            <Link className="link" to={AppRoute.Main}>Каталог</Link>
          </li>
          <li className="breadcrumbs__item">
            <button className="link">Товар</button>
          </li>
        </ul>
        {isWaiting || !product
          ? <Waiting />
          : (
            <>
              <div className="product-container">
                <img className="product-container__img" src={product.previewImg} width="90" height="235" alt={product.name} />
                <div className="product-container__info-wrapper">
                  <h2 className="product-container__title title title--big title--uppercase">{product.name}</h2>
                  <Rating variant={RatingComponentVariant.Product} rating={product.rating} />
                  <div className="tabs">
                    <a className="button button--medium tabs__button" href="#characteristics">Характеристики</a>
                    <a className="button button--black-border button--medium tabs__button" href="#description">Описание</a>
                    <div className="tabs__content" id="characteristics">
                      <table className="tabs__table">
                        <tbody>
                          <tr className="tabs__table-row">
                            <td className="tabs__title">Артикул:</td>
                            <td className="tabs__value">{product.vendorCode}</td>
                          </tr>
                          <tr className="tabs__table-row">
                            <td className="tabs__title">Тип:</td>
                            <td className="tabs__value">Электрогитара</td>
                          </tr>
                          <tr className="tabs__table-row">
                            <td className="tabs__title">Количество струн:</td>
                            <td className="tabs__value">6 струнная</td>
                          </tr>
                        </tbody>
                      </table>
                      <p className="tabs__product-description hidden">
                        {product.description}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="product-container__price-wrapper">
                  <p className="product-container__price-info product-container__price-info--title">Цена:</p>
                  <p className="product-container__price-info product-container__price-info--value">{formatPrice(product.price)}</p>
                  <a className="button button--red button--big product-container__button" href="#">Добавить в корзину</a>
                </div>
              </div>
              <section className="reviews">
                <h3 className="reviews__title title title--bigger">Отзывы</h3>
                <a className="button button--red-border button--big reviews__sumbit-button" href="#">Оставить отзыв</a>

                {[...new Array(4)].map((_, i) => i).map((x) => <Review key={x} />)}

                <button className="button button--medium reviews__more-button">Показать еще отзывы</button>
                <a className="button button--up button--red-border button--big reviews__up-button" href="#header">Наверх</a>
              </section>
            </>
          )}
      </div>
    </main>
  );
}

export default Product;

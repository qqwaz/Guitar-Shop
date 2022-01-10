import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { fetchCatalogAction } from '../../../store/api-actions';
import {
  getCatalogSelector,
  getIsRefreshNeededSelector,
  getIsWaitingSelector
} from '../../../store/selectors';
import Waiting from '../../common/waiting/waiting';
import Card from './card';
import Filter from './filter';
import Pagination from './pagination';
import Sorting from './sorting';

function Catalog() {
  const dispatch = useDispatch();

  const products = useSelector(getCatalogSelector);
  const isRefreshNeeded = useSelector(getIsRefreshNeededSelector);

  const isWaiting = useSelector(getIsWaitingSelector);

  useEffect(() => {
    dispatch(fetchCatalogAction());
  }, [dispatch, isRefreshNeeded ]);

  return (
    <main className="page-content">
      <div className="container">
        <h1 className="page-content__title title title--bigger">Каталог гитар</h1>
        <ul className="breadcrumbs page-content__breadcrumbs">
          <li className="breadcrumbs__item">
            <Link className="link" to={AppRoute.Main}>Главная</Link>
          </li>
          <li className="breadcrumbs__item">
            <a className="link">Каталог</a>
          </li>
        </ul>
        <div className="catalog">
          <Filter />
          <Sorting />
          <div className="cards catalog__cards">

            {isWaiting
              ? <Waiting />
              : products.map((product) => <Card key={product.id} item={product}/>)}

          </div>
          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default Catalog;

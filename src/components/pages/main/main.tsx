import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { fetchCatalog } from '../../../store/api-actions';
import { getCatalogSelector, getIsWaitingSelector } from '../../../store/main/selectors';
import Waiting from '../../common/waiting/waiting';
import Card from './card';
import Filter from './filter';
import Pagination from './pagination';
import Sorting from './sorting';

function Main() {
  const dispatch = useDispatch();

  const items = useSelector(getCatalogSelector);
  const isWaiting = useSelector(getIsWaitingSelector);

  useEffect(() => {
    dispatch(fetchCatalog());
  }, [dispatch]);

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
              : items.map((item) => <Card key={item.id} item={item}/>)}

          </div>
          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default Main;

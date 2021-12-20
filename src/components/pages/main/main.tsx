import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import Card from './card';
import Filter from './filter';
import Pagination from './pagination';
import Sorting from './sorting';

function Main() {
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

            {[...new Array(9)].map((_, i) => i).map((x) => <Card key={x} />)}

          </div>
          <Pagination />
        </div>
      </div>
    </main>
  );
}

export default Main;

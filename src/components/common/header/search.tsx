import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../../const';
import { setNameAction } from '../../../store/actions';
import { fetchCatalog } from '../../../store/api-actions';
import { getCatalogSelector, getNameSelector } from '../../../store/main/selectors';

function Search() {
  const dispatch = useDispatch();
  const name = useSelector(getNameSelector);
  const items = useSelector(getCatalogSelector);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(setNameAction(evt.target.value));
    dispatch(fetchCatalog());
  };

  return (
    <div className="form-search">
      <form className="form-search__form">
        <button className="form-search__submit" type="submit">
          <svg className="form-search__icon" width="14" height="15" aria-hidden="true">
            <use xlinkHref="#icon-search"></use>
          </svg><span className="visually-hidden">Начать поиск</span>
        </button>
        <input className="form-search__input" id="search" type="text" autoComplete="off" placeholder="что вы ищите?"
          value={`${name}`}
          onChange={handleChange}
        />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className={`form-search__select-list ${items.length && 'hidden'} `}>

        {items.map((item) => (
          <Link key={item.id} to={AppRoute.Product.replace(':product_id', item.id.toString())}>
            <li className="form-search__select-item" tabIndex={0}>
              {item.name}
            </li>
          </Link>
        ))}


      </ul>
    </div>
  );
}

export default Search;

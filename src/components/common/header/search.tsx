import { ChangeEvent, SyntheticEvent, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { appRouteToProduct } from '../../../services/utils';
import { fetchSearchResultAction } from '../../../store/api-actions';
import { getSearchResultSelector } from '../../../store/selectors';

function Search() {
  const history = useHistory();
  const dispatch = useDispatch();
  const items = useSelector(getSearchResultSelector);
  const [mask, setMask] = useState('');

  useEffect(() => {
    dispatch(fetchSearchResultAction(mask));
  }, [dispatch, mask]);

  const handleChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMask(evt.target.value);
  };

  const handleClick = (evt: SyntheticEvent) => {
    evt.preventDefault();
    const id = (evt.target as HTMLLIElement).dataset.id;
    if (id) {
      setMask('');
      history.push(appRouteToProduct(id));
    }
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
          value={mask}
          onChange={handleChange}
        />
        <label className="visually-hidden" htmlFor="search">Поиск</label>
      </form>
      <ul className={`form-search__select-list ${!items.length ? 'hidden' : ''} `} style={{zIndex: 1}} onClick={handleClick}>
        {items.map((item) => (
          <li key={item.id} className="form-search__select-item" tabIndex={0} data-id={item.id} >
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Search;

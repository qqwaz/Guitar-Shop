import { ChangeEvent, useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import useDebounce from '../../../hooks/useDebounce';
import { setFilterMaxPriceAction, setFilterMinPriceAction } from '../../../store/actions';
import { getFilterMaxPriceSelector, getFilterMinPriceSelector, getPriceBoundsSelector } from '../../../store/selectors';
import { useLocation, useHistory } from 'react-router-dom';
import { QueryParam } from '../../../const';

function FilterPrice() {
  const dispatch = useDispatch();
  const location = useLocation();
  const history = useHistory();

  const [minAllowedPrice, maxAllowedPrice] = useSelector(getPriceBoundsSelector);
  const filterMinPrice = useSelector(getFilterMinPriceSelector);
  const filterMaxPrice = useSelector(getFilterMaxPriceSelector);

  const [minPrice, setMinPrice] = useState('');
  const debouncedMinPrice = useDebounce(minPrice);
  const [maxPrice, setMaxPrice] = useState('');
  const debouncedMaxPrice = useDebounce(maxPrice);

  useEffect(() => {
    const query = new URLSearchParams(location.search);
    const queryMinPrice = query.get(QueryParam.MinPrice) || '';
    const queryMaxPrice = query.get(QueryParam.MaxPrice) || '';
    if (filterMinPrice !== queryMinPrice) {
      dispatch(setFilterMinPriceAction(queryMinPrice));
    }
    if (filterMaxPrice !== queryMaxPrice) {
      dispatch(setFilterMaxPriceAction(queryMaxPrice));
    }
  });

  useEffect(() => {
    if (filterMinPrice !== debouncedMinPrice) {
      dispatch(setFilterMinPriceAction(debouncedMinPrice));
    }
    if (filterMaxPrice !== debouncedMaxPrice) {
      dispatch(setFilterMaxPriceAction(debouncedMaxPrice));
    }
  }, [dispatch, debouncedMinPrice, debouncedMaxPrice, filterMinPrice, filterMaxPrice]);

  useEffect(() => {
    setMinPrice(filterMinPrice);
    setMaxPrice(filterMaxPrice);
    const query = new URLSearchParams(location.search);
    if (filterMinPrice === '') {
      query.delete(QueryParam.MinPrice);
    } else {
      query.set(QueryParam.MinPrice, filterMinPrice);
    }
    if (filterMinPrice === '') {
      query.delete(QueryParam.MaxPrice);
    } else {
      query.set(QueryParam.MaxPrice, filterMinPrice);
    }
    history.replace({ search: query.toString()});
  }, [dispatch, filterMinPrice, filterMaxPrice, location.search, history]);

  const handleMinPriceInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMinPrice(evt.target.value);
  };

  const handleMaxPriceInputChange = (evt: ChangeEvent<HTMLInputElement>) => {
    setMaxPrice(evt.target.value);
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Цена, ₽</legend>
      <div className="catalog-filter__price-range">

        <div className="form-input">
          <label className="visually-hidden">Минимальная цена</label>
          <input type='number' id="priceMin" name="от" min='0'
            placeholder={minAllowedPrice.toString()}
            value={minPrice}
            onChange={handleMinPriceInputChange}
          />
        </div>

        <div className="form-input">
          <label className="visually-hidden">Максимальная цена</label>
          <input type='number' id="priceMax" name="до" min='0'
            placeholder={maxAllowedPrice.toString()}
            value={maxPrice}
            onChange={handleMaxPriceInputChange}
          />
        </div>

      </div>
    </fieldset>
  );
}

export default FilterPrice;

import { ChangeEvent } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { FilterGuitarStrings } from '../../../const';
import { updateFilterStringsAction } from '../../../store/actions';
import { getAvailableStringsSelector, getFilterStringsSelector } from '../../../store/selectors';

function FilterStrings() {
  const dispatch = useDispatch();
  const filteredStrings = useSelector(getFilterStringsSelector);
  const availableStrings = useSelector(getAvailableStringsSelector);

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilterStringsAction(evt.target.dataset.id as FilterGuitarStrings));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Количество струн</legend>

      {Object.entries(FilterGuitarStrings).map(([key, value]) => (
        <div key={key} className="form-checkbox catalog-filter__block-item">
          <input
            className="visually-hidden"
            type="checkbox"
            id={`${value}-strings`}
            name={`${value}-strings`}
            checked={filteredStrings.includes(value)}
            onChange={handleCheckboxChange}
            data-id={value}
            disabled={!availableStrings.includes(value)}
          />
          <label htmlFor={`${value}-strings`}>{value}</label>
        </div>
      ))}

    </fieldset>
  );
}

export default FilterStrings;

import { useDispatch, useSelector } from 'react-redux';
import { getFilterTypeSelector } from '../../../store/selectors';
import { FilterGuitarType, GuitarProps} from '../../../const';
import { ChangeEvent } from 'react';
import { updateFilterTypeAction } from '../../../store/actions';

function FilterType() {
  const dispatch = useDispatch();
  const filteredTypes = useSelector(getFilterTypeSelector);

  const handleCheckboxChange = (evt: ChangeEvent<HTMLInputElement>) => {
    dispatch(updateFilterTypeAction(evt.target.dataset.id as FilterGuitarType));
  };

  return (
    <fieldset className="catalog-filter__block">
      <legend className="catalog-filter__block-title">Тип гитар</legend>

      {Object.keys(FilterGuitarType).map((type) => (
        <div key={type} className="form-checkbox catalog-filter__block-item">
          <input
            className="visually-hidden"
            type="checkbox"
            id={GuitarProps[type as FilterGuitarType].type}
            name={GuitarProps[type as FilterGuitarType].type}
            checked={filteredTypes.includes(type as FilterGuitarType)}
            onChange={handleCheckboxChange}
            data-id={type}
          />
          <label htmlFor={GuitarProps[type as FilterGuitarType].type}>
            {GuitarProps[type as FilterGuitarType].label}
          </label>
        </div>
      ))}

    </fieldset>
  );
}

export default FilterType;

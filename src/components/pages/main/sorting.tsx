import { useDispatch, useSelector } from 'react-redux';
import { SortingDirection, SortingType } from '../../../const';
import { setSortingDirectionAction, setSortingTypeAction } from '../../../store/actions';
import { getSortingDirectionSelector, getSortingTypeSelector } from '../../../store/selectors';

function Sorting() {
  const dispatch = useDispatch();
  const sortingType = useSelector(getSortingTypeSelector);
  const sortingDirection = useSelector(getSortingDirectionSelector);

  const handlePriceClick = () => {
    if (sortingDirection === SortingDirection.Unset) {
      dispatch(setSortingDirectionAction(SortingDirection.Asc));
    }
    dispatch(setSortingTypeAction(SortingType.Price));
  };

  const handleRatingClick = () => {
    if (sortingDirection === SortingDirection.Unset) {
      dispatch(setSortingDirectionAction(SortingDirection.Asc));
    }
    dispatch(setSortingTypeAction(SortingType.Rating));
  };

  const handleAscClick = () => {
    if (sortingType === SortingType.Unset) {
      dispatch(setSortingTypeAction(SortingType.Price));
    }
    dispatch(setSortingDirectionAction(SortingDirection.Asc));
  };

  const handleDescClick = () => {
    if (sortingType === SortingType.Unset) {
      dispatch(setSortingTypeAction(SortingType.Price));
    }
    dispatch(setSortingDirectionAction(SortingDirection.Desc));
  };

  return (
    <div className="catalog-sort">
      <h2 className="catalog-sort__title">Сортировать:</h2>
      <div className="catalog-sort__type">
        <button
          className={`catalog-sort__type-button ${sortingType === SortingType.Price ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по цене"
          tabIndex={-1}
          onClick={handlePriceClick}
        >
          по цене
        </button>
        <button
          className={`catalog-sort__type-button ${sortingType === SortingType.Rating ? 'catalog-sort__type-button--active' : ''}`}
          aria-label="по популярности"
          onClick={handleRatingClick}
        >
          по популярности
        </button>
      </div>
      <div className="catalog-sort__order">
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--up ${sortingDirection === SortingDirection.Asc ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По возрастанию"
          tabIndex={-1}
          onClick={handleAscClick}
        >
        </button>
        <button
          className={`catalog-sort__order-button catalog-sort__order-button--down ${sortingDirection === SortingDirection.Desc ? 'catalog-sort__order-button--active' : ''}`}
          aria-label="По убыванию"
          onClick={handleDescClick}
        >
        </button>
      </div>
    </div>
  );
}

export default Sorting;

import FilterPrice from './filter-price';
import FilterType from './filter-type';
import FilterStrings from './filter-strings';

function Filter() {
  return (
    <form className="catalog-filter">
      <h2 className="title title--bigger catalog-filter__title">Фильтр</h2>
      <FilterPrice />
      <FilterType />
      <FilterStrings />
    </form>
  );
}

export default Filter;

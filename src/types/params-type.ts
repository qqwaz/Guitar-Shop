import { SortingDirection, FilterGuitarStrings, FilterGuitarType, SortingType } from '../const';

export type ParamsType = {
  name: string,
  type: FilterGuitarType,
  strings: FilterGuitarStrings,
  sorting: SortingType,
  direction: SortingDirection,
  minPrice: number,
  maxPrice: number,
}

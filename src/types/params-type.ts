import { SortingDirection, GuitarStringsParam, GuitarTypeParam, SortingType } from '../const';

export type ParamsType = {
  name: string,
  type: GuitarTypeParam,
  strings: GuitarStringsParam,
  sorting: SortingType,
  direction: SortingDirection,
  minPrice: number,
  maxPrice: number,
}

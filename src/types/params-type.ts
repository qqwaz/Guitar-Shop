import { DirectionParam, GuitarStringsParam, GuitarTypeParam, SortingParam } from '../const';

export type ParamsType = {
  name: string,
  type: GuitarTypeParam,
  strings: GuitarStringsParam,
  sorting: SortingParam,
  direction: DirectionParam,
  minPrice: number,
  maxPrice: number,
}

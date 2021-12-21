import { DirectionParam, GuitarStringsParam, GuitarTypeParam, SortingParam } from '../const';
import { GuitarType } from './guitar-type';

export type MainStateType = {
  products: GuitarType[],
  name: string,
  type: GuitarTypeParam[],
  strings: GuitarStringsParam[],
  sorting: SortingParam[],
  direction: DirectionParam[],
  minPrice: number,
  maxPrice: number,
  isWaiting: boolean,
}

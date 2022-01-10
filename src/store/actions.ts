import { createAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { RootState } from './root-reducer';
import { ProductType } from '../types/product-type';
import { SearchItemType } from '../types/search-item-type';
import { FilterGuitarStrings, FilterGuitarType, SortingDirection, SortingType } from '../const';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;

export enum ActionType {
  WaitServer = 'WaitServer',
  LoadSearchResult = 'LoadSearchResult',
  LoadCatalog = 'LoadCatalog',
  LoadProduct = 'LoadProduct',
  SetSortingType = 'SetSortingType',
  SetSortingDirection = 'SetSortingDirection',
  SetFilterMinPrice = 'SetFilterMinPrice',
  SetFilterMaxPrice = 'SetFilterMaxPrice',
  SetPriceBoundsAction = 'SetPriceBoundsAction',
  SetTotalCount = 'SetTotalCount',
  UpdateFilterType = 'UpdateFilterType',
  UpdateFilterStrings = 'UpdateFilterStrings',
}

export const waitServerAction = createAction(
  ActionType.WaitServer,
  (status: boolean) => ({
    payload: status,
  }),
);

export const loadSearchResultAction = createAction(
  ActionType.LoadSearchResult,
  (items: SearchItemType[]) => ({
    payload: items,
  }),
);

export const loadCatalogAction = createAction(
  ActionType.LoadCatalog,
  (products: ProductType[]) => ({
    payload: products,
  }),
);

export const loadProductAction = createAction(
  ActionType.LoadProduct,
  (product: ProductType) => ({
    payload: product,
  }),
);

export const setSortingTypeAction = createAction(
  ActionType.SetSortingType,
  (type: SortingType) => ({
    payload: type,
  }),
);

export const setSortingDirectionAction = createAction(
  ActionType.SetSortingDirection,
  (direction: SortingDirection) => ({
    payload: direction,
  }),
);

export const setFilterMinPriceAction = createAction(
  ActionType.SetFilterMinPrice,
  (value: string) => ({
    payload: value,
  }),
);

export const setFilterMaxPriceAction = createAction(
  ActionType.SetFilterMaxPrice,
  (value: string) => ({
    payload: value,
  }),
);

export const setPriceBoundsAction = createAction(
  ActionType.SetPriceBoundsAction,
  (value: [number, number]) => ({
    payload: value,
  }),
);

export const setTotalCountAction = createAction(
  ActionType.SetTotalCount,
  (count: number) => ({
    payload: count,
  }),
);

export const updateFilterTypeAction = createAction(
  ActionType.UpdateFilterType,
  (type: FilterGuitarType) => ({
    payload: type,
  }),
);

export const updateFilterStringsAction = createAction(
  ActionType.UpdateFilterStrings,
  (strings: FilterGuitarStrings) => ({
    payload: strings,
  }),
);



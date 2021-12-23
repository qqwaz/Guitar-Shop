import { createAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { RootState } from './root-reducer';
import { GuitarType } from '../types/guitar-type';
import { SearchItemType } from '../types/search-item-type';
import { SortingDirection, SortingType } from '../const';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;

export enum ActionType {
  WaitServer = 'WaitServer',
  LoadSearchResult = 'LoadSearchResult',
  LoadCatalog = 'LoadCatalog',
  LoadProduct = 'LoadProduct',
  SetSortingType = 'SetSortingType',
  SetSortingDirection = 'SetSortingDirection',
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
  (products: GuitarType[]) => ({
    payload: products,
  }),
);

export const loadProductAction = createAction(
  ActionType.LoadProduct,
  (product: GuitarType) => ({
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


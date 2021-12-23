import { createReducer } from '@reduxjs/toolkit';
import { SortingDirection, SortingType } from '../../const';
import { GuitarType } from '../../types/guitar-type';
import { loadCatalogAction, setSortingDirectionAction, setSortingTypeAction } from '../actions';

export type CatalogStateType = {
  products: GuitarType[],
  isRefreshNeeded: boolean,
  sortingType: SortingType,
  sortingDirection: SortingDirection,
}

const initialState: CatalogStateType = {
  products: [],
  isRefreshNeeded: true,
  sortingType: SortingType.Unset,
  sortingDirection: SortingDirection.Unset,
};

export const catalog = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCatalogAction, (state, action) => {
      state.products = action.payload;
      state.isRefreshNeeded = false;
    })
    .addCase(setSortingTypeAction, (state, action) => {
      state.sortingType = action.payload;
      state.isRefreshNeeded = true;
    })
    .addCase(setSortingDirectionAction, (state, action) => {
      state.sortingDirection = action.payload;
      state.isRefreshNeeded = true;
    });
});


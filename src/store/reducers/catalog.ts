import { createReducer } from '@reduxjs/toolkit';
import { FilterGuitarStrings, FilterGuitarType, GuitarProps, SortingDirection, SortingType } from '../../const';
import {
  loadCatalogAction,
  setFilterMaxPriceAction,
  setFilterMinPriceAction,
  setPriceBoundsAction,
  setSortingDirectionAction,
  setSortingTypeAction,
  setTotalCountAction,
  updateFilterStringsAction,
  updateFilterTypeAction
} from '../actions';
import { ProductType } from '../../types/product-type';
import { getBoundedValue } from '../../services/utils';

export type CatalogStateType = {
  isRefreshNeeded: boolean,
  products: ProductType[],
  allowedMinPrice: number,
  allowedMaxPrice: number,
  sortingType: SortingType,
  sortingDirection: SortingDirection,
  filterMinPrice: string,
  filterMaxPrice: string,
  filterType: FilterGuitarType[],
  filterStrings: FilterGuitarStrings[],
  availableStrings: FilterGuitarStrings[],
  page: number,
  totalCount: number,
}

const initialState: CatalogStateType = {
  isRefreshNeeded: true,
  allowedMinPrice: 0,
  allowedMaxPrice: 0,
  products: [],
  sortingType: SortingType.Undefined,
  sortingDirection: SortingDirection.Undefined,
  filterMinPrice: '',
  filterMaxPrice: '',
  filterType: [],
  filterStrings: [],
  availableStrings: Object.values(GuitarProps)
    .flatMap((type) => type.strings)
    .filter((x, i, a) => i === a.indexOf(x)),
  page: 0,
  totalCount: 0,
};

export const catalog = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCatalogAction, (state, action) => {
      state.products = action.payload;
      state.isRefreshNeeded = false;
    })

    .addCase(setPriceBoundsAction, (state, action) => {
      [state.allowedMinPrice, state.allowedMaxPrice] = action.payload;
    })

    .addCase(setTotalCountAction, (state, action) => {
      state.totalCount = action.payload;
    })

    .addCase(setSortingTypeAction, (state, action) => {
      state.sortingType = action.payload;
      if (state.sortingDirection === SortingDirection.Undefined) {
        state.sortingDirection = SortingDirection.Asc;
      }
      state.isRefreshNeeded = true;
    })

    .addCase(setSortingDirectionAction, (state, action) => {
      state.sortingDirection = action.payload;
      if (state.sortingType === SortingType.Undefined) {
        state.sortingType = SortingType.Price;
      }
      state.isRefreshNeeded = true;
    })

    .addCase(setFilterMinPriceAction, (state, action) => {
      state.filterMinPrice = getBoundedValue(action.payload, state.allowedMinPrice, state.allowedMaxPrice);
      if (Number.parseInt(state.filterMinPrice, 10) > Number.parseInt(state.filterMaxPrice, 10)) {
        state.filterMaxPrice = state.filterMinPrice;
      }
      state.isRefreshNeeded = true;
    })

    .addCase(setFilterMaxPriceAction, (state, action) => {
      state.filterMaxPrice = getBoundedValue(action.payload, state.allowedMinPrice, state.allowedMaxPrice);
      if (Number.parseInt(state.filterMaxPrice, 10) < Number.parseInt(state.filterMinPrice, 10)) {
        state.filterMinPrice = state.filterMaxPrice;
      }
      state.isRefreshNeeded = true;
    })

    .addCase(updateFilterTypeAction, (state, action) => {
      const index = state.filterType.indexOf(action.payload);
      if (index === -1) {
        state.filterType.push(action.payload);
      } else {
        state.filterType.splice(index, 1);
      }
      if (state.filterType.length === 0) {
        state.availableStrings = Object.values(GuitarProps)
          .flatMap((type) => type.strings)
          .filter((x, i, a) => i === a.indexOf(x));
      } else {
        state.availableStrings = state.filterType
          .flatMap((type) => GuitarProps[type].strings)
          .filter((x, i, a) => i === a.indexOf(x));
      }
      state.filterStrings = state.filterStrings
        .filter((strings) => state.availableStrings.includes(strings));
      state.isRefreshNeeded = true;
    })

    .addCase(updateFilterStringsAction, (state, action) => {
      const index = state.filterStrings.indexOf(action.payload);
      if (index === -1) {
        state.filterStrings.push(action.payload);
      } else {
        state.filterStrings.splice(index, 1);
      }
      state.isRefreshNeeded = true;
    });

});


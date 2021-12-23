import { createReducer } from '@reduxjs/toolkit';
import { GuitarType } from '../../types/guitar-type';
import { loadCatalogAction } from '../actions';

export type CatalogStateType = {
  products: GuitarType[],
}

const initialState: CatalogStateType = {
  products: [],
};

export const catalog = createReducer(initialState, (builder) => {
  builder
    .addCase(loadCatalogAction, (state, action) => {
      state.products = action.payload;
    });
});


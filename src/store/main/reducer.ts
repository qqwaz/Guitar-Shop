import { createReducer } from '@reduxjs/toolkit';
import { MainStateType } from '../../types/main-state-type';
import { loadCatalogAction, setNameAction, waitServer } from '../actions';

const initialState: MainStateType = {
  products: [],
  name: '',
  type: [],
  strings: [],
  sorting: [],
  direction: [],
  minPrice: 0,
  maxPrice: 0,
  isWaiting: false,
};

export const main = createReducer(initialState, (builder) => {
  builder
    .addCase(waitServer, (state, action) => {
      state.isWaiting = action.payload;
    })
    .addCase(setNameAction, (state, action) => {
      state.name = action.payload;
    })
    .addCase(loadCatalogAction, (state, action) => {
      state.products = action.payload;
    });
});


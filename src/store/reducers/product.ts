import { createReducer } from '@reduxjs/toolkit';
import { GuitarType } from '../../types/guitar-type';
import { loadProductAction } from '../actions';

export type ProductStateType = {
  product: GuitarType | undefined,
}

const initialState: ProductStateType = {
  product: undefined,
};

export const product = createReducer(initialState, (builder) => {
  builder
    .addCase(loadProductAction, (state, action) => {
      state.product = action.payload;
    });
});


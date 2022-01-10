import { createReducer } from '@reduxjs/toolkit';
import { ProductType } from '../../types/product-type';
import { loadProductAction } from '../actions';

export type ProductStateType = {
  product: ProductType | undefined,
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


import { createReducer } from '@reduxjs/toolkit';
import { waitServerAction } from '../actions';

export type MainStateType = {
  isWaiting: boolean,
}

const initialState: MainStateType = {
  isWaiting: false,
};

export const main = createReducer(initialState, (builder) => {
  builder
    .addCase(waitServerAction, (state, action) => {
      state.isWaiting = action.payload;
    });
});


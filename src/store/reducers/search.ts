import { createReducer } from '@reduxjs/toolkit';
import { SearchItemType } from '../../types/search-item-type';
import { loadSearchResultAction } from '../actions';

export type SearchStateType = {
  items: SearchItemType[],
}

const initialState: SearchStateType = {
  items: [],
};

export const search = createReducer(initialState, (builder) => {
  builder
    .addCase(loadSearchResultAction, (state, action) => {
      state.items = action.payload;
    });
});


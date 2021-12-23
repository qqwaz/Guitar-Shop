import { combineReducers } from '@reduxjs/toolkit';
import { main } from './reducers/main';
import { catalog } from './reducers/catalog';
import { search } from './reducers/search';
import { product } from './reducers/product';

export enum NameSpace {
  Main = 'Main',
  Catalog = 'Catalog',
  Search = 'Search',
  Product = 'Product',
}

export const rootReducer = combineReducers({
  [NameSpace.Main]: main,
  [NameSpace.Catalog]: catalog,
  [NameSpace.Search]: search,
  [NameSpace.Product]: product,
});

export type RootState = ReturnType<typeof rootReducer>;

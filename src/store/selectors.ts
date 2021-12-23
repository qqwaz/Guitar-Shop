import { NameSpace, RootState } from './root-reducer';

export const getIsWaitingSelector = (state: RootState) => state[NameSpace.Main].isWaiting;

export const getSearchResultSelector = (state: RootState) => state[NameSpace.Search].items;

export const getCatalogSelector = (state: RootState) => state[NameSpace.Catalog].products;

export const getProductSelector = (state: RootState) => state[NameSpace.Product].product;

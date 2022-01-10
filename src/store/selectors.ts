import { NameSpace, RootState } from './root-reducer';

export const getIsWaitingSelector = (state: RootState) => state[NameSpace.Main].isWaiting;

export const getSearchResultSelector = (state: RootState) => state[NameSpace.Search].items;

export const getCatalogSelector = (state: RootState) => state[NameSpace.Catalog].products;
export const getIsRefreshNeededSelector = (state: RootState) => state[NameSpace.Catalog].isRefreshNeeded;
export const getSortingTypeSelector = (state: RootState) => state[NameSpace.Catalog].sortingType;
export const getSortingDirectionSelector = (state: RootState) => state[NameSpace.Catalog].sortingDirection;
export const getPriceBoundsSelector = (state: RootState) => [state[NameSpace.Catalog].allowedMinPrice, state[NameSpace.Catalog].allowedMaxPrice];
export const getFilterMinPriceSelector = (state: RootState) => state[NameSpace.Catalog].filterMinPrice;
export const getFilterMaxPriceSelector = (state: RootState) => state[NameSpace.Catalog].filterMaxPrice;
export const getFilterTypeSelector = (state: RootState) => state[NameSpace.Catalog].filterType;
export const getFilterStringsSelector = (state: RootState) => state[NameSpace.Catalog].filterStrings;
export const getAvailableStringsSelector = (state: RootState) => state[NameSpace.Catalog].availableStrings;

export const getProductSelector = (state: RootState) => state[NameSpace.Product].product;

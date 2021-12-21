import { createSelector } from 'reselect';
import { GuitarType } from '../../types/guitar-type';
import { NameSpace, RootState } from '../root-reducer';

export const getIsWaitingSelector = (state: RootState) => state[NameSpace.Main].isWaiting;

export const getCatalogSelector = (state: RootState): GuitarType[] => state[NameSpace.Main].products;

export const getNameSelector = (state: RootState) => state[NameSpace.Main].name;

export const getSearchResultSelector = createSelector(
  getCatalogSelector,
  getNameSelector,
  (guitars, name): Array<{id: number, name: string}> => (
    name === ''
      ? []
      : guitars.map((item) => ({id: item.id, name: item.name}))
  ),
);

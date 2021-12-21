import { GuitarType } from '../../types/guitar-type';
import { NameSpace, RootState } from '../root-reducer';

export const getIsWaitingSelector = (state: RootState) => state[NameSpace.Main].isWaiting;

export const getCatalogSelector = (state: RootState): GuitarType[] => state[NameSpace.Main].products;

export const getNameSelector = (state: RootState) => state[NameSpace.Main].name;

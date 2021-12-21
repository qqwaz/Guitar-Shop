import { combineReducers } from '@reduxjs/toolkit';
import { main } from './main/reducer';

export enum NameSpace {
  Main = 'MAIN',
}

export const rootReducer = combineReducers({
  [NameSpace.Main]: main,
});

export type RootState = ReturnType<typeof rootReducer>;

import { createAction } from '@reduxjs/toolkit';
import { ThunkAction } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { Action } from 'redux';
import { RootState } from './root-reducer';
import { GuitarType } from '../types/guitar-type';

export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, RootState, AxiosInstance, Action>;

export enum ActionType {
  LoadCatalog = 'LoadCatalog',
  WaitServer = 'WaitServer',
  SetName = 'SetName',
}

export const waitServer = createAction(
  ActionType.WaitServer,
  (status: boolean) => ({
    payload: status,
  }),
);

export const loadCatalogAction = createAction(
  ActionType.LoadCatalog,
  (data: GuitarType[]) => ({
    payload: data,
  }),
);

export const setNameAction = createAction(
  ActionType.SetName,
  (name: string) => ({
    payload: name,
  }),
);

import { ApiMessage, APIRoute, AppRoute, EmbedParam, GuitarProps, PriceBoundsParam, QueryParam, ResponseHeader, SortingDirection, SortingType } from '../const';
import { NameSpace } from './root-reducer';
import { ProductType } from '../types/product-type';
import {
  loadCatalogAction,
  loadProductAction,
  loadSearchResultAction,
  setPriceBoundsAction,
  setTotalCountAction,
  ThunkActionResult,
  waitServerAction
} from './actions';
import { toast } from 'react-toastify';
import { adaptGuitarsToClient, adaptGuitarToClient } from '../services/adapter';
import { SearchItemType } from '../types/search-item-type';
import { apiRouteToProduct } from '../services/utils';
import history from '../services/history';
import axios, { AxiosError, AxiosResponse } from 'axios';

export const fetchSearchResultAction = (mask: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    if (mask === '') {
      dispatch(loadSearchResultAction([]));
      return;
    }
    try {
      const params = {
        [QueryParam.NameLike]: mask,
      };
      await api.get<ProductType[]>(APIRoute.Guitars, {params: params})
        .then(({ data }) => {
          const items: SearchItemType[] = data.map((x) => ({id: x.id, name: x.name}));
          dispatch(loadSearchResultAction(items));
        });
    } catch {
      dispatch(loadSearchResultAction([]));
      toast.error(ApiMessage.ServerError);
    }
  };

export const fetchCatalogAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(waitServerAction(true));

      dispatch(fetchBaseParamsAction());

      const state = _getState();
      const params = new URLSearchParams();

      params.append(QueryParam.Embed, EmbedParam.Comments);
      if (state[NameSpace.Catalog].sortingType !== SortingType.Undefined) {
        params.append(QueryParam.Sorting, state[NameSpace.Catalog].sortingType);
      }
      if (state[NameSpace.Catalog].sortingDirection !== SortingDirection.Undefined) {
        params.append(QueryParam.Direction, state[NameSpace.Catalog].sortingDirection);
      }
      if (state[NameSpace.Catalog].filterMinPrice) {
        params.append(QueryParam.MinPrice, state[NameSpace.Catalog].filterMinPrice);
      }
      if (state[NameSpace.Catalog].filterMaxPrice) {
        params.append(QueryParam.MaxPrice, state[NameSpace.Catalog].filterMaxPrice);
      }
      state[NameSpace.Catalog].filterType.forEach((type) => params.append(QueryParam.Type, GuitarProps[type].type));
      state[NameSpace.Catalog].filterStrings.forEach((strings) => params.append(QueryParam.Strings, strings));

      const { data } = await api.get<ProductType[]>(APIRoute.Guitars, {params: params});
      dispatch(loadCatalogAction(adaptGuitarsToClient(data)));
    } catch(e) {
      dispatch(loadCatalogAction([]));
      toast.error(`${ApiMessage.ServerError} ${(e as AxiosError).response}`);
    } finally {
      dispatch(waitServerAction(false));
    }
  };

export const fetchProductAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(waitServerAction(true));
      const { data } = await api.get<ProductType>(apiRouteToProduct(id));
      dispatch(loadProductAction(adaptGuitarToClient(data)));
    } catch(e) {
      toast.error(`${ApiMessage.ServerError} ${e}`);
      history.push(AppRoute.NotFound);
    } finally {
      dispatch(waitServerAction(false));
    }
  };

export const fetchBaseParamsAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const [{ data: cheapProduct, headers }, { data: expensiveProduct }] =
        await axios.all<AxiosResponse>([
          api.get<ProductType[]>(`${APIRoute.Guitars}${PriceBoundsParam.Cheapest}`),
          api.get<ProductType[]>(`${APIRoute.Guitars}${PriceBoundsParam.Expensive}`)]);
      dispatch(setTotalCountAction(headers[ResponseHeader.XTotalCount]));
      dispatch(setPriceBoundsAction([cheapProduct[0].price, expensiveProduct[0].price]));
    } catch(e) {
      toast.error(`${ApiMessage.ServerError} ${e}`);
    }
  };

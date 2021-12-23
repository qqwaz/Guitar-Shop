import { ApiMessage, APIRoute, AppRoute, QueryParam } from '../const';
// import { NameSpace } from './root-reducer';
import { GuitarType } from '../types/guitar-type';
// import { ParamsType } from '../types/params-type';
import {
  loadCatalogAction,
  loadProductAction,
  loadSearchResultAction,
  ThunkActionResult,
  waitServerAction
} from './actions';
import { toast } from 'react-toastify';
import { adaptGuitarsToClient, adaptGuitarToClient } from '../services/adapter';
import { SearchItemType } from '../types/search-item-type';
import { apiRouteToProduct } from '../services/utils';
import history from '../services/history';

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
      await api.get<GuitarType[]>(APIRoute.Guitars, {params: params})
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
      // const state = _getState();
      const params = {
        // type: state[NameSpace.Main].type,
        // strings: state[NameSpace.Main].strings[0],
        // sorting: state[NameSpace.Main].sorting[0],
        // direction: state[NameSpace.Main].direction[0],
        // minPrice: 0,
        // maxPrice: 0,
      };

      // eslint-disable-next-line no-console
      console.warn(params);

      dispatch(waitServerAction(true));
      const { data } = await api.get<GuitarType[]>(APIRoute.Guitars, {params: params});
      dispatch(loadCatalogAction(adaptGuitarsToClient(data)));
    } catch {
      dispatch(loadCatalogAction([]));
      toast.error(ApiMessage.ServerError);
    } finally {
      dispatch(waitServerAction(false));
    }
  };

export const fetchProductAction = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      dispatch(waitServerAction(true));
      const { data } = await api.get<GuitarType>(apiRouteToProduct(id));
      dispatch(loadProductAction(adaptGuitarToClient(data)));
    } catch(e) {
      toast.error(ApiMessage.ServerError + e);
      history.push(AppRoute.NotFound);
    } finally {
      dispatch(waitServerAction(false));
    }
  };


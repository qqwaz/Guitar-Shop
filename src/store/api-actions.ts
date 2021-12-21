import { ApiMessage, APIRoute, QueryParam } from '../const';
import { GuitarType } from '../types/guitar-type';
// import { ParamsType } from '../types/params-type';
import { loadCatalogAction, ThunkActionResult, waitServer } from './actions';
import { toast } from 'react-toastify';
import { adaptGuitarsToClient } from '../services/adapter';
import { NameSpace } from './root-reducer';


export const fetchCatalog = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    try {
      const state = _getState();
      const params = {
        [QueryParam.Name]: state[NameSpace.Main].name,
        // type: state[NameSpace.Main].type,
        // strings: state[NameSpace.Main].strings[0],
        // sorting: state[NameSpace.Main].sorting[0],
        // direction: state[NameSpace.Main].direction[0],
        // minPrice: 0,
        // maxPrice: 0,
      };

      // eslint-disable-next-line no-console
      console.warn(params);
      dispatch(waitServer(true));
      const { data } = await api.get<GuitarType[]>(APIRoute.Guitars, {params: params});
      dispatch(loadCatalogAction(adaptGuitarsToClient(data)));
    } catch {
      dispatch(loadCatalogAction([]));
      toast.error(ApiMessage.ServerError);
    } finally {
      dispatch(waitServer(false));
    }
  };

import { APIRoute, AppRoute } from '../const';

export const appRouteToProduct = (id: string) => AppRoute.Product.replace(':id', id);

export const apiRouteToProduct = (id: string) => APIRoute.Product.replace(':id', id);

export const formatPrice = (cost: number) => `${cost.toString().split(/(?=(?:...)*$)/)} ₽`;


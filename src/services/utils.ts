import { APIRoute, AppRoute } from '../const';

export const appRouteToProduct = (id: string) => AppRoute.Product.replace(':id', id);

export const apiRouteToProduct = (id: string) => APIRoute.Product.replace(':id', id);

export const appRouteToPage = (id: string | number) => AppRoute.Catalog.replace(':id', id.toString());

export const groupNumbers = (value: number) => `${value.toString().split(/(?=(?:...)*$)/).join(' ')}`;

export const formatPrice = (cost: number) => `${groupNumbers(cost)} ₽`;

export const getBoundedValue = (stringValue: string, minAllowed: number, maxAllowed: number) => {
  const value = Number.parseInt(stringValue, 10);
  switch (true) {
    case !value:
      return '';
    case value < minAllowed:
      return minAllowed.toString();
    case value > maxAllowed:
      return maxAllowed.toString();
    default:
      return value.toString();
  }
};

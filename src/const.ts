export const BACKEND_URL = 'https://accelerator-guitar-shop-api-v1.glitch.me/';
export const REQUEST_TIMEOUT = 3000;

export enum AppRoute {
  Main = '/',
  Product = '/product/:id',
  Cart = '/cart',
  NotFound = '/oops',
}

export enum APIRoute {
  Guitars = '/guitars',
  Product = '/guitars/:id',
  Comments = '/guitars/:id/comments',
  Comment = '/comments',
  Coupon = '/coupons',
  Order = '/orders',
}

export enum ApiMessage {
  ServerError = 'Something went wrong...'
}

export enum QueryParam {
  NameLike = 'name_like',
  Type = 'type',
  Strings = 'stringCount',
  MinPrice = 'price_gte',
  MaxPrice = 'price_lte',
  Sorting = '_sort',
  Direction = '_order',
}

export enum GuitarTypeParam {
  Unset = '',
  Electric = 'electric',
  Acoustic = 'acoustic',
  Ululele = 'ukulele'
}

export enum GuitarStringsParam {
  Unset = '',
  Four = 4,
  Six = 6,
  Seven = 7,
  Twelve = 12
}

export enum SortingType {
  Unset = '',
  Price = 'price',
  Rating = 'rating',
}

export enum SortingDirection {
  Unset = '',
  Asc = 'asc',
  Desc = 'desc'
}

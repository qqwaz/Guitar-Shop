export const BACKEND_URL = 'https://accelerator-guitar-shop-api-v1.glitch.me/';
export const REQUEST_TIMEOUT = 3000;

export enum AppRoute {
  Main = '/',
  Product = '/product/:product_id',
  Cart = '/cart',
  NotFound = '/oops',
}

export enum APIRoute {
  Guitars = '/guitars',
  Product = '/guitars/:product_id',
  Comments = '/guitars/:product_id/comments',
  Comment = '/comments',
  Coupon = '/coupons',
  Order = '/orders',
}

export enum ApiMessage {
  ServerError = 'Something went wrong...'
}

export enum QueryParam {
  Name = 'name_like',
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

export enum SortingParam {
  Unset = '',
  Price = 'price',
  Rating = 'rating',
}

export enum DirectionParam {
  Unset = '',
  Asc = 'asc',
  Desc = 'desc'
}

export const BACKEND_URL = 'https://accelerator-guitar-shop-api-v1.glitch.me/';
export const REQUEST_TIMEOUT = 3000;

export enum AppRoute {
  Main = '/',
  Catalog = '/catalog/page_:id',
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
  StartFrom = '_start',
  Limit = '_limit',
  Embed = '_embed',
}

export enum FilterGuitarType {
  Acoustic = 'Acoustic',
  Electric = 'Electric',
  Ukulele = 'Ukulele',
}

export enum FilterGuitarStrings {
  Four = '4',
  Six = '6',
  Seven = '7',
  Twelve = '12',
}

export const GuitarProps = {
  [FilterGuitarType.Acoustic]: {
    type: 'acoustic',
    label: 'Акустические гитары',
    strings: [FilterGuitarStrings.Six, FilterGuitarStrings.Seven, FilterGuitarStrings.Twelve],
  },
  [FilterGuitarType.Electric]: {
    type: 'electric',
    label: 'Электрогитары',
    strings: [FilterGuitarStrings.Four, FilterGuitarStrings.Six, FilterGuitarStrings.Seven],
  },
  [FilterGuitarType.Ukulele]: {
    type: 'ukulele',
    label: 'Укулеле',
    strings: [FilterGuitarStrings.Four],
  },
} as const;

export enum SortingType {
  Undefined = '',
  Price = 'price',
  Rating = 'rating',
}

export enum SortingDirection {
  Undefined = '',
  Asc = 'asc',
  Desc = 'desc'
}

export enum EmbedParam {
  Undefined = '',
  Comments = 'comments',
}

export enum PriceBoundsParam {
  Cheapest = '?_sort=price&_start=0&_limit=1',
  Expensive = '?_sort=price&_order=desc&_start=0&_limit=1',
}

export enum ResponseHeader {
  XTotalCount = 'x-total-count',
}

export enum RatingComponentVariant {
  Card,
  Product,
  Comment,
}

export const MAX_RATING_VALUE = 5;
export const MAX_PRODUCTS_PER_PAGE = 9;
export const DEFAULT_CATALOG_PAGE = 1;

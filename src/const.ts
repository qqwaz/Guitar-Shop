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

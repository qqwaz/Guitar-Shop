import { ProductType } from '../types/product-type';

const SERVER_SIDE_IMAGE_SRC_PATH_MASK = /^img/;
const CLIENT_SIDE_IMAGE_SRC_PATH_MASK = '/img/content';

export const adaptGuitarToClient = (giutar: ProductType): ProductType => {
  const {
    previewImg,
    ...rest
  } = giutar;
  return ({
    previewImg: previewImg.replace(SERVER_SIDE_IMAGE_SRC_PATH_MASK, CLIENT_SIDE_IMAGE_SRC_PATH_MASK),
    ...rest,
  });
};

export const adaptGuitarsToClient = (guitars: ProductType[]): ProductType[] => guitars.map(adaptGuitarToClient);


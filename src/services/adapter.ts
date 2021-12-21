import { GuitarType } from '../types/guitar-type';

export const adaptGuitarToClient = (giutar: GuitarType): GuitarType => {
  const {
    previewImg,
    ...rest
  } = giutar;
  return ({
    previewImg: previewImg.replace(/^img/, '/img/content'),
    ...rest,
  });
};

export const adaptGuitarsToClient = (giutars: GuitarType[]): GuitarType[] => giutars.map(adaptGuitarToClient);


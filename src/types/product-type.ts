import { CommentType } from './comment-type';

export type ProductType = {
  id: number;
  name: string;
  vendorCode: string;
  type: string;
  description: string;
  previewImg: string;
  stringCount: number;
  rating: number;
  comments: CommentType[];
  price: number;
};

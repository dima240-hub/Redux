import {PRODUCT_IMAGE_LIST} from '../actionsType';
export const productImageList = data => {
  return {
    type: PRODUCT_IMAGE_LIST,
    data,
  };
};

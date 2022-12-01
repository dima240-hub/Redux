import {SET_IMAGE_LIST} from '../actionsType';
export const productImageData = (data = [], action) => {
  switch (action.type) {
    case SET_IMAGE_LIST:
      return action;

    default:
      return data;
  }
};

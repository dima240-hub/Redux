import {SET_FAVORITE_LIST} from '../actionsType';
export const productFavoriteData = (data = [], action) => {
  switch (action.type) {
    case SET_FAVORITE_LIST:
      return [...action.data.data1];
    default:
      return data;
  }
};

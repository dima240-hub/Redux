import {
  PRODUCT_LIST,
  ADD_PRODUCT,
  SET_ACTIVE,
  SET_RATE,
  SEARCH_LIST,
} from '../actionsType';

export const productList = () => {
  return {
    type: PRODUCT_LIST,
  };
};
export const addProduct = data => {
  return {
    type: ADD_PRODUCT,
    data,
  };
};
export const setActive = data => {
  return {
    type: SET_ACTIVE,
    data,
  };
};
export const setRate = data => {
  return {
    type: SET_RATE,
    data,
  };
};
export const searchList = data => {
  return {
    type: SEARCH_LIST,
    data,
  };
};

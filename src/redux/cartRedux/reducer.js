import {ADD_TO_CART, REMOVE_FROM_CART, EMTY_CART} from '../actionsType';
export const cartData = (data = [], action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [action.data, ...data];

    case EMTY_CART:
      data = [];
      return [...data];
    default:
      return data;
  }
};

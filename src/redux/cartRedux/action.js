import { ADD_TO_CART , REMOVE_FROM_CART , EMTY_CART } from "../actionsType";

export const addToCart = data => {
  return {
    type: ADD_TO_CART,
    data,
  };
};
export const removeToCart = data => {
  return {
    type: REMOVE_FROM_CART,
    data,
  };
};
export const emtyCard = () => {
  return {
    type: EMTY_CART,
  };
};

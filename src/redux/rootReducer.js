import {combineReducers} from 'redux';
import {cartData} from './cartRedux/reducer';
import {productData} from './productRedux/productReducer';
import {productFavoriteData} from './productFavoriteRedux/productFavoriteReducer';
import {productImageData} from './productPhotoRedux/productPhotoReducer';
export default combineReducers({
  cartData,
  productData,
  productFavoriteData,
  productImageData,
});

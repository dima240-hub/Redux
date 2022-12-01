import {spawn, fork} from 'redux-saga/effects';
import productFavoriteSaga from './productFavoriteRedux/productFavoriteSaga';
import productSaga from './productRedux/productSaga';
import productImageSaga from './productPhotoRedux/productPhotoSaga';
export default function* rootSaga() {
  yield spawn(productFavoriteSaga);
  yield spawn(productSaga);
  yield spawn(productImageSaga);
}

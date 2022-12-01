import {takeEvery, put, takeLatest} from 'redux-saga/effects';
import {SERVER} from '../../server';
import {PRODUCT_FAVORITE_LIST, SET_FAVORITE_LIST} from '../actionsType';

function* getFavoriteProducts() {
  let data = yield fetch(`${SERVER}/get/favorite`);
  data = yield data.json();

  yield put({type: SET_FAVORITE_LIST, data});
}
function* productFavoriteSaga() {
  yield takeEvery(PRODUCT_FAVORITE_LIST, getFavoriteProducts);
}
export default productFavoriteSaga;

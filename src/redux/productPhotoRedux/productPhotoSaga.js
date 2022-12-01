import {takeEvery, put} from 'redux-saga/effects';
import {SET_IMAGE_LIST, PRODUCT_IMAGE_LIST} from '../actionsType';
import {SERVER} from '../../server';
function* getProductImage(data) {
  let data1 = yield fetch(`${SERVER}/Images/${data.data}`);
  console.log(data1.url);
  yield put({type: SET_IMAGE_LIST, data: data1.url});
}

function* productImageSaga() {
  yield takeEvery(PRODUCT_IMAGE_LIST, getProductImage);
}
export default productImageSaga;

import {takeEvery, put} from 'redux-saga/effects';
import {
  PRODUCT_LIST,
  SET_PRODUCT_LIST,
  ADD_PRODUCT,
  SET_ACTIVE,
  SET_RATE,
  SEARCH_LIST,
} from '../actionsType';
import {SERVER} from '../../server';
function* getProducts() {
  let data = yield fetch(`${SERVER}/get`);
  data = yield data.json();

  yield put({type: SET_PRODUCT_LIST, data});
}
function* getSearchProducts(data) {
  let result = yield fetch(`${SERVER}/search?product_name=${data.data}`);
  console.log(result);
  result = yield result.json();

  yield put({type: SET_PRODUCT_LIST, data: result});
}
function* addProducts(data) {
  const requestOptions = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data.data),
  };

  let result = yield fetch(`${SERVER}/post`, requestOptions);
  result = yield result.json();

  yield put({type: SET_PRODUCT_LIST, data: result});
}

function* setActive(data) {
  const requestOptions = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data.data),
  };
  let result = yield fetch(`${SERVER}/put`, requestOptions);
  result = yield result.json();

  yield put({type: SET_PRODUCT_LIST, data: result});
}
function* setRate(data) {
  const requestOptions = {
    method: 'PUT',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(data.data),
  };
  let result = yield fetch(`${SERVER}/put/star`, requestOptions);
  result = yield result.json();

  yield put({type: SET_PRODUCT_LIST, data: result});
}

function* productSaga() {
  yield takeEvery(PRODUCT_LIST, getProducts);
  yield takeEvery(SEARCH_LIST, getSearchProducts);
  yield takeEvery(ADD_PRODUCT, addProducts);
  yield takeEvery(SET_ACTIVE, setActive);
  yield takeEvery(SET_RATE, setRate);
}
export default productSaga;

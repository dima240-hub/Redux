// import {createStore} from 'redux';
import rootReducer from './rootReducer';
import {configureStore} from '@reduxjs/toolkit';
import productSaga from './productRedux/productSaga';
import createSagaMiddleware from 'redux-saga';
import productFavoriteSaga from './productFavoriteRedux/productFavoriteSaga';
import rootSaga from './rootSaga';
// const store = createStore(rootReducer);
const sagaMiddleware = createSagaMiddleware();
const store = configureStore({
  reducer: rootReducer,
  middleware: () => [sagaMiddleware],
});
sagaMiddleware.run(rootSaga);
export default store;

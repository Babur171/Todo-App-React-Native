// import createSagaMiddleware from '@redux-saga/core';
import { createStore,applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import todoReducer from '../Redux/Reducer/reducer';
// import { rootSaga } from '../sagaRedux/sagaRote';

const store = createStore(todoReducer,applyMiddleware(thunk));

// const createSaga=createSagaMiddleware();
// const storeSaga = createStore(todoReducer,applyMiddleware(createSaga));
// createSaga.run(rootSaga)

export default store;
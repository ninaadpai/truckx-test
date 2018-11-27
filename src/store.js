import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { logger } from 'redux-logger';
import rootReducer from './reducers';
import rootSaga from './sagas/mainSaga';

const inititalState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    rootReducer,
    inititalState,
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

export default store;

import { applyMiddleware, compose, createStore} from 'redux';
import createSagaMiddleware from 'redux-saga';

import rootReducer from './reducers/index';
import rootSaga from './sagas';

export default function (initialState = {}) {
  // ======================================================
  // Middleware Configuration
  // ======================================================
  const sagaMiddleware = createSagaMiddleware();
  // ======================================================
  // Store Enhancers
  // ======================================================
  const enhancers = [];
  if (process.env.NODE_ENV === 'development') {
    const { devToolsExtension } = window;

    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }
  const composedEnhancers = compose(
    applyMiddleware(sagaMiddleware),
    ...enhancers,
  );

  // ======================================================
  // Store Instantiation and HMR Setup
  // ======================================================
  const store = createStore(
    rootReducer,
    initialState,
    composedEnhancers,
  );
  sagaMiddleware.run(rootSaga);
  return store;
};
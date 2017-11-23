import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';

import reducers from './reducers/';

const initialState = {
  comments: []
};

const configureStoreDev = (params) => {
  const reactRouterMiddleware = routerMiddleware(params.history);

  const middlewares = [
    reduxImmutableStateInvariant(),
    thunk,
    reactRouterMiddleware
  ];

  // Add support for Redux Dev Tools
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
  const store = createStore(
    reducers,
    initialState,
    composeEnhancer(
      applyMiddleware(...middlewares)
    )
  );
  
  return store;
}

const configureStoreProd = (params) => {
  const reactRouterMiddleware = routerMiddleware(params.history);
  
  const middlewares = [
    thunk,
    reactRouterMiddleware
  ];

  const store = createStore(
    reducers,
    initialState,
    compose(
      applyMiddleware(...middlewares)
    )
  );
  
  return store;
}

const isProd = process.env.NODE_ENV === 'production';
const configureStore = isProd ? configureStoreProd : configureStoreDev;

export default configureStore;

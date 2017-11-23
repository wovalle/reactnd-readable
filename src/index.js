import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk';
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducers from './reducers/';
import registerServiceWorker from './registerServiceWorker';
import Routes from './Routes';
import './index.css';

const initialState = {
  comments: []
};

const history = createHistory();
const reactRouterMiddleware = routerMiddleware(history);

const middlewares = [
  thunk,
  reactRouterMiddleware
];

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  initialState,
  composeEnhancer(
    applyMiddleware(...middlewares)
  )
);

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

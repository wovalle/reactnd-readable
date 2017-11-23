import React from 'react';
import ReactDOM from 'react-dom';

import { Provider } from 'react-redux'
import { ConnectedRouter, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import registerServiceWorker from './registerServiceWorker';
import createStore from './createStore';
import Routes from './Routes';

const history = createHistory();
const store = createStore({ history });

ReactDOM.render(
  <Provider store={store}>
      <ConnectedRouter history={history}>
        <Routes />
      </ConnectedRouter>
  </Provider>,
  document.getElementById('root'));

registerServiceWorker();

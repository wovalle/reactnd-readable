import React from 'react';
import { Switch } from 'react-router-dom';

import DefaultLayout from './components/shared/DefaultLayout';
import App from './components/shared/App.jsx';
import NotFound from './components/shared/NotFound.jsx';

const Routes = () => {
  return (
    <Switch>
      <DefaultLayout exact path="/" component={App} />
      <DefaultLayout component={NotFound} />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { Switch, Route } from 'react-router-dom';

import App from './components/shared/App';
import NotFound from './components/shared/NotFound';

const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={App} />
      <Route component={NotFound} />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { Switch } from 'react-router-dom';

import DefaultLayout from './components/shared/DefaultLayout';
import PostList from './components/PostList/PostList';
import NotFound from './components/shared/NotFound.jsx';

const Routes = () => {
  return (
    <Switch>
      <DefaultLayout exact path="/" component={PostList} />
      <DefaultLayout component={NotFound} />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { Switch } from 'react-router-dom';

import DefaultLayout from './components/shared/DefaultLayout';
import PostList from './containers/PostList';
import PostContainer from './containers/PostContainer';
import EditPostContainer from './containers/EditPostContainer';
import NotFound from './components/shared/NotFound.jsx';

const Routes = () => {
  return (
    <Switch>
      <DefaultLayout exact path="/" component={PostList} />
      <DefaultLayout exact path="/post/:id" component={PostContainer} />
      <DefaultLayout exact path="/edit/:id" component={EditPostContainer} />
      <DefaultLayout component={NotFound} />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { Switch } from 'react-router-dom';

import DefaultLayout from './components/shared/DefaultLayout';
import PostList from './containers/PostList';
import PostContainer from './containers/PostContainer';
import EditPost from './components/EditPost/EditPost';
import NotFound from './components/shared/NotFound.jsx';

const Routes = () => {
  return (
    <Switch>
      <DefaultLayout exact path="/" component={PostList} />
      <DefaultLayout exact path="/post/:id" component={PostContainer} />
      <DefaultLayout exact path="/edit" component={EditPost} />
      <DefaultLayout component={NotFound} />
    </Switch>
  );
}

export default Routes;

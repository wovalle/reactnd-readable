import React from 'react';
import { Switch } from 'react-router-dom';

import DefaultLayout from './components/shared/DefaultLayout';
import PostList from './containers/PostList';
import Post from './components/Post/Post';
import EditPost from './components/EditPost/EditPost';
import NotFound from './components/shared/NotFound.jsx';

const Routes = () => {
  return (
    <Switch>
      <DefaultLayout exact path="/" component={PostList} />
      <DefaultLayout exact path="/post/:id" component={Post} />
      <DefaultLayout exact path="/edit" component={EditPost} />
      <DefaultLayout component={NotFound} />
    </Switch>
  );
}

export default Routes;

import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';

import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../../../node_modules/font-awesome/css/font-awesome.min.css';

// https://simonsmith.io/reusing-layouts-in-react-router-4/
const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <div role="main" className="container pt-5 mt-5">
        <Nav />      
        <Component {...matchProps} />
      </div>
    )} />
  )
};

export default DefaultLayout;

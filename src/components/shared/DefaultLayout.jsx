import React from 'react';
import { Route } from 'react-router-dom';

import '../../../node_modules/bootstrap/dist/css/bootstrap.css';

// https://simonsmith.io/reusing-layouts-in-react-router-4/
const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <div role="main" className="container">
        <Component {...matchProps} />
      </div>
    )} />
  )
};

export default DefaultLayout;

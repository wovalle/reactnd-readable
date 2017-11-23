import React from 'react';
import { Route } from 'react-router-dom';

// https://simonsmith.io/reusing-layouts-in-react-router-4/
const DefaultLayout = ({ component: Component, ...rest }) => {
  return (
    <Route {...rest} render={matchProps => (
      <div className="layout">
        <div className="Header">Header</div>
          <Component {...matchProps} />
        <div className="Footer">Footer</div>
      </div>
    )} />
  )
};

export default DefaultLayout;

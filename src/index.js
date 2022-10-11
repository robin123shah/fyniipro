import React from 'react';
import ReactDOM from 'react-dom';
import Router from './components/Navigation/Router';
import LazyLoad from 'react-lazy-load';

ReactDOM.render(
  <React.StrictMode>
    <LazyLoad height={762}>
      <Router />
    </LazyLoad>
  </React.StrictMode>,
  document.getElementById('root')
);
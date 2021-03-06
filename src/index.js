import React from 'react';
import ReactDOM from 'react-dom';
import 'wicg-inert';

import App from 'components/App';

import * as serviceWorker from './serviceWorker';

import './index.css';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');

  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

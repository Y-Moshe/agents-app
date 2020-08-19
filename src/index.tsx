import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

// basename is requited to work with wordpress.
// for development set: '/index.php/agents'
// for production set: '/agents'
ReactDOM.render(
  <Router basename="/index.php/agents">
    <Route path="/" component={App} />
  </Router>,
  document.getElementById('react-root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

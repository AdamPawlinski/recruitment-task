import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader';
import App from './containers/App.container';
import './index.html';

hot(module)(App);
ReactDOM.render(<App />, document.getElementById('root'));
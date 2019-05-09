import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/styles/main.scss";
import App from './containers/App.container';
require('./index.html');

ReactDOM.render(<App />, document.getElementById('root'));
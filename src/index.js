require('file-loader?name=[name].[ext]!./index.html'); // so webpack can include index.html file in the output
import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './App';
import { BrowserRouter as Router } from 'react-router-dom';


const appElement = document.getElementById('app');

ReactDOM.render(
<Router>
  <App />
</Router>, appElement);
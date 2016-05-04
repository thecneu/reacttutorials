// import './main.css';
require('file?name=[name].[ext]!./index.html');

import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';

import alt from './alt';
import storage from './libs/storage';
import persist from './libs/persist';

ReactDOM.render(<App />, document.getElementById('app'));

persist(alt, storage, 'app');
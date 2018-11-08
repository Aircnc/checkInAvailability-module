import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import MainBody from './components/MainBody';

ReactDOM.render(<Nav />, document.getElementById('nav-alice'));
ReactDOM.render(<MainBody />, document.getElementById('main-body'));

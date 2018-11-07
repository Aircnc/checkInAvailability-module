import React from 'react';
import ReactDOM from 'react-dom';
import Nav from './components/Nav';
import MainBody from './components/MainBody';
import Booking from './components/Booking';

ReactDOM.render(<Nav />, document.getElementById('nav'));
ReactDOM.render(<MainBody />, document.getElementById('main-body'));
window.Nav = Nav;
window.MainBody = MainBody;
window.Booking = Booking;

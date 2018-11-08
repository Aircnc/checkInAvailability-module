import React from 'react';
import CSSModules from 'react-css-modules';
import Booking from './Booking';
import Aval from './Aval';
import styles from '../styles/MainBody.css';

const MainBody = () => (
  <div styleName="main-body-container">
    <div styleName="desc-container" id="description" />
    <Booking />
    <Aval />
    <div styleName="reviews-container" id="reviews" />
  </div>
);

export default CSSModules(MainBody, styles);

import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/Aval.css';
import Calendar from './Calendar';

const Aval = () => (
  <div styleName="aval-container">
    <div styleName="aval-card">
      <div styleName="aval-header">
        <strong style={{ 'font-size': 'larger', 'margin-bottom': '5px' }}>Availability</strong>
        <p style={{ 'font-size': 'larger', 'margin-top': '5px' }}>Updated today</p>
      </div>
      <div styleName="two-calendar-container">
        <Calendar showRightBtn="none" />
        <div>&nbsp; &nbsp; &nbsp;</div>
        <Calendar showLeftBtn="none" />
      </div>
    </div>
  </div>
);

export default CSSModules(Aval, styles);

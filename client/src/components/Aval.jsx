import React from 'react';
import CSSModules from 'react-css-modules';
import styles from '../styles/Aval.css';

const Aval = () => (
  <div styleName="aval-container">
    <div styleName="aval-card" />
  </div>
);

export default CSSModules(Aval, styles);

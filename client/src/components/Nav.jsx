import React from 'react';
import { Input } from 'semantic-ui-react';
import CSSModules from 'react-css-modules';
import styles from '../styles/Nav.css';


const Nav = () => (
  <div styleName="nav-container">
    <div id="logo">
      <img alt="" src="https://1ststepaccounting.com/wp-content/uploads/2017/07/airbnb-logo.png" />
    </div>
    <div id="search-bar-wrapper">
      <Input id="search-bar" size="big" icon="search" iconPosition="left" placeholder="Search" />
    </div>
    <div id="list1" styleName="rectangle">Start hosting</div>
    <div id="list2" styleName="rectangle">Saved</div>
    <div id="list3" styleName="rectangle">Trips</div>
    <div id="list4" styleName="rectangle">Messages</div>
    <div id="list5" styleName="rectangle">Help</div>
    <div styleName="rectangle" id="list6">
      <div styleName="circle" />
    </div>
  </div>
);

export default CSSModules(Nav, styles);

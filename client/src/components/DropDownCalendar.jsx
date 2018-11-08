import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/DropDownCalendar.css';
import Calendar from './Calendar';

const DropDownCalendar = (props) => {
  const { dropdownDisplay, type } = props;
  return (
    <div styleName="calendar-dropdown-card" style={{ display: `${dropdownDisplay}` }}>
      <div styleName="calendar-dropdown-content">
        <Calendar type={type} />
        <p styleName="calendar-footer">Updated today</p>
      </div>
    </div>
  );
};

DropDownCalendar.propTypes = {
  dropdownDisplay: PropTypes.string,
  type: PropTypes.string,
};

DropDownCalendar.defaultProps = {
  dropdownDisplay: 'none',
  type: 'checkin',
};

export default CSSModules(DropDownCalendar, styles);

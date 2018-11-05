import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import GuestBtnGroup from './GuestBtnGroup';
import styles from '../styles/Dropdown.css';

const Dropdown = (props) => {
  const {
    handleGuest, getTotalGuest, setTotalGuest, setTotalInfant, dropdownDisplay,
  } = props;
  return (
    <div id="drop-down-guest" style={{ display: `${dropdownDisplay}` }}>
      <div id="drop-down-content">
        <div styleName="adult-guest">
          <div styleName="guest-row-content">
            <div styleName="guest-type">Adults</div>
            <GuestBtnGroup number={1} type="adult-minus" getTotalGuest={getTotalGuest} setTotalGuest={setTotalGuest} />
          </div>
        </div>
        <div styleName="child-guest">
          <div styleName="guest-row-content">
            <div>
              <div styleName="guest-type">Children</div>
              <div styleName="guest-txt">Ages 2–12</div>
            </div>
            <GuestBtnGroup number={0} type="child-minus" getTotalGuest={getTotalGuest} setTotalGuest={setTotalGuest} />
          </div>
        </div>
        <div styleName="child-guest">
          <div styleName="guest-row-content">
            <div>
              <div styleName="guest-type">Infants</div>
              <div styleName="guest-txt">Under 2</div>
            </div>
            <GuestBtnGroup number={0} type="infant-minus" setTotalInfant={setTotalInfant} />
          </div>
        </div>
        <div>
          <div styleName="guest-desc">3 guests maximum. Infants don’t count toward the number of guests.</div>
          <div styleName="guest-dropdown-close">
            <button type="button" styleName="guest-dropdown-close-btn" onClick={handleGuest}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  handleGuest: PropTypes.func,
  getTotalGuest: PropTypes.func,
  setTotalGuest: PropTypes.func,
  setTotalInfant: PropTypes.func,
  dropdownDisplay: PropTypes.string,
};

Dropdown.defaultProps = {
  handleGuest: () => {},
  getTotalGuest: () => {},
  setTotalGuest: () => {},
  setTotalInfant: () => {},
  dropdownDisplay: 'none',
};

export default CSSModules(Dropdown, styles);

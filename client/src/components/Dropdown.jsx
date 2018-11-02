import React from 'react';
import PropTypes from 'prop-types';
import GuestBtnGroup from './GuestBtnGroup';

const Dropdown = (props) => {
  const { handleGuest, getTotalGuest, setTotalGuest } = props;
  return (
    <div id="drop-down-guest">
      <div id="drop-down-content">
        <div className="adult-guest">
          <div className="guest-row-content">
            <div className="guest-type">Adults</div>
            <GuestBtnGroup number={1} type="adult-minus" getTotalGuest={getTotalGuest} setTotalGuest={setTotalGuest} />
          </div>
        </div>
        <div className="child-guest">
          <div className="guest-row-content">
            <div>
              <div className="guest-type">Children</div>
              <div className="guest-txt">Ages 2–12</div>
            </div>
            <GuestBtnGroup number={0} type="child-minus" getTotalGuest={getTotalGuest} setTotalGuest={setTotalGuest} />
          </div>
        </div>
        <div className="child-guest">
          <div className="guest-row-content">
            <div>
              <div className="guest-type">Infants</div>
              <div className="guest-txt">Under 2</div>
            </div>
            <GuestBtnGroup number={0} type="infant-minus" getTotalGuest={getTotalGuest} setTotalGuest={setTotalGuest} />
          </div>
        </div>
        <div>
          <div className="guest-desc">3 guests maximum. Infants don’t count toward the number of guests.</div>
          <div className="guest-dropdown-close">
            <button type="button" className="guest-dropdown-close-btn" onClick={handleGuest}>
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
};

Dropdown.defaultProps = {
  handleGuest: () => {
    document.getElementById('drop-down-guest').style.display = 'none';
    document.getElementById('downarrow').firstChild.setAttribute('d', 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z');
  },
  getTotalGuest: () => {

  },
  setTotalGuest: () => {

  },
};

export default Dropdown;

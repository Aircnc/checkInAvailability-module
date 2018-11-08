import React from 'react';
import axios from 'axios';
import CSSModules from 'react-css-modules';
import { Button } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import DropDownCalendar from './DropDownCalendar';
import styles from '../styles/Booking.css';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomPrice: null,
      reviewCount: null,
      avgReview: null,
      guestView: false,
      checkInView: false,
      checkOutView: false,
      checkinStyle: '',
      checkoutStyle: '',
      totalGuest: 1,
      totalInfant: 0,
      guestText: '1 Guest',
      commaText: '',
      infantText: '',
      guestStyle: '',
      infantStyle: '',
      dropdownDisplay: 'none',
      checkInDisplay: 'none',
      checkOutDisplay: 'none',
      arrow: 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z',
    };
    this.get = this.get.bind(this);
    this.handleCheckIn = this.handleCheckIn.bind(this);
    this.handleCheckOut = this.handleCheckOut.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.getTotalGuest = this.getTotalGuest.bind(this);
    this.setTotalGuest = this.setTotalGuest.bind(this);
    this.setTotalInfant = this.setTotalInfant.bind(this);
  }

  componentDidMount() {
    const listingId = window.location.href.slice(31, -1);
    this.get(listingId)
      .then((response) => {
        this.setState({
          avgReview: response.data[0].avgReview / 3 * 40,
          reviewCount: response.data[0].reviewCount,
          roomPrice: response.data[0].roomPrice,
        });
      });
  }

  getTotalGuest() {
    const { totalGuest } = this.state;
    return totalGuest;
  }

  setTotalGuest(type = 'plus') {
    const { totalGuest } = this.state;
    let newGuest = totalGuest;
    if (type === 'plus') {
      newGuest += 1;
    } else if (type === 'minus') {
      newGuest -= 1;
    }
    this.setState({
      totalGuest: newGuest,
    });
    if (newGuest > 1) {
      this.setState({
        guestText: newGuest.toString().concat(' Guests'),
        guestStyle: 'green',
        infantStyle: '',
      });
    } else if (newGuest === 1) {
      this.setState({
        guestText: '1 Guest',
        guestStyle: 'green',
        infantStyle: '',
      });
    }
  }

  setTotalInfant(type) {
    const { totalInfant } = this.state;
    let newInfant = totalInfant;
    if (type === 'plus') {
      newInfant += 1;
    } else if (type === 'minus') {
      newInfant -= 1;
    }
    this.setState({
      totalInfant: newInfant,
    });
    if (newInfant > 1) {
      this.setState({
        commaText: ', ',
        infantText: newInfant.toString().concat(' Infants'),
        guestStyle: '',
        infantStyle: 'green',
      });
    } else if (newInfant === 1) {
      this.setState({
        commaText: ', ',
        infantText: '1 Infant',
        guestStyle: '',
        infantStyle: 'green',
      });
    } else {
      this.setState({
        commaText: '',
        infantText: '',
        guestStyle: 'green',
        infantStyle: '',
      });
    }
  }

  get(listingId) {
    return axios.get(`http://localhost:3001/listings/${listingId}/reservations`)
      .catch((error) => {
        this.setState({
          avgReview: null,
          reviewCount: null,
          roomPrice: null,
        });
        throw error;
      });
  }

  handleCheckIn() {
    const { checkInView } = this.state;
    this.setState({
      checkInView: !checkInView,
    });
    if (!checkInView) {
      this.setState({
        checkInDisplay: 'block',
        checkinStyle: 'green',
        checkOutDisplay: 'none',
        checkOutView: false,
        checkoutStyle: '',
      });
    } else {
      this.setState({
        checkInDisplay: 'none',
        checkinStyle: '',
      });
    }
  }

  handleCheckOut() {
    const { checkOutView } = this.state;
    this.setState({
      checkOutView: !checkOutView,
    });
    if (!checkOutView) {
      this.setState({
        checkOutDisplay: 'block',
        checkoutStyle: 'green',
        checkInDisplay: 'none',
        checkInView: false,
        checkinStyle: '',
      });
    } else {
      this.setState({
        checkOutDisplay: 'none',
        checkoutStyle: '',
      });
    }
  }

  handleGuest() {
    const { guestView } = this.state;
    this.setState({
      guestView: !guestView,
    });
    if (!guestView) {
      this.setState({
        guestStyle: 'green',
        dropdownDisplay: 'block',
        arrow: 'm1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z',
      });
    } else {
      this.setState({
        guestStyle: '',
        infantStyle: '',
        dropdownDisplay: 'none',
        arrow: 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z',
      });
    }
  }

  render() {
    const {
      roomPrice, avgReview, reviewCount,
      guestText, infantText, commaText,
      guestStyle, infantStyle, dropdownDisplay,
      arrow, checkInDisplay, checkOutDisplay,
      checkinStyle, checkoutStyle,
    } = this.state;
    return (
      <div styleName="booking-container">
        <div styleName="booking-card">
          <div styleName="price-tag">
            <div className="price">
              <span styleName="room-price">
                <i className="fa fa-usd" />
                {roomPrice}
              </span>
              <span>per night</span>
            </div>
            <div styleName="avg-review">
              <div styleName="star-ratings-css">
                <span styleName="star-ratings-css-top" style={{ width: `${avgReview}%` }}>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </span>
                <span styleName="star-ratings-css-bottom">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </span>
                <span styleName="review-count">{reviewCount}</span>
              </div>
            </div>
          </div>
          <hr styleName="line-breaker" />
          <div className="check-in-info">
            <form styleName="booking-form">
              <div styleName="input-dates">
                <label htmlFor="booking-dates">
                  Dates
                  <div styleName="booking-dates">
                    <div styleName="book-checkin">
                      <input id="checkin" placeholder="Check in" styleName={checkinStyle} onClick={this.handleCheckIn} />
                    </div>
                    <div id="rightarrow">
                      <svg viewBox="0 0 24 24" style={{ height: '24px', width: '24px' }}>
                        <path d="m0 12.5a.5.5 0 0 0 .5.5h21.79l-6.15 6.15a.5.5 0 1 0 .71.71l7-7v-.01a.5.5 0 0 0 .14-.35.5.5 0 0 0 -.14-.35v-.01l-7-7a .5.5 0 0 0 -.71.71l6.15 6.15h-21.79a.5.5 0 0 0 -.5.5z" fillRule="evenodd" />
                      </svg>
                    </div>
                    <div styleName="book-checkout">
                      <input id="checkout" placeholder="Check out" styleName={checkoutStyle} onClick={this.handleCheckOut} />
                    </div>
                  </div>
                </label>
                <DropDownCalendar
                  dropdownDisplay={checkInDisplay}
                  type="checkin"
                />
                <DropDownCalendar
                  dropdownDisplay={checkOutDisplay}
                  type="checkout"
                />
              </div>
              <div styleName="input-guests">
                Guests
                <div styleName="booking-guests">
                  <button type="button" onClick={this.handleGuest}>
                    <span id="guest-count" styleName={guestStyle}>{guestText}</span>
                    <span>{commaText}</span>
                    <span id="infant-count" styleName={infantStyle}>{infantText}</span>
                  </button>
                  <svg id="downarrow" viewBox="0 0 18 18" style={{ height: '16px', width: '16px' }}>
                    <path d={arrow} />
                  </svg>
                </div>
                <Dropdown
                  handleGuest={this.handleGuest}
                  getTotalGuest={this.getTotalGuest}
                  setTotalGuest={this.setTotalGuest}
                  setTotalInfant={this.setTotalInfant}
                  dropdownDisplay={dropdownDisplay}
                />
              </div>
              <Button type="submit" id="booking-btn">Request to book</Button>
            </form>
            <p styleName="booking-short-desc">You won’t be charged yet</p>
          </div>
          <hr styleName="line-breaker" />
          <div styleName="booking-footer">
            <b>This home is on people’s minds.</b>
            <br />
            <p>It’s been viewed 500+ times in the past week.</p>
          </div>
          <div styleName="report-listing">
            <svg
              viewBox="0 0 24 24"
              style={{
                height: '14px', width: '14px', fill: 'rgb(118, 118, 118)', 'margin-right': '5px',
              }}
            >
              <path d="m22.39 5.8-.27-.64a207.86 207.86 0 0 0 -2.17-4.87.5.5 0 0 0 -.84-.11 7.23 7.23 0 0 1 -.41.44c-.34.34-.72.67-1.13.99-1.17.87-2.38 1.39-3.57 1.39-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41a6.35 6.35 0 0 0 -1.19.12c-.87.17-1.79.49-2.72.93-.48.23-.93.47-1.35.71l-.11.07-.17-.49a.5.5 0 1 0 -.94.33l7 20a .5.5 0 0 0 .94-.33l-2.99-8.53a21.75 21.75 0 0 1 1.77-.84c.73-.31 1.44-.56 2.1-.72.61-.16 1.16-.24 1.64-.24.87 0 1.52.11 2.54.38l.4.11c1.39.37 2.26.52 3.57.52 2.85 0 5.29-1.79 5.97-3.84a.5.5 0 0 0 0-.32c-.32-.97-.87-2.36-1.58-4.04zm-4.39 7.2c-1.21 0-2-.13-3.31-.48l-.4-.11c-1.1-.29-1.82-.41-2.79-.41-.57 0-1.2.09-1.89.27a16.01 16.01 0 0 0 -2.24.77c-.53.22-1.04.46-1.51.7l-.21.11-3.17-9.06c.08-.05.17-.1.28-.17.39-.23.82-.46 1.27-.67.86-.4 1.7-.7 2.48-.85.35-.06.68-.1.99-.1.87 0 1.52.11 2.54.38l.4.11c1.38.36 2.25.51 3.56.51 1.44 0 2.85-.6 4.18-1.6.43-.33.83-.67 1.18-1.02a227.9 227.9 0 0 1 1.85 4.18l.27.63c.67 1.57 1.17 2.86 1.49 3.79-.62 1.6-2.62 3.02-4.97 3.02z" />
            </svg>
            <span>Report this listing</span>
          </div>
        </div>
      </div>
    );
  }
}

export default CSSModules(Booking, styles);

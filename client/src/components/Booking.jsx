import React from 'react';
import axios from 'axios';
import CSSModules from 'react-css-modules';
import ReactDOM from 'react-dom';
import { Button } from 'semantic-ui-react';
import Dropdown from './Dropdown';
import styles from '../styles/Booking.css';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomPrice: null,
      reviewCount: null,
      avgReview: null,
      guestView: false,
      totalGuest: 1,
      totalInfant: 0,
      guestText: '1 Guest',
      commaText: '',
      infantText: '',
      guestStyle: '',
      infantStyle: '',
      dropdownDisplay: 'none',
      arrow: 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z',
    };
    this.get = this.get.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.getTotalGuest = this.getTotalGuest.bind(this);
    this.setTotalGuest = this.setTotalGuest.bind(this);
    this.setTotalInfant = this.setTotalInfant.bind(this);
  }

  componentDidMount() {
    const listingId = Math.ceil(Math.random() * 100);
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
    return axios.get(`http://127.0.0.1:3001/listings/${listingId}/reservations`)
      .catch((error) => {
        this.setState({
          avgReview: null,
          reviewCount: null,
          roomPrice: null,
        });
        throw error;
      });
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
      arrow,
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
                    <input id="checkin" placeholder="Dates" />
                  </div>
                </label>
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
        </div>
      </div>
    );
  }
}


export default CSSModules(Booking, styles);



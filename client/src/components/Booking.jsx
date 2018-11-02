import React from 'react';
import axios from 'axios';
import { Button } from 'semantic-ui-react';
import Dropdown from './Dropdown';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomPrice: null,
      reviewCount: null,
      avgReview: null,
      guestView: false,
      totalGuest: 1,
      guestText: '1 Guest',
    };
    this.get = this.get.bind(this);
    this.handleGuest = this.handleGuest.bind(this);
    this.getTotalGuest = this.getTotalGuest.bind(this);
    this.setTotalGuest = this.setTotalGuest.bind(this);
  }

  componentDidMount() {
    const listingId = Math.ceil(Math.random() * 100);
    this.get(listingId);
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
      });
    } else if (newGuest === 1) {
      this.setState({
        guestText: '1 Guest',
      });
    }
  }

  get(listingId) {
    return axios.get(`/listings/${listingId}/reservations`)
      .then((response) => {
        this.setState({
          avgReview: response.data[0].avgReview / 3 * 40,
          reviewCount: response.data[0].reviewCount,
          roomPrice: response.data[0].roomPrice,
        });
      })
      .catch((error) => {
        throw error;
      });
  }

  handleGuest() {
    const { guestView } = this.state;
    this.setState({
      guestView: !guestView,
    });
    document.getElementById('guest-count').classList.toggle('green');
    if (!guestView) {
      // document.body.addEventListener('click', this.handleGuest);
      document.getElementById('drop-down-guest').style.display = 'block';
      document.getElementById('downarrow').firstChild.setAttribute('d', 'm1.71 13.71a1 1 0 1 1 -1.42-1.42l8-8a1 1 0 0 1 1.41 0l8 8a1 1 0 1 1 -1.41 1.42l-7.29-7.29z');
    } else {
      // document.body.removeEventListener('click', this.handleGuest);
      document.getElementById('drop-down-guest').style.display = 'none';
      document.getElementById('downarrow').firstChild.setAttribute('d', 'm16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z');
    }
  }

  render() {
    const {
      roomPrice, avgReview, reviewCount, guestText,
    } = this.state;
    return (
      <div className="booking-container">
        <div className="booking-card">
          <div className="price-tag">
            <div className="price">
              <span id="room-price">
                <i className="fa fa-usd" />
                {roomPrice}
              </span>
              <span>per night</span>
            </div>
            <div className="avg-review">
              <div className="star-ratings-css">
                <span className="star-ratings-css-top" style={{ width: `${avgReview}%` }}>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </span>
                <span className="star-ratings-css-bottom">
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                  <span>&#9733;</span>
                </span>
                <span id="review-count">{reviewCount}</span>
              </div>
            </div>
          </div>
          <hr className="line-breaker" />
          <div className="check-in-info">
            <form className="booking-form">
              <div className="input-dates">
                <label htmlFor="booking-dates">
                  Dates
                  <div id="booking-dates">
                    <input id="checkin" placeholder="Dates" />
                  </div>
                </label>
              </div>
              <div className="input-guests">
                Guests
                <div id="booking-guests">
                  <button type="button" onClick={this.handleGuest}>
                    <span id="guest-count">{guestText}</span>
                  </button>
                  <svg id="downarrow" viewBox="0 0 18 18" style={{ height: '16px', width: '16px' }}>
                    <path d="m16.29 4.3a1 1 0 1 1 1.41 1.42l-8 8a1 1 0 0 1 -1.41 0l-8-8a1 1 0 1 1 1.41-1.42l7.29 7.29z" />
                  </svg>
                </div>
                <Dropdown
                  handleGuest={this.handleGuest}
                  getTotalGuest={this.getTotalGuest}
                  setTotalGuest={this.setTotalGuest}
                />
              </div>
              <Button type="submit" id="booking-btn">Request to book</Button>
            </form>
            <p id="booking-short-desc">You won’t be charged yet</p>
          </div>
          <hr className="line-breaker" />
          <div className="booking-footer">
            <b>This home is on people’s minds.</b>
            <br />
            <p>It’s been viewed 500+ times in the past week.</p>
          </div>
        </div>
      </div>
    );
  }
}

export default Booking;

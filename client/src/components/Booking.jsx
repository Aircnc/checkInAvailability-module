import React from 'react';
import axios from 'axios';
import { Button, Form } from 'semantic-ui-react';

class Booking extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      roomPrice: null,
      reviewCount: null,
      avgReview: null,
    };
    this.get = this.get.bind(this);
  }

  componentDidMount() {
    this.get();
  }

  get() {
    axios.get('/listings/94913e83-4ddc-456c-b0de-4aab177e383c/reservations')
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

  render() {
    const { roomPrice, avgReview, reviewCount } = this.state;
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
            <Form className="booking-form">
              <Form.Field>
                <label htmlFor="booking-dates">
                  Dates
                  <input id="booking-dates" placeholder="Dates" />
                </label>
              </Form.Field>
              <Form.Field>
                <label htmlFor="booking-guests">
                  Guests
                  <input id="booking-guests" placeholder="Guests" />
                </label>
              </Form.Field>
              <Button type="submit" id="booking-btn">Request to book</Button>
            </Form>
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

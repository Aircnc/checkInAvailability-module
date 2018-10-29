import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const Booking = () => (
  <div className="booking-container">
    <div className="booking-card">
      <div className="price-tag">
        <div className="price">
          <span className="room-price">$73 </span>
          <span> per night</span>
        </div>
        <div className="avg-review">
          213 stars
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


export default Booking;

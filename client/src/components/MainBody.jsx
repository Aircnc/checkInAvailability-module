import React from 'react';
// import Desc from './Desc';
import Booking from './Booking';
import Aval from './Aval';
// import Reviews from './Reviews';

const MainBody = () => (
  <div className="main-body-container">
    <div className="desc-container" id="description" />
    <Booking />
    <Aval />
    <div className="reviews-container" id="reviews" />
  </div>
);

export default MainBody;

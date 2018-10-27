import React from 'react';
import Desc from './Desc';
import Booking from './Booking';
import Aval from './Aval';
import Reviews from './Reviews';

const MainBody = () => (
  <div className="main-body-container">
    <Desc />
    <Booking />
    <Aval />
    <Reviews />
  </div>
);

export default MainBody;

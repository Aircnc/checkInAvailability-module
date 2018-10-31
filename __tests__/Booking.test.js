/* eslint react/jsx-filename-extension: [0] */

import Booking from '../client/src/components/Booking';

const React = require('react');
const Enzyme = require('enzyme');

describe('Booking Component', () => {
  const wrapper = Enzyme.shallow(<Booking />);
  it('should have a state roomPrice', () => {
    expect(wrapper.state('roomPrice')).toBe(null);
  });

  it('should have a state reviewCount', () => {
    expect(wrapper.state('reviewCount')).toBe(null);
  });

  it('should have a state avgReview', () => {
    expect(wrapper.state('avgReview')).toBe(null);
  });

  it('should have className booking-container', () => {
    expect(wrapper.hasClass('booking-container'));
  });

  it('should have a child with className booking-card', () => {
    expect(wrapper.childAt(0).hasClass('booking-card'));
  });
});

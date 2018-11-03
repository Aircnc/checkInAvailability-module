/* eslint react/jsx-filename-extension: [0] */
import Booking from '../client/src/components/Booking';

jest.mock('axios');
const React = require('react');
const Enzyme = require('enzyme');
const axios = require('axios');

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

  it('should send get request and render data based on response', (done) => {
    expect.assertions(1);
    axios.get('/listings/1/reservations')
      .then((data) => {
        expect(data[0].reservations).toHaveLength(8);
        done();
      });
  });

  it('should have a working method getTotalGuest', () => {
    expect(wrapper.instance().getTotalGuest()).toBe(wrapper.state('totalGuest'));
  });

  it('should have a working method setTotalGuest', () => {
    const currentGuestCount = wrapper.state('totalGuest');
    for (let i = 1; i < 4; i += 1) {
      wrapper.instance().setTotalGuest('plus');
      expect(wrapper.state('totalGuest')).toBe(currentGuestCount + i);
    }
    for (let i = 2; i >= 0; i -= 1) {
      wrapper.instance().setTotalGuest('minus');
      expect(wrapper.state('totalGuest')).toBe(currentGuestCount + i);
    }
  });

  it('should have a working method setTotalInfant', () => {
    const currentInfantCount = wrapper.state('totalInfant');
    for (let i = 1; i < 5; i += 1) {
      wrapper.instance().setTotalInfant('plus');
      expect(wrapper.state('totalInfant')).toBe(currentInfantCount + i);
    }
    for (let i = 3; i > 0; i -= 1) {
      wrapper.instance().setTotalInfant('minus');
      expect(wrapper.state('totalInfant')).toBe(currentInfantCount + i);
    }
  });

  it('should have a working method get', (done) => {
    wrapper.instance().get(1)
      .then((response) => {
        expect(response[0].reservations).toHaveLength(8);
        done();
      })
      .catch((error) => {
        expect(error).not.toBeNull();
        done();
      });
  });

  it('should have a working method handleGuest', () => {
    const currentGuestView = wrapper.state('guestView');
    wrapper.instance().handleGuest();
    expect(wrapper.state('guestView')).toBe(!currentGuestView);
    wrapper.instance().handleGuest();
    expect(wrapper.state('guestView')).toBe(currentGuestView);
  });
});

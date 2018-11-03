/* eslint react/jsx-filename-extension: [0] */

import Dropdown from '../client/src/components/Dropdown';

const React = require('react');
const Enzyme = require('enzyme');

describe('Dropdown Component', () => {
  const wrapper = Enzyme.shallow(<Dropdown props={{}} />);
  it('should have a div with class adult-guest', () => {
    expect(wrapper.find('.adult-guest').exists()).toBe(true);
  });

  it('should have 3 GuestBtnGroup components', () => {
    expect(wrapper.find('GuestBtnGroup').length).toBe(3);
  });
});

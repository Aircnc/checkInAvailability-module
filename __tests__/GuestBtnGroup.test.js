/* eslint react/jsx-filename-extension: [0] */

import GuestBtnGroup from '../client/src/components/GuestBtnGroup';

const React = require('react');
const Enzyme = require('enzyme');

describe('GuestBtnGroup Component', () => {
  const wrapper = Enzyme.shallow(<GuestBtnGroup />);
  it('should have props', () => {
    expect(wrapper.find('button').exists()).toBe(true);
  });
});

/* eslint react/jsx-filename-extension: [0] */
import Calendar from '../client/src/components/Calendar';

const React = require('react');
const Enzyme = require('enzyme');

describe('Calendar Component', () => {
  it('should have currentYear state set to 2018 by default', () => {
    const wrapper = Enzyme.shallow(<Calendar />);
    expect(wrapper.state('currentYear')).toBe(2018);
  });
});

/* eslint react/jsx-filename-extension: [0] */

import sinon from 'sinon';
import GuestBtnGroup from '../client/src/components/GuestBtnGroup';

const React = require('react');
const Enzyme = require('enzyme');

describe('GuestBtnGroup Component', () => {
  const wrapper = Enzyme.shallow(<GuestBtnGroup number={5} />);
  it('should have props', () => {
    expect(wrapper.find('button').length).toBe(2);
  });

  it('should have a disabled state initially set to true', () => {
    expect(wrapper.state('disabled')).toBe(true);
  });

  it('should update state when calling componentDidMount', () => {
    wrapper.update();
    expect(wrapper.state('num')).toBe(5);
  });

  xit('should fire handleMinus when clicked on minus-sign button', () => {
    const handleMinus = sinon.spy();
    GuestBtnGroup.prototype.handleMinus = handleMinus;
    wrapper.find('.round-btn-minus').simulate('click');
    expect(handleMinus).to.have.property('callCount', 1);
  });
});

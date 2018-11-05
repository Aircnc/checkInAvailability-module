/* eslint react/jsx-filename-extension: [0] */

import GuestBtnGroup from '../client/src/components/GuestBtnGroup';

const React = require('react');
const Enzyme = require('enzyme');

describe('GuestBtnGroup Component', () => {
  it('should have props', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup />);
    expect(wrapper.find('button').length).toBe(2);
  });

  it('should have a disabled state initially set to true', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup />);
    expect(wrapper.state('disabled')).toBe(true);
  });

  it('should update state when calling componentDidMount', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={5} />);
    expect(wrapper.state('num')).toBe(5);
  });

  it('should have a working method handlePlus for adult and children', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={1} />);
    expect(wrapper.state('num')).toBe(1);
    wrapper.instance().handlePlus();
    expect(wrapper.state('num')).toBe(2);
    wrapper.instance().handlePlus();
    expect(wrapper.state('num')).toBe(3);
  });

  it('should have a working method handlePlus for infants', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={0} type="infant-minus" />);
    const currentNum = wrapper.state('num');
    for (let i = 1; i < 5; i += 1) {
      wrapper.instance().handlePlus();
      expect(wrapper.state('num')).toBe(currentNum + i);
    }
  });

  it('should have a working method handleMinus for adult', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={3} type="adult-minus" />);
    expect(wrapper.state('num')).toBe(3);
    wrapper.instance().handleMinus();
    expect(wrapper.state('num')).toBe(2);
    wrapper.instance().handleMinus();
    expect(wrapper.state('num')).toBe(1);
    wrapper.instance().handleMinus();
    expect(wrapper.state('num')).toBe(1);
  });

  it('should have a working method handleMinus for child', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={3} type="child-minus" />);
    expect(wrapper.state('num')).toBe(3);
    wrapper.instance().handleMinus();
    expect(wrapper.state('num')).toBe(2);
    wrapper.instance().handleMinus();
    expect(wrapper.state('num')).toBe(1);
    wrapper.instance().handleMinus();
    expect(wrapper.state('num')).toBe(0);
  });

  it('should have a working method handleMinus for infant', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={5} type="infant-minus" />);
    expect(wrapper.state('num')).toBe(5);
    for (let i = 4; i >= 0; i -= 1) {
      wrapper.instance().handleMinus();
      expect(wrapper.state('num')).toBe(i);
    }
  });

  it('should fire handleMinus when clicked on minus-sign button', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={1} type="adult-minus" />);
    const spy = jest.spyOn(wrapper.instance(), 'handleMinus');
    wrapper.instance().handlePlus();
    wrapper.find('.round-btn-minus').simulate('click');
    expect(spy).toBeCalledTimes(1);
  });

  it('clicked on minus-sign button updates the state', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={1} type="adult-minus" />);
    expect(wrapper.state('num')).toBe(1);
    wrapper.instance().handlePlus();
    expect(wrapper.state('num')).toBe(2);
    wrapper.find('.round-btn-minus').simulate('click');
    expect(wrapper.state('num')).toBe(1);
  });

  it('should fire handlePlus when clicked on plus-sign button', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={1} />);
    const spy = jest.spyOn(wrapper.instance(), 'handlePlus');
    wrapper.instance().handleMinus();
    wrapper.find('.round-btn-plus').simulate('click');
    expect(spy).toBeCalledTimes(1);
  });

  it('clicked on plus-sign button updates the state', () => {
    const wrapper = Enzyme.shallow(<GuestBtnGroup number={1} />);
    expect(wrapper.state('num')).toBe(1);
    wrapper.find('.round-btn-plus').simulate('click');
    expect(wrapper.state('num')).toBe(2);
  });
});

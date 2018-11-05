import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/GuestBtnGroup.css';

class GuestBtnGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      num: 0,
      disabled: true,
    };
    this.handleMinus = this.handleMinus.bind(this);
    this.handlePlus = this.handlePlus.bind(this);
  }

  componentDidMount() {
    const { number } = this.props;
    this.setState({
      num: number,
    });
  }

  handlePlus() {
    const { num } = this.state;
    const {
      type, getTotalGuest, setTotalGuest, setTotalInfant,
    } = this.props;
    const totalGuest = getTotalGuest();
    if (type !== 'infant-minus') {
      if (totalGuest < 3) {
        this.setState({
          num: num + 1,
          disabled: false,
        });
        setTotalGuest('plus');
      }
    } else if (num < 5) {
      this.setState({
        num: num + 1,
        disabled: false,
      });
      setTotalInfant('plus');
    }
  }

  handleMinus() {
    const { num } = this.state;
    const { type, setTotalGuest, setTotalInfant } = this.props;
    if (num > 1) {
      this.setState({
        num: num - 1,
      });
      if (type !== 'infant-minus') {
        setTotalGuest('minus');
      } else {
        setTotalInfant('minus');
      }
    } else if (num === 1 && type === 'adult-minus') {
      this.setState({
        disabled: true,
      });
    } else if (num === 1) {
      this.setState({
        num: num - 1,
      });
      if (type !== 'infant-minus') {
        setTotalGuest('minus');
      } else {
        setTotalInfant('minus');
      }
    } else {
      this.setState({
        disabled: true,
      });
    }
  }

  render() {
    const { num, disabled } = this.state;
    return (
      <div styleName="guest-count-btn">
        <span styleName="btn-span-minus">
          <button type="button" disabled={disabled} styleName="round-btn" className="round-btn-minus" onClick={this.handleMinus}>
            <svg styleName="minus-sign" viewBox="0 0 24 24" style={{ height: '16px', width: '16px' }}>
              <rect height="2" rx="1" width="12" x="6" y="11" style={{ fill: '#147B81' }} />
            </svg>
          </button>
        </span>
        <span styleName="guest-count-num">{num}</span>
        <span styleName="btn-span-plus">
          <button type="button" styleName="round-btn" className="round-btn-plus" onClick={this.handlePlus}>
            <svg styleName="plus-sign" viewBox="0 0 24 24" style={{ height: '16px', width: '16px' }}>
              <rect height="2" rx="1" width="12" x="6" y="11" style={{ fill: '#147B81' }} />
              <rect height="12" rx="1" width="2" x="11" y="6" style={{ fill: '#147B81' }} />
            </svg>
          </button>
        </span>
      </div>
    );
  }
}

GuestBtnGroup.propTypes = {
  number: PropTypes.number,
  type: PropTypes.string,
  getTotalGuest: PropTypes.func,
  setTotalGuest: PropTypes.func,
  setTotalInfant: PropTypes.func,
};

GuestBtnGroup.defaultProps = {
  number: 0,
  type: 'adult-minus',
  getTotalGuest: () => 1,
  setTotalGuest: () => {

  },
  setTotalInfant: () => {

  },
};

export default CSSModules(GuestBtnGroup, styles);

import React from 'react';
import PropTypes from 'prop-types';
import CSSModules from 'react-css-modules';
import styles from '../styles/Calendar.css';

class Calendar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentYear: 2018,
      currentMonth: 'November',
    };
    this.renderRows = this.renderRows.bind(this);
  }

  renderRows() {
    const { currentYear } = this.state;
    const currentRows = [];
    for (let i = 0; i < 5; i += 1) {
      const row = [];
      for (let j = 0; j < 7; j += 1) {
        row.push(j + i * 7 + currentYear - 2000);
      }
      currentRows.push(row);
    }
    const rowDivs = currentRows.map((row) => {
      const rowDiv = row.map(item => (<td styleName="calendar-date">{item}</td>));
      return (<tr styleName="calendar-row">{rowDiv}</tr>);
    });
    return (
      <table className="calendar-table">
        <tbody>
          {rowDivs}
        </tbody>
      </table>
    );
  }

  render() {
    const { showLeftBtn, showRightBtn } = this.props;
    const { currentYear, currentMonth } = this.state;
    return (
      <div styleName="calendar">
        <div styleName="calendar-content">
          <div styleName="calender-nav-bar">
            <div styleName="previous-month" style={{ display: `${showLeftBtn}` }}>
              <button type="button" style={{ height: '32px', width: '40px' }}>
                <svg
                  viewBox="0 0 1000 1000"
                  style={{ height: '20px', width: '20px', fill: 'rgb(118, 118, 118)' }}
                >
                  <path d="M336.2 274.5l-210.1 210h805.4c13 0 23 10 23 23s-10 23-23 23H126.1l210.1 210.1c11 11 11 21 0 32-5 5-10 7-16 7s-11-2-16-7l-249.1-249c-11-11-11-21 0-32l249.1-249.1c21-21.1 53 10.9 32 32z" />
                </svg>
              </button>
            </div>
            <strong styleName="calendar-month-year">
              {currentMonth}
              &nbsp;
              {currentYear}
            </strong>
            <div styleName="next-month" style={{ display: `${showRightBtn}` }}>
              <button type="button" style={{ height: '32px', width: '40px' }}>
                <svg
                  viewBox="0 0 1000 1000"
                  style={{ height: '20px', width: '20px', fill: 'rgb(118, 118, 118)' }}
                >
                  <path d="M694.4 242.4l249.1 249.1c11 11 11 21 0 32L694.4 772.7c-5 5-10 7-16 7s-11-2-16-7c-11-11-11-21 0-32l210.1-210.1H67.1c-13 0-23-10-23-23s10-23 23-23h805.4L662.4 274.5c-21-21.1 11-53.1 32-32.1z" />
                </svg>
              </button>
            </div>
          </div>
          <div styleName="calendar-headers">
            <span styleName="calendar-header-day">Su</span>
            <span styleName="calendar-header-day">Mo</span>
            <span styleName="calendar-header-day">Tu</span>
            <span styleName="calendar-header-day">We</span>
            <span styleName="calendar-header-day">Th</span>
            <span styleName="calendar-header-day">Fr</span>
            <span styleName="calendar-header-day">Sa</span>
          </div>
          <div styleName="calendar-body">
            {this.renderRows()}
          </div>
        </div>
      </div>
    );
  }
}

Calendar.propTypes = {
  showRightBtn: PropTypes.string,
  showLeftBtn: PropTypes.string,
};

Calendar.defaultProps = {
  showRightBtn: 'flex',
  showLeftBtn: 'flex',
};

export default CSSModules(Calendar, styles);

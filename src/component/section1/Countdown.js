import "./countdown.css";
import moment from "moment";
import React from "react";
class Countdown extends React.Component {
  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = moment(timeTillDate, timeFormat);
      const now = moment();
      const countdown = moment(then - now);
      const days = countdown.format("D");
      const hours = countdown.format("HH");
      const minutes = countdown.format("mm");
      const seconds = countdown.format("ss");
      console.log(then,now)
      this.setState({ days, hours, minutes, seconds });
    }, 1000);
  }

  componentWillUnmount() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  render() {
    const { days, hours, minutes, seconds } = this.state;

    if (!seconds) {
      return null;
    }

    return (
      <div>
        <div className="countdown-wrapper countdown-content">
          {days && (
            <div className="countdown-container">
              <div className="countdown-item">{days}</div>
              <span className="utility-content-subtitle countdown-item-subtitle">Days</span>
            </div>
          )}
          <span className="counter-seperator">:</span>
          {hours && (
            <div className="countdown-container">
              <div className="countdown-item">{hours}</div>
              <span className="utility-content-subtitle countdown-item-subtitle">Hours</span>
            </div>
          )}
          <span className="counter-seperator">:</span>
          {minutes && (
            <div className="countdown-container">
              <div className="countdown-item">
                {/* <SVGCircle radius={minutesRadius} /> */}
                {minutes}
              </div>
              <span className="utility-content-subtitle countdown-item-subtitle">Minutes</span>
            </div>
          )}
          <span className="counter-seperator">:</span>

          {seconds && (
            <div className="countdown-container">
              <div className="countdown-item">
                {/* <SVGCircle radius={secondsRadius} /> */}
                {seconds}
              </div>
              <span className="utility-content-subtitle countdown-item-subtitle">Seconds</span>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default Countdown;

import "./countdown.css";
import moment from "moment-timezone";
import React from "react";
import {items} from "../../data's/utility"

import { Link } from "react-router-dom";

class Countdown extends React.Component {

  state = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    link:""
  };

  componentDidMount() {
    this.interval = setInterval(() => {
      const { timeTillDate, timeFormat } = this.props;
      const then = timeTillDate
      const now = moment.tz();
      const countdown = moment.duration(moment.tz("2023-02-03T17:30:00","Asia/Kolkata").diff(now));
      const days = countdown._data.days;
      const hours = countdown._data.hours;
      const minutes = countdown._data.minutes;
      const seconds = countdown._data.seconds;
      this.setState({ days, hours, minutes, seconds });
      console.log(hours)
    }, 1000);
    
    let data = []

    for (const property in items) {
      // if (items[property]['phase'] === 2) {
        data.push(items[property]['name'])
      // }
    }

    data = data.map((item) => item.split(' ').join('_'))
    // console.log(data)

    const link =Math.floor(Math.random() * data.length);
    // console.log(data[link])
    this.setState({link:"/" + data[link]})

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
{/* 
            <div className="countdown-container">
              <div className="countdown-item">{days}</div>
              <span className="utility-content-subtitle countdown-item-subtitle">Days</span>
            </div>

          <span className="counter-seperator">:</span>
          
            <div className="countdown-container">
              <div className="countdown-item">{hours}</div>
              <span className="utility-content-subtitle countdown-item-subtitle">Hours</span>
            </div>
          
          <span className="counter-seperator">:</span>

            <div className="countdown-container">
              <div className="countdown-item">
              
                {minutes}
              </div>
              <span className="utility-content-subtitle countdown-item-subtitle">Minutes</span>
            </div>

          <span className="counter-seperator">:</span>


            <div className="countdown-container">
              <div className="countdown-item">
                {seconds}
              </div>
              <span className="utility-content-subtitle countdown-item-subtitle">Seconds</span>
            </div> */}

          <Link to={`/products`} className='header-button video-bg-button'>BUY NOW</Link>

        </div>
      </div>
    );
  }
}

export default Countdown;

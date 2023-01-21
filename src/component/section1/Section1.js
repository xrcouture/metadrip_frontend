import React from 'react'
import './section1.css'
import Countdown from './Countdown';

function Section1() {
  return (
    <div className='section1-container' >
      <div className='section1-container-content'>
      <div className='section1-container-1 row m-0'>
        <div className='col-md-7 col-sm-7 col-xs-7'>
        <h1 className='countdown-content countdown-content-1'>Pre - Mint Sale begins at<span className='countdown-content-star'>*</span></h1>
        </div>
        <div className='col-md-5 col-sm-5 col-xs-5'>
        <h1 className='countdown-content text-center'>30, January 2023</h1>
        </div>
      </div>
      <div className='section1-container-2 row mt-4'>
        <div className='col-md-8 col-sm-8 col-xs-8 col-lg-8'>
        <div className='container-left'>
                <Countdown 
                  timeTillDate="01 30 2023, 6:00 am" 
                  timeFormat="MM DD YYYY, h:mm a" 
                />
            </div>
        </div>
        <div className='col-md-4 col-sm-4 col-xs-4 col-lg-4'>
          <button className='section1-container-2-button'>Whitelist</button>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
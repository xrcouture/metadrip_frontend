import React, { useState,useEffect } from 'react'
import './section1.css'
import Countdown from './Countdown';
import video from '../../assets/videobg.mp4'
import videoPortrait from '../../assets/V4_Vid_Portrait.mp4';


function Section1() {

  return (
    <div className='section1-container' id='top'>
     

      <video autoPlay={true} loop muted className="video-bg-section1 d-none d-md-block">
        <source src="https://rakesh-testbucket.s3.ap-south-1.amazonaws.com/Metadrip/videobg.mp4"/>
      </video>

      <video autoPlay={true} loop muted className="video-bg-section1 d-block d-md-none">
        <source src="https://rakesh-testbucket.s3.ap-south-1.amazonaws.com/Metadrip/V4_Vid_Portrait.mp4" />
        </video>
      
    
      <div className='section1-container-content'>
        <div className='section1-container-1 m-0'>
          <div className=''>
            <h1 className='countdown-content countdown-content-1'>Pre - Mint Sale begins in<span className='countdown-content-star'>*</span></h1>
          </div>
          <Countdown
            timeTillDate="01 30 2023, 6:00 am"
            timeFormat="MM DD YYYY, h:mm a"
          />
          <div className=''>
            <h1 className='countdown-content countdown-date text-center'>30, January 2023</h1>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
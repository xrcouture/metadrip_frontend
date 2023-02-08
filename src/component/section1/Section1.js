import React, { lazy, Suspense } from 'react'
import Countdown from './Countdown';
import moment from 'moment-timezone';
import './section1.css'

const VideoContainer = lazy(() => import('../VideoContainer/VideoContainer'));

function Section1() {

  return (
    <div className='section1-container' id='top'>

      <Suspense>
        <VideoContainer data={{
          autoplay : true,
          classnames : "video-bg-section1 d-none d-md-block",
          src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/V_T6_1920x1080.mp4"
        }} />
      </Suspense>

      <Suspense>
        <VideoContainer data={{
          autoplay : true,
          classnames : "video-bg-section1 d-block d-md-none",
          src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/T6_+1080x1920.mp4"
        }} />
      </Suspense>
    
      <div className='section1-container-content'>
        <div className='section1-container-1 m-0'>
          <div className=''>
            {/* <h1 className='countdown-content countdown-content-1'>Pre - Mint Sale ends in<span className='countdown-content-star'>*</span></h1> */}
          </div>
          <Countdown
            // timeTillDate="February 1st 2023, 12:00:00 pm"
            timeTillDate = {moment.tz("2023-02-02T17:30:00","Asia/Kolkata")}
            timeFormat="MMMM Do YYYY, h:mm:ss a"
          />
          <div className=''>
            {/* <h1 className='countdown-content countdown-date text-center'>3rd February, 2023</h1> */}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section1
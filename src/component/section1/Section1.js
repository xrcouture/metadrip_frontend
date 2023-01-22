import React, { useState } from 'react'
import './section1.css'
import Countdown from './Countdown';
import video from '../../assets/videobg.mp4'
import ReactPlayer from 'react-player'

function Section1() {
  const [bg, setBg] = useState(false)
  return (
    <div className='section1-container' >
      {/* <video src={video}  autoPlay loop ></video> */}
      <video autoPlay={true} loop muted className="video-bg-section1">
        <source src={video} />
        {/* <source src="video-bar.ogv"/> */}
      </video>
      {/* <ReactPlayer url="../../assets/videobg.mp4" autoPlay /> */}
      {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/z8Z3a7JWsiI?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
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
        {/* <div className='col-md-5 col-sm-5 col-xs-5 col-lg-5 section2-container2-right'>
            <div className='btn-container'>
              <button className='section1-container-2-button'>
                <a href='https://heymint.xyz/meta-drip-xrc' target="_blank" style={{ fontFamily: "Druk Wide Bold" }}>
                  Whitelist</a>
              </button>
            </div>
          </div> */}
      </div>
    </div>
  )
}

export default Section1
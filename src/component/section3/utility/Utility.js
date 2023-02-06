import React,{useState,useEffect} from 'react'
import './utility.css'
// import image1 from '../../../assets/utility-bg.png'
// import image2 from '../../../assets/section3-1.png'

function Utility() {

  const image1 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/utility-bg.png'
  const image2 = 'https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/section3-1.png'

  return (
    <div className='utility'>
        <img src={image2} alt="" className="utility-bg utility-bg-mobile d-sm-block d-md-none"/>
        <img src={image1} alt="" className="utility-bg d-none d-md-block" />
        <div className='utility-container'>
        <h1 className='utility-title text-right section2-title-left' style={{fontFamily:"Clash Display Bold"}}>Utilities</h1>
        <p className='utility-subtitle text-right section2-subtitle-left' style={{fontFamily:"Clash Display Light", marginTop: "2vw"}}>Collectors get access to exclusive Metaverse wearables, private events, airdrops, an engaging community and more.
        </p>
        </div>
    </div>
  )
}

export default Utility
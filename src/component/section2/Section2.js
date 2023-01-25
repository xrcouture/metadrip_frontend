import React from 'react'
import './section2.css'

function Section2() {
  return (
    <div className='section-two-container'>
        <div className='row flex-column-reverse flex-md-row'>
            <div className='col-md-6 subtitle' style={{fontFamily:"Clash Display Light"}}> 
           <b style={{fontFamily:"Clash Display Medium"}}> META DRIP</b>  is XR Couture’s most ambitious multi-utility Digital Fashion NFT project. The 12-look digital wearables collection created by our cutting edge 3D artists was successfully launched at Decentraland's inaugural Metaverse Fashion Week and was featured in the Wall Street Journal and Vogue Business.
            </div>
            <div className='col-md-6 text-right align-items-center align-items-md-end title d-flex justify-content-center flex-column section-2-title' style={{fontFamily:"Clash Display Medium"}}>
                <p className='text-right title' style={{fontFamily:"Clash Display Medium"}}>
                <span className='section2-title-quote'>“ </span>
                So many metaverses</p>
                <p className='title text-right' style={{fontFamily:"Clash Display Medium"}}>So little interoperability.</p>
                <p className='section2-right-small ' style={{fontFamily:"Clash Display Light"}}>- Coin telegraph , 2022.</p>
            </div>

        </div>
    </div>
  )
}

export default Section2
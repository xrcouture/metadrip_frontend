import React from 'react'
import Header from '../component/header/Header'
import './Assets.css'
import asset from '../assets/asset-bg.png'
import assetbg from '../assets/asset-profile.png'

function Assets() {
  return (
    <div className='asset-page'>
        <Header />
        <div className='asset-container'>
        <div>
            <img src={asset} alt='asset' className='asset-bg' />
            <div className="profile-container">
                <img src={assetbg} alt='assetbg' className='asset-profile' />
                <div>
                <h1 style={{color:"white", fontFamily:"Clash Display Light"}}  className="text-profile-name">Nishanth</h1>
                <p style={{color:"#470D62"}} className="text-profile-id">0abxcedfrffde.......</p>
                </div>
            </div>
        </div>
        <h1 className='text-center' style={{fontFamily:"Clash Display Medium", color:"white"}}>Assets</h1>
        </div>
    </div>
  )
}

export default Assets
import React from 'react'
import './header.css'
import headerlogo from '../../assets/xrc.png'

function Header() {
  return (
    <div className='header-container' id=''>
        <a href="#top">
          <img src={headerlogo} alt="" className="header-logo" />
        </a>
        <span className='header-button register-text d-none d-md-block' style={{position: "absolute", right: "12%", color: "rgb(174 171 171)", fontFamily:"Druk Wide Medium", background: "none", opacity: "0.8"}}>Register for</span>
        <a href='https://heymint.xyz/meta-drip-xrc' className='header-button text-center' target={'_blank'} style={{fontFamily:"Druk Wide Medium"}}>
          Whitelist</a>
    </div>
  )
}

export default Header
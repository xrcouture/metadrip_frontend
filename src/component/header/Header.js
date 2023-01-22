import React from 'react'
import './header.css'
import headerlogo from '../../assets/header_logo.png'

function Header() {
  return (
    <div className='header-container' id='top'>
        <img src={headerlogo} alt="" className="header-logo" />
        <a href='https://heymint.xyz/meta-drip-xrc' className='header-button text-center' style={{fontFamily:"Druk Wide bold"}}>
          Whitelist</a>
    </div>
  )
}

export default Header
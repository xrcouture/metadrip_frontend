import React from 'react'
import './header.css'
import headerlogo from '../../assets/header_logo.png'

function Header() {
  return (
    <div className='header-container' id='top'>
        <img src={headerlogo} alt="" className="header-logo" />
        <button className='header-button text-center'>Connect Wallet</button>
    </div>
  )
}

export default Header
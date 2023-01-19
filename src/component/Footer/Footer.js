import React from 'react'
import './footer.css'
import { GrInstagram } from 'react-icons/gr';
import { FiGlobe } from 'react-icons/fi';
import xrlogo from '../../assets/xr_logo.png'

function Footer() {
  return (
    <div className='footer-container row'>
    <div className='col-md-8  footer-section-1'>
        <div className='row h-100'>
        <div className='col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-6 h-100'>
        <div>
        <h1 className='content-footer-about-header'>About</h1>
        </div>
        <div className='footer-social-container'>

            <div className='social-icon-1'>
            <GrInstagram size={56} color="white" className='icon-footer'  />
            <p className='mt-4 social-content'>@xr.couture</p></div>


            <div className='social-icon-1'><FiGlobe size={56} color="white" className='icon-footer' />
            <p className='mt-4 social-content'>xrcouture.com</p></div>

        </div>
       
        <div className='terms-container'>
            <p className='terms-text'>FAQ</p>
            <p className='terms-text'>Terms & Conditions</p>
            <p className='terms-text'>Privacy Policy</p>
        </div>
    </div>
    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-6 col-xs-6 footer-logo-container'>
        <img src={xrlogo} alt="" className='footer-img'/>
        <p className='logo-font'>All Rights Reserved. TM</p>
    </div>
        </div>
    
    </div>
    <div className='col-md-4  support-section'>
        <div className='row w-100'>
        <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 support-container'>
        <h1 className="support-footer-header text-center">Support</h1>
        <div className='footer-support-container'>
            <h1 className='footer-support-title'>Hi,</h1>
            <p className='footer-support-subtitle'>Any queries, Pls drop <br/> your email ID Down <br />Below, We’ll get back to<br/> you....</p>
            <input type='text' className='footer-input'  placeholder='Type your email id'/>
        </div>
    </div>
        </div>
    </div>
    

    </div>
  )
}

export default Footer
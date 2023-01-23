import React, { useEffect, useState } from 'react'
import './footer.css'
import xrlogo from '../../assets/xr_logo.png'
import instagramLogo from '../../assets/instagram.png';
import websiteLogo from '../../assets/website.png';
import { GrSend } from 'react-icons/gr';
import { RxTwitterLogo,RxDiscordLogo } from 'react-icons/rx';
import {FaLinkedinIn} from 'react-icons/fa'

import axios from "axios";

const baseURL = "https://xrcapi.onrender.com/query/set";

function Footer() {

    const [formValue, setformValue] = React.useState({
        email: '',
        query: ''
      });

    const handleSubmit = () => {
        axios
        .post(baseURL, {
          email: formValue.email,
          query: formValue.query
        })
    }

    const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }

    const [msg,setMsg]=useState("")
    const [email,setEmail] = useState("")
    // console.log(msg, email)
    const fun = () =>{
        const textarea = document.querySelector('.footer-textarea')
        textarea[0].focus()
    }
    const [text,setText] = useState("none")
    useEffect(()=>{
            document.getElementsByTagName('textarea')[0].focus();
    },[text])
    return (
        <div className='footer-container row'>
            <div className='col-md-8  footer-section-1'>
                <div className='row h-100'>
                    <div className='col-md-7 col-lg-7 col-xl-7 col-sm-7 col-xs-8 h-100' >
                        <div>
                            <span className='content-footer-about-header'>Socials</span>
                        </div>
                        <div className='footer-social-container'>

                            <div className='social-icon-1'>
                                <a href='https://www.instagram.com/xr.couture/' target="_blank" style={{textDecoration:"none"}}>
                                <img className='icon-footer' src={instagramLogo} alt='Instagram'></img>
                                </a>
                            </div>
                            <div className='social-icon-1'>
                                <a href='https://www.linkedin.com/company/xrcouture/' target="_blank" style={{textDecoration:"none"}}><FaLinkedinIn color='#EDE9E9' size={50} className='icon-footer'/></a>

                                  </div>
                            {/* https://www.instagram.com/xr.couture/ */}
                            <div className='social-icon-1'>
                                <a href='https://twitter.com/XRCouture' target="_blank" style={{textDecoration:"none"}}><RxTwitterLogo color='#EDE9E9' size={50} className='icon-footer'/></a>

                                  </div>
                            {/* https://twitter.com/XRCouture */}   
                            <div className='social-icon-1'>
                                <a href='https://discord.gg/zHJ3UA5CeR' target="_blank" style={{textDecoration:"none"}}>
                                <RxDiscordLogo color='#EDE9E9' size={50} className='icon-footer'/>
                                </a>
                            </div>
                        </div>
                            <div>
                                <h1 className='logo-font w-100 ' style={{textAlign:"left"}} > For press queries contact, hello@xcouture.com</h1>
                            </div>
                    </div>
                    <div className='col-md-5 col-lg-5 col-xl-5 col-sm-5 col-xs-4 footer-logo-container'>
                        <img src={xrlogo} alt="" className='footer-img' />
                        <p className='logo-font'>All Rights Reserved. &#8482;</p>
                    </div>
                </div>
            </div>

            <div className='col-md-4  support-section'>
                <div className='row w-100'>
                    <div className='col-md-12 col-lg-12 col-xl-12 col-sm-12 col-xs-12 support-container'>
                        <h1 className="content-footer-about-header">Support</h1>
                        <div className='footer-support-container' onClick={(e)=> {
                            e.preventDefault()
                            setText("block")
                            
                    }}>
                            <h1 className='footer-support-title mt-2' style={{display:text=="none"?"block":"none"}}>Hi,</h1>
                            <p className='footer-support-subtitle text-center' style={{display:text=="none"?"block":"none"}}>Any queries, Pls drop <br /> your email ID Down <br />Below, We’ll get back to<br /> you....</p>
                            <form onSubmit={()=>{
                                console.log(msg,email)
                                setEmail("")
                                setMsg("")
                                }}>
                            <textarea className="w-80 h-80 footer-textarea footer-support-subtitle" required="Query is required" style={{display:text}} name="query" value={formValue.query} onChange={handleChange}/>
                            <div class="webflow-style-input">
                                <input class="" type="email"required="Email id is required" placeholder='Type your email id' name='email' value={formValue.email} onChange={handleChange}></input>
                                <button onClick={handleSubmit} type="submit"><i class="fa fa-paper-plane"></i></button>
                            </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
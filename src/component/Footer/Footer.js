import React, { useEffect, useState } from 'react'
import './footer.css'
import xrlogo from '../../assets/xr_logo.png'
import instagramLogo from '../../assets/instagram.png';
import websiteLogo from '../../assets/website.png';
import { GrSend } from 'react-icons/gr';
import { RxTwitterLogo,RxDiscordLogo } from 'react-icons/rx';
import {FaLinkedinIn} from 'react-icons/fa'

function Footer() {
    const [msg,setMsg]=useState("")
    const [email,setEmail] = useState("")
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
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-7 col-xs-8 h-100'>
                        <div>
                            <span className='content-footer-about-header'>About</span>
                        </div>
                        <div className='footer-social-container'>

                            <div className='social-icon-1'>
                                <a href='https://www.instagram.com/xr.couture/' target="_blank" style={{textDecoration:"none"}}>
                                <img className='icon-footer' src={instagramLogo} alt='Instagram'></img>
                                </a>
                                <a className='social-content' href='https://www.instagram.com/xr.couture/' target="_blank">@xr.couture</a>

                                
                            </div>

                            {/* https://www.instagram.com/xr.couture/ */}
                            <div className='social-icon-1'>
                                <a href='https://twitter.com/XRCouture' target="_blank" style={{textDecoration:"none"}}><RxTwitterLogo color='#EDE9E9' size={50} className='icon-footer'/></a>
                                  <a className='social-content' href='https://twitter.com/XRCouture' target="_blank">xrcouture.com</a>
                                  </div>
                        </div>
                        <div className='footer-social-container'>

                            <div className='social-icon-1'>
                                <a href='https://www.instagram.com/xr.couture/' target="_blank" style={{textDecoration:"none"}}>
                                <RxDiscordLogo color='#EDE9E9' size={50} className='icon-footer'/>
                                </a>
                                <a className='social-content' href='https://www.instagram.com/xr.couture/' target="_blank">@xr.couture</a>

                                
                            </div>

                            {/* https://www.instagram.com/xr.couture/ */}
                            <div className='social-icon-1'>
                                <a href='https://www.linkedin.com/company/xrcouture/' target="_blank" style={{textDecoration:"none"}}><FaLinkedinIn color='#EDE9E9' size={50} className='icon-footer'/></a>
                                  <a className='social-content' href='https://www.linkedin.com/company/xrcouture/' target="_blank">xrcouture.com</a>
                                  </div>
                        </div>

                        {/* <div className='terms-container'>
                            <p className='terms-text'>FAQ</p>
                            <p className='terms-text'>Terms & Conditions</p>
                            <p className='terms-text'>Privacy Policy</p>
                        </div> */}
                    </div>
                    <div className='col-md-6 col-lg-6 col-xl-6 col-sm-5 col-xs-4 footer-logo-container'>
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
                            <textarea rows={7} cols={20} className="w-80 h-80 footer-textarea footer-support-subtitle" required="Query is required" style={{display:text}} value={msg} onChange={e => setMsg(e.target.value)} />
                            {/* <div className='email-container'>
                            <input type='email' className='footer-input' required="Email id is required" placeholder='Type your email id' value={email} onChange={e => setEmail(e.target.value)} />
                            <img type='submit' className='footer-send-button' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAACXBIWXMAAAsTAAALEwEAmpwYAAABcElEQVR4nO2VP0vEQBDF4+FZKCJ2nlpY2FhpZSXY2IlY2Vra+hEiVjYWNgeb95YcuZs5TakfQFEELQRBFAQVrBTBP+AHiKzVIed55pLuHoQsye78dng7s57XVRoJeatkLMCsl5eUNAJcCvAk5HEtCJZ93y9kChFr5wS4iuO4T6xddWMh74Rc3zemPxNIkiQ9LuiutdONYCUPBHhRYEvJ0Y5BAmwosP3zuwMLEAn56d51YCo1pB6GE84TY0yx2f84DEfcRoR8/c7Q2oVUIAVOlFxsNYfkoPNKyEcBLpyHh77f2zZEgDUB9tqZ6/t+QYAlAc6UfHDgKIoG/lwYGzOk5JuUy8Nt78xrOCTkh5A71SAYb7lAgSMlk44e4Dq3TBR4d5nElcpYJp4YY4pCrih5/i9PhDzN9XRFwKSQz7/VSdWYUsd1ouRms4qvBcFMJhXvepcC9616V9WYUqrgDQHnc+/CAtj87xPyJvebsSuvDX0BG+devAf/+FAAAAAASUVORK5CYII="></img>
                            {/* <GrSend className='send-button' color='blue' style={{color:"#a69c9c"}} type='submit'/> */}
                            {/* </div>  */}
                            <div class="webflow-style-input">
                                <input class="" type="email"required="Email id is required" placeholder='Type your email id' value={email} onChange={e => setEmail(e.target.value)}></input>
                                <button type="submit"><i class="fa fa-paper-plane"></i></button>
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
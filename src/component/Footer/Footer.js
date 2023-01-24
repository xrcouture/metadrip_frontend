import React, { useEffect, useState } from 'react'
import './footer.css'
import xrlogo from '../../assets/xr_logo.png'
import instagramLogo from '../../assets/instagram.png';
import websiteLogo from '../../assets/website.png';
import { GrSend } from 'react-icons/gr';
import { RxTwitterLogo,RxDiscordLogo } from 'react-icons/rx';
import {FaLinkedinIn} from 'react-icons/fa'
import { Formik } from 'formik';

import axios from "axios";

const baseURL = "https://xrcapi.onrender.com/query/set";

function Footer() {

   
      const [supportMsg, setSupportMsg] = useState("")
      const [error, setError] = useState("")



    
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
                            setSupportMsg("")
                    }}>
                            <h1 className='footer-support-title mt-2' style={{display:text=="none"?"block":"none"}}>Hi,</h1>
                            <p className='footer-support-subtitle text-center' style={{display:text=="none"?"block":"none"}}>Any queries, Pls drop <br /> your email ID Down <br />Below, We’ll get back to<br /> you....</p>


                            <Formik
                            initialValues={{ email: '', query: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.email) {
                                errors.email = 'Email address is required';
                                } else if (
                                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                                ) {
                                errors.email = 'Invalid email address';
                                }
                                return errors;
                            }}
                            onSubmit={(values, { setSubmitting,resetForm }) => {
                                setSubmitting(false)
                                axios
                                .post(baseURL,values,
                                {
                                    headers: {
                                        'Access-Control-Allow-Origin': '*',
                                        'Content-Type': 'application/json',
                                    },
                                }
                                )
                                .then ((res) => {
                                    console.log(res)
                                    setSupportMsg(res.data.msg)
                                    resetForm()
                                    setText("none")
                                })
                                .catch ((error) => {
                                    setError(error.message)
                                })
                            }}
                            >
                            {({
                                values,
                                errors,
                                touched,
                                handleChange,
                                handleBlur,
                                handleSubmit,
                                isSubmitting,
                                /* and other goodies */
                            }) => (
                                <form onSubmit={handleSubmit}>
                            <textarea className="w-80 h-80 footer-textarea footer-support-subtitle" style={{display:text}} name="query" value={values.query} onChange={handleChange}/>
                            <div class="webflow-style-input">
                                <input 
                                type="email" 
                                required 
                                placeholder='Type your email id' 
                                name='email' 
                                value={values.email}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                ></input>
                                <button onClick={handleSubmit} disabled={isSubmitting} type="submit"><i class="fa fa-paper-plane"></i></button><br />
                            </div>
                                <div className='support-notifier-error text-danger'>{errors.email && touched.email && errors.email}</div>
                                {supportMsg == "" ?  <div className='footer-response-msg text-success'>{supportMsg}</div> : <div className='footer-response-msg text-error'>{error}</div>}
                                {/* <input
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                {errors.email && touched.email && errors.email}
                                <button type="submit" disabled={isSubmitting}>
                                    Submit
                                </button> */}
                                </form>
                            )}
                            </Formik>

                            {/* <div className='footer-response-msg text-secondary' style={{display: `${supportMsg.length ? "block" : "none"}`}}> {
                                supportMsg
                            }</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Footer
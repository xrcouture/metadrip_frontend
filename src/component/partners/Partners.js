import React from 'react'
import './partners.css'
import passive1 from '../../assets/passive1.png'
import passive2 from '../../assets/passive2.png'
import passive3 from '../../assets/passive3.png'
import passive4 from '../../assets/passive4.png'
import partner1 from '../../assets/partner1.png'
import partner2 from '../../assets/partner2.png'
import partner3 from '../../assets/partner3.png'

function Partners() {
  return (
    <div className='partners-container'>
            <div className='row'>
                <div className='col-md-6 col-lg-6 col-xl-6 passive-income-container'>
                    <div className='passive-income'>
                    <img src={passive1} alt="" className="passive1-img" />
                    <p className='text-center passive-header'>“  Passive Income</p>
                    <p className='text-center passive-header'>Multiple Possibilities.</p>
                    <img src={passive2} alt="" className="passive2-img" />
                    <div className='passive-subtitle-container text-center'>
                    <p className='text-center passive-subtitle'>Create reels with <b>Snapchat  AR,</b> wear it on your photos and even on video calls. Get  custom  <b>‘virtual-fitting’</b> on a photograph to flaunt on your social media platforms. </p>
                    </div>
                    <div className='button-container'>
                    <button className='button-passive'>Read more.</button>
                    <img src={passive3} alt="" className='passive3-img' />
                    </div>
                    <img src={passive4} alt="" className='passive4-img' />
                    </div>
                </div>
                <div className='col-md-6 col-lg-6 col-xl-6 p-0 partners-section'>
                    {/* <div className='partners'>
                    <p className='partner-title'>Partners</p>
                    <div className='row'>
                        <div className='col-md-4 col-lg-4 col-sm-4 partner-icon-container'> <img src={partner1} alt="" className='partner-icon' /> <p className='partner-text mt-4'>Decentraland</p></div>
                        <div className='col-md-4 col-lg-4 col-sm-4 partner-icon-container'> <img src={partner2} alt="" className='partner-icon' /> <p className='partner-text mt-4'>Snapchat</p></div>
                        <div className='col-md-4 col-lg-4 col-sm-4 partner-icon-container'> <img src={partner3} alt="" className='partner-icon' /> <p className='partner-text mt-4'>Polygon</p></div>

                    </div>
                    </div> */}
                </div>
            </div>

    </div>
  )
}

export default Partners
import React,{useState} from 'react'
import './social.css'
import imgbg from '../../../assets/3dbackground.png'
import img3d from '../../../assets/3d.png'
import Carousel from 'react-bootstrap/Carousel';
// import vid from '../../../assets/sample-video.mp4'
import vid from '../../../assets/vibrant-video_r.mp4'
import passive1 from '../../../assets/passive1.png'
import passive2 from '../../../assets/passive2.png'
import passive3 from '../../../assets/passive3.png'
import passive4 from '../../../assets/passive4.png'
import passivelg1 from '../../../assets/passive1-lg.png'
import passivelg2 from '../../../assets/passive2-lg.png'
import passivelg3 from '../../../assets/passive3-lg-.png'
import imagebg from '../../../assets/carousel-img.png'
// COMPRESSED_WEBP
// import virtualpng from '../../../assets/virtual.png'
import virtualpng from '../../../assets/virtual.webp'
import { MdVideoCameraBack } from "react-icons/md";
// COMPRESSED_WEBP
// import vibrance from '../../../assets/Vibrance Splash.png'
import vibrance from '../../../assets/Vibrance Splash.webp'
import ellipse from '../../../assets/ellipse-bg.png'






function Social() {

        const [index, setIndex] = useState(0);
      
        const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
        }

  return (
    <div className='social-container'>
        <div className='row'>
        <div className='rotating-container col-md-6'>
            <img src={imgbg} alt="" className='bg-3d w-80' />
            <img src={vibrance} alt="" className='img3d w-90' /> 
            {/* <a href='https://heymint.xyz/meta-drip-xrc' style={{fontFamily: "Clash Display SemiBold"}} target="_blank" className='button-3d header-button button-buy-swiper'>BUY NOW</a> */}
            <a href='/Vibrance_Splash' style={{fontFamily: "Clash Display SemiBold"}} className='button-3d header-button button-buy-swiper'>BUY NOW</a>
            <img src={ellipse} alt="" className='ellipse-3d' /> 
        </div>
        <div className='col-md-6 social-container-content p-2'>
          <div className='social-media-container'>
        <h1 className="section3-title-new-2 text-center section2-title-right utility-title social-media-title" style={{fontFamily:"Clash Display bold"}}>Social Media Usage</h1>
            <p className="section2-title-right text-center utility-subtitle mobile-subtitle social-media-subtitle" style={{fontFamily:"Clash Display Light", marginTop: "1.5vw"}}>
              Create reels with <b>Snapchat AR,</b> wear it on your 
              video calls. Get custom <b>‘virtual-fitting’</b> on a photograph to 
              flaunt on your social media platforms.
            </p>
          </div>
            <div className='video-container'>
                {/* ..................................................... */}
                <Carousel  interval="10000000"  activeIndex={index} onSelect={handleSelect} className="w-80" controls={true}>
                    <Carousel.Item>
                        <video src={vid} autoPlay={true} loop muted className='video-player w-100 h-100' />
                        <MdVideoCameraBack color='white' className='icon-video' size={28}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={virtualpng}
                        alt="Second slide"

                        />
                    </Carousel.Item>
                    </Carousel>
                {/* ..................................................... */}
            </div>
            <div className='container-passive-income'>
            <div className='passive-income-container'>
                    <div className='passive-income d-md-flex flex-md-column align-items-md-center'>
                    <img src={passivelg1} alt="" className="passivelg1" />
                  <img src={passivelg1} alt="" className="passivelg2" />
                  <img src={passivelg2} alt="" className="passivelg3" />
                  <img src={passivelg3} alt="" className="passivelg5" />
                  <img src={passivelg1} alt="" className="passivelg4" />
                    <img src={passive1} alt="" className="passive1-img" />
                    <p className='text-center passive-title pt-4 utility-title' style={{fontFamily:"Clash Display Medium"}}><b>Earn Passive Income</b></p>
                    {/* <p className='text-center passive-title pb-4' style={{fontFamily:"Clash Display Bold"}}><b>Multiple Possibilities.</b></p> */}
                    <img src={passive2} alt="" className="passive2-img" />
                    <div className='passive-subtitle-container text-center pt-0'>
                    <p className='text-center utility-subtitle mobile-subtitle pt-0' style={{fontFamily:"Clash Display Light"}}>The holders of Meta Drip will be able to earn Passive Income. XR Couture will list the Meta Drip collection for sale on web2 platforms, such as Roblox, Zepeto, etc. The revenue earned from these platforms will be shared amongst the holders.
 </p>
                    </div>
                    <div className='button-container'>
                    {/* <button className='button-passive'>Read more.</button> */}
                    <img src={passive3} alt="" className='passive3-img' />
                    </div>
                    <img src={passive4} alt="" className='passive4-img' />
                    </div>
                </div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Social
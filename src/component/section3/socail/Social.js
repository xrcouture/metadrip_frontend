import React,{useState} from 'react'
import './social.css'
import imgbg from '../../../assets/3dbackground.png'
import img3d from '../../../assets/3d.png'
import Carousel from 'react-bootstrap/Carousel';
import vid from '../../../assets/sample-video.mp4'
import passive1 from '../../../assets/passive1.png'
import passive2 from '../../../assets/passive2.png'
import passive3 from '../../../assets/passive3.png'
import passive4 from '../../../assets/passive4.png'

import { MdVideoCameraBack } from "react-icons/md";






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
            <img src={img3d} alt="" className='img3d w-90' />  
        </div>
        <div className='col-md-6 social-container-content'>
        <h1 className="utility-content-header text-center">Social Integrations.</h1>
            <p className="utility-content-subtitle text-center">
              Create reels with <b>Snapchat AR,</b>
                <br />wear it on your photos and even<br /> on
              video calls. Get custom<br /> <b>‘virtual-fitting’</b> on a photograph to<br/>
              flaunt on your social media <br />platforms.
            </p>
            <div className='video-container'>
                {/* ..................................................... */}
                <Carousel activeIndex={index} onSelect={handleSelect} className="w-80">
                    <Carousel.Item>
                        <video src={vid} autoPlay={true} muted className='video-player w-100 h-100' />
                        <MdVideoCameraBack color='white' className='icon-video' size={28}/>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        className="d-block w-100"
                        src={imgbg}
                        alt="Second slide"
                        />
                    </Carousel.Item>
                    </Carousel>
                {/* ..................................................... */}
            </div>
            <div className='container-passive-income'>
            <div className='passive-income-container'>
                    <div className='passive-income'>
                    <img src={passive1} alt="" className="passive1-img" />
                    <p className='text-center utility-content-header'>“  Passive Income</p>
                    <p className='text-center utility-content-header'>Multiple Possibilities.</p>
                    <img src={passive2} alt="" className="passive2-img" />
                    <div className='passive-subtitle-container text-center'>
                    <p className='text-center utility-content-subtitle'>Create reels with <b>Snapchat  AR,</b> wear it on your photos and even on video calls. Get  custom  <b>‘virtual-fitting’</b> on a photograph to flaunt on your social media platforms. </p>
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
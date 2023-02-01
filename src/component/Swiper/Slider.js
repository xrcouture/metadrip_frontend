import React, { useEffect, useState,useCallback } from "react";
import image from "../../assets/image-1.png";
import bg from "../../assets/background-section2.png";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Navigation, Pagination,Thumbs } from "swiper";
import Section2 from "../section2/Section2";

import {Link} from 'react-router-dom'
function Slider() {

  const links = {
    1:"/Chrome_Heart",
    2:"/Puffy_Crossroads",
    3:"/Yifan",
    4:"/Technological_Hippie",
    5:"/Flora_Flamboyance",
    6:"/Xenia",
    7:"/Star_Cloak",
    8:"/Celestial_Dream",
    9:"/Dazzling_Devil",
    10:"/Pop_Kiss",
    11:"/Comic_Boom",
    12:"/Human_Masquerade"
  }
  const [buyLink,setBuyLink] = useState(links[7])
  return (
    <div className="section2-overall">
    <img src={bg} alt="" className="section2-container-background" />
    <div className="swiper-container-overall">
      <div className="slider-container">
        <Swiper
          className="swiper-horizontal whitelist-swiper"
          modules={[Pagination,Navigation, A11y, EffectCoverflow]}
          slidesPerView={"auto"}
          centeredSlides={true}
          grabCursor={true}
          effect="coverflow"
          initialSlide={6}
          direction="horizontal"
          updateOnWindowResize
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 300,
            modifier: 2.5,
            shadow: true,
          }}
          zoom={{
            maxRatio: 5,
          }}
          onSlideChange={(e) => {setBuyLink(links[e.activeIndex+1])}}
          freeMode={false}
          speed={1200}
          autoplay={true}
          slideToClickedSlide={true}
        >
          <SwiperSlide data-swiper-autoplay="2000" >
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/1.mp4" className="swiper-image swiper-image-dummy"  muted loop />
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/1.mp4" className="swiper-image-video" autoPlay  muted loop />
          </SwiperSlide>
          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/2.mp4" className="swiper-image swiper-image-dummy"   muted loop />           
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/2.mp4" className="swiper-image-video" autoPlay  muted loop />           
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/3.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/3.mp4" className="swiper-image-video" autoPlay  muted loop />  
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/4.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/4.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/5.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/5.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/6.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/6.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/7.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/7.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/8.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/8.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/9.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/9.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/10.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/10.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/11.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/11.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
          <SwiperSlide>
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/12.mp4" className="swiper-image swiper-image-dummy"   muted loop />
          <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/12.mp4" className="swiper-image-video" autoPlay  muted loop /> 
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
    <div className="swiper-btn-container">
          <Link to={buyLink} className="button-buy-swiper header-button" href="">BUY NOW</Link>
    </div>
      <Section2 />
    </div>
  );
}

export default Slider;

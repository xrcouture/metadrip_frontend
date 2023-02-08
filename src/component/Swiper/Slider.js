import React, { useState, lazy, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Navigation, Pagination } from "swiper";
import Section2 from "../section2/Section2";
import "./slider.css";

import {Link} from 'react-router-dom'

const VideoContainer = lazy(() => import('../VideoContainer/VideoContainer'));

function Slider() {

  const bg = "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/background-section2.png"

  const links = {
    1:"/Chrome_Heart",
    2:"/Puffy_Crossroads",
    3:"/Oyster_Spell",
    4:"/Vibrance_Splash",
    5:"/Flora_Flamboyance",
    6:"/Rufflanza",
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
            // PUBLIC_SALE
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

          <SwiperSlide data-swiper-autoplay="2000">
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/1.mp4" className="swiper-image swiper-image-dummy" muted loop />

            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/1.mp4"
              }} />
            </Suspense>
            
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/2.mp4" className="swiper-image swiper-image-dummy"   muted loop />   
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/2.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/3.mp4" className="swiper-image swiper-image-dummy" muted loop />
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/3.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/4.mp4" className="swiper-image swiper-image-dummy" muted loop />
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/4.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/5.mp4" className="swiper-image swiper-image-dummy" muted loop />
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/5.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/6.mp4" className="swiper-image swiper-image-dummy" muted loop />
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/6.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/7.mp4" className="swiper-image swiper-image-dummy" muted loop />

            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/7.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/8.mp4" className="swiper-image swiper-image-dummy" muted loop />
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/8.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/9.mp4" className="swiper-image swiper-image-dummy" muted loop />
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/9.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/10.mp4" className="swiper-image swiper-image-dummy" muted loop />

            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/10.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/11.mp4" className="swiper-image swiper-image-dummy" muted loop />

            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/11.mp4"
              }} />
            </Suspense>
          </SwiperSlide>

          <SwiperSlide>
            <video src="https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/12.mp4" className="swiper-image swiper-image-dummy" muted loop />
            
            <Suspense>
              <VideoContainer data={{
                autoplay : true,
                classnames : "swiper-image-video",
                src : "https://xrcouture-xrcie.s3.ap-south-1.amazonaws.com/Metadrip/12.mp4"
              }} />
            </Suspense>
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

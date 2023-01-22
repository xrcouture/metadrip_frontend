import React, { useEffect, useState } from "react";
import image from "../../assets/image-1.png";
// import bg from "../../assets/collections-background.png";
import bg from "../../assets/background-section2.png";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Navigation, Pagination,Thumbs } from "swiper";
import Section2 from "../section2/Section2";
import video1 from '../../assets/carousel/1.mp4'
import video2 from '../../assets/carousel/2.mp4'
import video3 from '../../assets/carousel/3.mp4'
import video4 from '../../assets/carousel/4.mp4'
import video5 from '../../assets/carousel/5.mp4'
import video6 from '../../assets/carousel/6.mp4'
import video7 from '../../assets/carousel/7.mp4'
import video8 from '../../assets/carousel/8.mp4'
import video9 from '../../assets/carousel/9.mp4'
// import video10 from '../../assets/carousel/10.mp4'
import video11 from '../../assets/carousel/11.mp4'
import video12 from '../../assets/carousel/12.mp4'
import { useSwiperSlide } from 'swiper/react';

// let items = [
//   {
//     id: "image1",
//     title: "Nature Image1",
//     url: image,
//     className: "image1",
//     active: false,
//   },
//   {
//     id: "image2",
//     title: "Nature Image2",
//     url: image,
//     className: "image2",
//     active: false,
//   },
//   {
//     id: "image3",
//     title: "Nature Image2",
//     url: image,
//     className: "image3",
//     active: true,
//   },
//   {
//     id: "image4",
//     title: "Nature Image2",
//     url: image,
//     className: "image4",
//     active: false,
//   },
//   {
//     id: "image5",
//     title: "Nature Image2",
//     url: image,
//     className: "image5",
//     active: false,
//   },
// ];

function Slider() {
  const items = [video1,video2,video3,video4,video5,video6,video7,video8,video9,video11,video12]
  const [activeIndex,setAciveIndex] = useState(5)
  const [clickedIndex, setClickedIndex] = useState(0)
  const swiperSlide = useSwiperSlide();
  useEffect(() => {
      // let demo = div.closet()
      let vid = document.querySelector('.whitelist-swiper .swiper-wrapper .swiper-slide-active').children[0]
      vid.autoplay = true
      vid.load();

      let prev =document.querySelector(".whitelist-swiper .swiper-wrapper .swiper-slide-prev")
      if(prev){
        prev.children[0].autoplay = false 
        prev.children[0].load() 
      }
      let slides =document.querySelector(".whitelist-swiper .swiper-wrapper")
        slides.children[clickedIndex].children[0].autoplay = false 
        slides.children[clickedIndex].children[0].load() 

      let next = document.querySelector(".whitelist-swiper .swiper-wrapper .swiper-slide-next")
      if(next){
        next.children[0].autoplay = false 
        next.children[0].load() 
      }

    console.log("Hello")
  },[activeIndex])
  return (
    <div className="section2-overall">
    <img src={bg} alt="" className="section2-container-background" />
    <div className="swiper-container-overall">
      {/* <img src={bg} alt="" className="carousel-background" /> */}
      <div className="slider-container">
        <Swiper
          className="swiper-horizontal whitelist-swiper"
          modules={[Pagination,Navigation, A11y, EffectCoverflow,Thumbs]}
          slidesPerView={"auto"}
          centeredSlides={true}
          grabCursor={true}
          effect="coverflow"
          initialSlide={5}
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
          freeMode={false}
          slideToClickedSlide={true}
          onActiveIndexChange={(index)=>{
            console.log(index.previousIndex)
            setClickedIndex(index.previousIndex)
              setAciveIndex(index.activeIndex)
          }}
        >

          <SwiperSlide data-swiper-autoplay="2000" >
            <video src={video1} className="swiper-image"  muted loop />
          </SwiperSlide>
          <SwiperSlide>
            <video src={video2} className="swiper-image"   muted loop />           
          </SwiperSlide>
          <SwiperSlide>
          <video src={video3} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video4} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video5} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video6} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video7} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video8} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video9} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video8} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video11} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video12} className="swiper-image"   muted loop />
          </SwiperSlide>
          {/* <SwiperSlide>
          <video src={video6} className="swiper-image"   muted loop />
          </SwiperSlide> */}
          {/* <SwiperSlide>
          <video src={video7} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video1} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video1} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video1} className="swiper-image"   muted loop />
          </SwiperSlide>
          <SwiperSlide>
          <video src={video1} className="swiper-image"   muted loop />
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
      <Section2 />
    </div>
  );
}

export default Slider;

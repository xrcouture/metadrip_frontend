import React from 'react'
import './timeline.css'
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Pagination,EffectCards, Navigation } from "swiper";

function Timeline() {
  return (
    <div className='timeline-container'>
    <div className='timeline-line'></div>
    <div className="slider-container-1">
        <Swiper
          className="swiper-horizontal swiper-timeline"
          slidesPerView={4}
          spaceBetween={50}
          centeredSlides={true}
          parallax={true}
          // pagination={{
          //   clickable: true
          // }}
          navigation
          modules={[Pagination, Navigation]}
          // className="mySwiper"
          // modules={[Pagination, A11y,Navigation, EffectCards]}
          // slidesPerView={5}
          // centeredSlides={true}
          // grabCursor={true}
          // effect="coverflow"
          // // initialSlide={0}
          // direction="horizontal"
          // updateOnWindowResize
          // coverflowEffect={{
          //   rotate: 0,
          //   stretch: 0,
          //   depth: 300,
          //   modifier: 2.5,
          //   shadow: true,
          // }}
          // navigation
          breakpoints={{
            // when window width is >= 640px
            640: {
              width: 640,
              slidesPerView: 1,
            },
            // when window width is >= 768px
            768: {
              width: 768,
              slidesPerView: 2,
            },
          }}
          // zoom={{
          //   maxRatio: 5,
          // }}
          // freeMode={false}
          slideToClickedSlide={true}  
        >
          <SwiperSlide className='swiper-card'>
            {/* <div className='swiper-navigation-buttons'>
            <div className='swiper-button-prev'>
            </div>
            <div className='swiper-button-next'></div>
            </div> */}
            <div className='dot'></div>
            <div className='timeline'></div>
            <h1>May 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </SwiperSlide>
          <SwiperSlide className='swiper-card'>
            <div className='dot'></div>
            <div className='timeline'></div>
            <h1>May 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </SwiperSlide>
          <SwiperSlide className='swiper-card'>
            <div className='dot'></div>
            <div className='timeline'></div>
            <h1>May 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </SwiperSlide>
          <SwiperSlide className='swiper-card'>
            <div className='dot'></div>
            <div className='timeline'></div>
            <h1>May 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </SwiperSlide>
          <SwiperSlide className='swiper-card'>
            <div className='dot'></div>
            <div className='timeline'></div>
            <h1>May 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </SwiperSlide>
          <SwiperSlide className='swiper-card'>
            <div className='dot'></div>
            <div className='timeline'></div>
            <h1>May 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </SwiperSlide>
          <SwiperSlide className='swiper-card'>
            <div className='dot'></div>
            <div className='timeline'></div>
            <h1>May 2021</h1>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
            </p>
          </SwiperSlide>
            <SwiperSlide className='swiper-card'>
                <div className='dot'></div>
                <div className='timeline'></div>
                <h1>May 2021</h1>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                </p>
            </SwiperSlide>
        </Swiper>
        </div>
    </div>
  )
}

export default Timeline
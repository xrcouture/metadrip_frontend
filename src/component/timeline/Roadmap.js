import React from 'react';

import './roadmap.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

function Roadmap() {
  
  return (
    <div className='roadmap-container'>
      <hr className='timelines'></hr>
      {/* <div className='roadmap-title'>ROADMAP</div> */}
      <div className='swip-container'>
        <Swiper
          spaceBetween={'3%'}
          slidesPerView={2}
          onSlideChange={() => console.log("slide")}
          centeredSlides={true}
          slideToClickedSlide={true}
          // loop={true}
          className='slides-container'
          breakpoints={{
            450: {
              width: 450,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
            1200: {
              width: 1200,
              slidesPerView: 4,
            },
          }}
        >
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'></div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q1 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> MVFW 22</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam,
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'></div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q2 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> SnapChat partnership</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam,
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'></div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q3 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> Metaverse Event</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam,
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'></div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q4 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> Working on launch of Metadrip Phase 2</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam,
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'></div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q1 2023</div>
                  <div style={{fontFamily: "Clash Display Light"}}> Launch of Meta Drip Phase 2</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam,
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'></div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q2 2023</div>
                  <div style={{fontFamily: "Clash Display Light"}}> XR Couture Interoperable Ecosystem</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                  dolore magna aliqua. Ut enim ad minim veniam,
                  </div>
                </div>
              </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  )
}

export default Roadmap

import React from 'react';

import './roadmap.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import roadmapLogo1 from '../../assets/Q12022.png'
import roadmapLogo2 from '../../assets/Q22022.PNG'
import roadmapLogo3 from '../../assets/Q32022.PNG'
import roadmapLogo4 from '../../assets/Q42022.png'
import roadmapLogo5 from '../../assets/Q12023.PNG'
import roadmapLogo6 from '../../assets/Q22023.JPG'

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
          draggable={false}
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
                <div className='swip-card-box'>
                  <img className='roadmap-logos' src={roadmapLogo1} alt=''></img>
                </div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q1 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> MVFW 22</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  - Launch of Meta Drip <br />
                  - Partnered with Decentraland <br />
                  - Launch of XR Couture HQ on DCL <br />
                  - Sold out: Pre-Sale of Phase 1 <br />
                  - Released Phase 1 DCL wearables <br />
                  - Gave-away of 4K DCL wearables <br />
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'>
                  <img className='roadmap-logos' src={roadmapLogo2} alt=''></img>
                </div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q2 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> SnapChat partnership</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  - Launched user dashboard to view and unlock multiple utilities (Virtual fittings, AR/VR features, etc) <br />
                  - Partnered with Snapchat & launched AR filters for Phase 1 NFTs 
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'>
                <img className='roadmap-logos border-gradient border-gradient-purple' src={roadmapLogo3} alt=''></img>
                </div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q3 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> Metaverse Event</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  - XR Couture’s Pandora, hosted on Spatial to share a glimpse of future utilities
                  - CloneX unlocked: Made Vibrance Splash available for your CloneX avatar
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'>
                <img className='roadmap-logos' src={roadmapLogo4} alt=''></img>
                </div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q4 2022</div>
                  <div style={{fontFamily: "Clash Display Light"}}> Working on launch of Metadrip Phase 2</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  - Pause on sales
                  - New Metaverse partnerships (TBA)
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'>
                <img className='roadmap-logos' src={roadmapLogo5} alt=''></img>
                </div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q1 2023</div>
                  <div style={{fontFamily: "Clash Display Light"}}> Launch of Meta Drip Phase 2</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  - Relaunch with exciting perks
                  - Announcement of Passive income utility
                  - New website and user dashboard experience
                  </div>
                </div>
              </div>
          </SwiperSlide>
          <SwiperSlide className='swip-card'>
            <div className='swip-card-container'>
                <div className='swip-card-ball'></div>
                <div className='swip-card-box'>
                <img className='roadmap-logos' src={roadmapLogo6} alt=''></img>
                </div>
                <div className='swip-card-content'>
                  <div className='swip-card-content-title'>
                  <div >Q2 2023</div>
                  <div style={{fontFamily: "Clash Display Light"}}> XR Couture Interoperable Ecosystem</div>
                  </div>
                  <div className='swip-card-content-desc'>
                  - (details will be posted soon)
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

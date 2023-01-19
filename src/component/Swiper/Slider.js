import React from "react";
import image from "../../assets/image-1.png";
import bg from "../../assets/collections-background.png";
import "./slider.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { A11y, EffectCoverflow, Navigation, Pagination } from "swiper";

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
  return (
    <div className="swiper-container-overall">
      {/* <img src={bg} alt="" className="carousel-background" /> */}
      <div className="slider-container">
        <Swiper
          className="swiper-horizontal"
          modules={[Pagination,Navigation, A11y, EffectCoverflow]}
          slidesPerView={5}
          centeredSlides={true}
          grabCursor={true}
          loopFillGroupWithBlank={true}
          effect="coverflow"
          initialSlide={2}
          direction="horizontal"
          updateOnWindowResize
          loopedSlides={5}
          // loop={true}
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
        >
          <SwiperSlide>
            <img alt="" className="swiper-image" src={image} />
            <div class="info">
              <button class="slide-button">Whitelist</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" className="swiper-image" src={image} />
            <div class="info">
              <button class="slide-button">Whitelist</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" className="swiper-image" src={image} />
            <div class="info">
              <button class="slide-button">Whitelist</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" className="swiper-image" src={image} />
            <div class="info">
              <button class="slide-button">Whitelist</button>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <img alt="" className="swiper-image" src={image} />
            <div class="info">
              <button class="slide-button">Whitelist</button>
            </div>
          </SwiperSlide>
          {/* <SwiperSlide>
            <img alt="" className="swiper-image" src={image} />
            <div class="info">
              <button class="slide-button">Whitelist</button>
            </div>
          </SwiperSlide> */}
        </Swiper>
      </div>
    </div>
  );
}

export default Slider;
